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

		const { error } = await supabase.from('posts_helps').insert({
			post_id: params.postId,
			user_id: session.user.id,
			title: formData.get('title') as string,
			description: formData.get('description') as string
		});
		console.log('CREATE HELP', error);
		if (!error) {
			throw redirect(303, `/posts/${params.postId}/helps`);
		}
	}
};
