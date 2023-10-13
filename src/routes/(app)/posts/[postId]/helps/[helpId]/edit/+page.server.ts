import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals: { supabase, getSession } }) => {
	const session = await getSession();
	if (!session) {
		throw error(401, 'You must be logged in');
	}
	const { data: help, error: errorHelp } = await supabase
		.from('posts_helps')
		.select('*')
		.eq('id', params.helpId)
		.single();
	console.log('POST', errorHelp);
	if (!help) {
		throw error(404, 'Help not found');
	}
	if (help.user_id !== session.user.id) {
		throw error(403, 'You must be the owner to edit');
	}

	return { help };
};

export const actions: Actions = {
	default: async ({ params, request, locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}
		const { data: help, error: errorHelp } = await supabase
			.from('posts_helps')
			.select('*')
			.eq('id', params.helpId)
			.single();
		console.log('POST', errorHelp);
		if (!help) {
			return fail(404, {
				error: 'Post not found'
			});
		}
		if (help.user_id !== session.user.id) {
			return fail(403, {
				error: 'Only owner can edit'
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

		const { error, data } = await supabase
			.from('posts_helps')
			.update({
				title: formData.get('title') as string,
				description: formData.get('description') as string,
				url_links: urlLinks.length > 0 ? urlLinks : null,
				images: helpImagesName.length > 0 ? helpImagesName : null
			})
			.eq('id', params.helpId)
			.select();
		console.log('EDIT HELP', { error, data });

		if (!error) {
			throw redirect(303, `/posts/${params.postId}/helps`);
		}
	}
};
