import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { postActions } from '$lib/server/postActions';

export const load: PageServerLoad = async ({ locals: { supabase, getSession }, params }) => {
	const session = await getSession();

	const { data, error } = await supabase
		.from('posts_notes')
		.select('*')
		.eq('post_id', params.postId)
		.eq('user_id', session?.user.id)
		.order('created_at', { ascending: false });

	console.log('POST NOTES', error);
	return { notes: data };
};

export const actions: Actions = {
	create: async ({ request, locals: { supabase, getSession }, params }) => {
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}
		const formData = await request.formData();
		const note = formData.get('note') as string;

		if (!note) {
			return fail(404, {
				error: 'Note required'
			});
		}

		const { error } = await supabase.from('posts_notes').insert({
			post_id: params.postId,
			user_id: session.user.id,
			text: note
		});

		console.log('CREATE NOTE', error);
	},
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

		const { error } = await supabase.from('posts_notes').delete().eq('id', id);

		console.log('DELETE NOTE', error);
	},
	...postActions
};
