import { error, fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import type { ShareType } from '$lib/data/post';

export const load: PageServerLoad = async ({ locals: { supabase, getSession }, params }) => {
	const session = await getSession();
	if (!session) {
		throw error(401, 'You must be logged in');
	}
	const { data: post, error: errorPost } = await supabase
		.from('posts')
		.select('*, posts_labels(*)')
		.eq('id', params.postId)
		.single();
	console.log('POST', errorPost);
	if (!post) {
		throw error(404, 'Post not found');
	}
	if (post.user_id !== session.user.id) {
		throw error(403, 'You must be the owner to edit');
	}

	const { data: labels, error: errorLabels } = await supabase.from('labels').select('*');
	console.log('LABELS', errorLabels);

	return { labels, post };
};

export const actions: Actions = {
	default: async ({ request, locals: { supabase, getSession }, params }) => {
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}
		const { data: post, error: errorPost } = await supabase
			.from('posts')
			.select('*')
			.eq('id', params.postId)
			.single();
		console.log('POST', errorPost);
		if (!post) {
			return fail(404, {
				error: 'Post not found'
			});
		}
		if (post.user_id !== session.user.id) {
			return fail(403, {
				error: 'Only owner can edit'
			});
		}

		const formData = await request.formData();

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

		const { error: errorEdit, data } = await supabase
			.from('posts')
			.update({
				language: formData.get('language')?.toString(),
				long_desc: formData.get('longDescription')?.toString(),
				short_desc: formData.get('shortDescription')?.toString(),
				title: formData.get('title')?.toString(),
				url_links: urlLinks.length > 0 ? urlLinks : undefined,
				images: postImagesName.length > 0 ? postImagesName : undefined,
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
			.eq('id', params.postId)
			.select();

		console.log('EDIT POST', { errorEdit, data });

		if (data && data.length > 0) {
			const labels = formData.getAll('label') as string[];
			await supabase.from('posts_labels').delete().eq('post_id', params.postId);
			if (labels) {
				const { error: errorLabel } = await supabase
					.from('posts_labels')
					.insert(labels.map((label) => ({ post_id: post.id, label_id: label })));

				console.log('CREATE LABELs', { errorLabel });
			}
		}
	}
};
