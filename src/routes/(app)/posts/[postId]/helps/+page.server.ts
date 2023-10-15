import { postActions } from '$lib/server/postActions';
import { error, fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({
	locals: { supabase, getSession },
	parent,
	params
}) => {
	const { post } = await parent();
	const session = await getSession();

	if (post.user_id !== session?.user.id && post.help === 'none') {
		throw error(401, 'Not available');
	}

	const { data, error: errorHelps } = await supabase
		.from('posts_helps')
		.select('*, profiles(*)')
		.eq('post_id', params.postId)
		.order('created_at', { ascending: false });

	console.log('POST HELPS', errorHelps);
	return { helps: data };
};

export const actions: Actions = {
	'delete-help': async ({ request, locals: { supabase, getSession } }) => {
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
