import { error, fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import type { PostType, ShareType } from '$lib/data/post';

export const load: PageServerLoad = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();
	if (!session) {
		throw error(403, 'You must be logged in');
	}
	const { data: labels, error: labelsError } = await supabase.from('labels').select('*');
	console.log('LABELS', labelsError);

	const { data: defaultShareOptions, error: errorDefaultShareOptions } = await supabase
		.from('profiles_default_share_options')
		.select('*')
		.eq('user_id', session.user.id)
		.single();
	console.log('DEFAULT_SHARE_OPTIONS', errorDefaultShareOptions);

	return { labels, defaultShareOptions };
};

export const actions: Actions = {
	default: async ({ request, locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}
		const formData = await request.formData();

		if (!formData.get('postType')) {
			return fail(404, {
				error: 'Type is required'
			});
		}

		const postImages = formData.getAll('postImages') as Blob[];
		const postImagesName: string[] = [];
		if (postImages.length > 0) {
			for (const image of postImages) {
				if (image.size && image.size > 0) {
					const { data: imageName, error: errorUpload } = await supabase.storage
						.from('post-images')
						.upload(`${crypto.randomUUID()}.${image.type.split('/')[1]}`, image);
					if (imageName) {
						postImagesName.push(imageName.path);
					} else {
						console.log('ERROR UPLOAD IMAGE', errorUpload);
					}
				}
			}
		}

		const urlLinks = formData.getAll('link') as string[];

		const { error: errorPost, data } = await supabase
			.from('posts')
			.insert({
				type: formData.get('postType') as PostType,
				language: formData.get('language')?.toString(),
				long_desc: formData.get('longDescription')?.toString(),
				short_desc: formData.get('shortDescription')?.toString(),
				title: formData.get('title')?.toString(),
				user_id: session.user.id,
				url_links: urlLinks.length > 0 ? urlLinks : null,
				images: postImagesName.length > 0 ? postImagesName : null,
				privacy: formData.get('private')?.toString() === 'on' ? 'private' : 'public',
				anonymous: formData.get('anonymous')?.toString() === 'on',
				like: formData.get('like')?.toString() as ShareType,
				comment: formData.get('comment')?.toString() as ShareType,
				help: formData.get('help')?.toString() as ShareType,
				link_post: formData.get('linkPost')?.toString() as ShareType,
				work: formData.get('work')?.toString() as ShareType,
				contact: formData.get('contact')?.toString() as ShareType,
				follow: formData.get('follow')?.toString() as ShareType,
				status: formData.get('status')?.toString() as ShareType
			})
			.select();

		console.log('CREATE POST', { errorPost, data });

		if (data && data.length > 0) {
			const post = data[0];

			const labels = formData.getAll('label') as string[];
			if (labels) {
				const { error: errorLabel } = await supabase
					.from('posts_labels')
					.insert(labels.map((label) => ({ post_id: post.id, label_id: label })));

				console.log('CREATE LABELs', { errorLabel });
			}
		}
	}
};
