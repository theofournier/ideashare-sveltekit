import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

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
