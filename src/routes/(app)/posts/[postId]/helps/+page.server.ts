import { postActions } from '$lib/server/postActions';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase }, params }) => {
	const { data, error } = await supabase
		.from('posts_helps')
		.select('*, profiles(*)')
		.eq('post_id', params.postId)
		.order('created_at', { ascending: false });

	console.log('POST HELPS', error);
	return { helps: data };
};

export const actions: Actions = {
	delete: async ({ request, locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}

		const formData = await request.formData();
		const id = formData.get('id') as string;
		if (!id) {
			return fail(404, {
				error: 'Id required'
			});
		}

		const { error } = await supabase.from('posts_helps').delete().eq('id', id);

		console.log('DELETE HELP', error);
	},
	...postActions
};
