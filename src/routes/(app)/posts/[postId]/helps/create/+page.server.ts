import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase, getSession }, params }) => {
	const session = await getSession();
	if (!session) {
		throw error(401, 'You must be logged in');
	}

	const { data: post } = await supabase
		.from('posts')
		.select(
			`
        *
   		`
		)
		.eq('id', params.postId)
		.single();
	if (!post) {
		throw error(404, 'Post not found');
	}

	if (post.user_id !== session?.user.id && post.help === 'none') {
		throw error(401, 'Not available');
	}
};

export const actions: Actions = {
	default: async ({ params, request, locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}
		const formData = await request.formData();

		const helpImages = formData.getAll('helpImages') as Blob[];
		const helpImagesName: string[] = [];
		if (helpImages.length > 0) {
			for (const image of helpImages) {
				if (image.size && image.size > 0) {
					const { data: imageName, error: errorUpload } = await supabase.storage
						.from('help-images')
						.upload(`${crypto.randomUUID()}.${image.type.split('/')[1]}`, image);
					if (imageName) {
						helpImagesName.push(imageName.path);
					} else {
						console.log('ERROR UPLOAD IMAGE', errorUpload);
					}
				}
			}
		}

		const urlLinks = formData.getAll('link') as string[];

		const { error } = await supabase.from('posts_helps').insert({
			post_id: params.postId,
			user_id: session.user.id,
			title: formData.get('title') as string,
			description: formData.get('description') as string,
			url_links: urlLinks.length > 0 ? urlLinks : null,
			images: helpImagesName.length > 0 ? helpImagesName : null
		});
		console.log('CREATE HELP', error);
		if (!error) {
			throw redirect(303, `/posts/${params.postId}/helps`);
		}
	}
};
