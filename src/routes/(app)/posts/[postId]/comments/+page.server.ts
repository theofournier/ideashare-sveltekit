import { error, fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { postActions } from '$lib/server/postActions';

export const load: PageServerLoad = async ({
	locals: { supabase, getSession },
	parent,
	params
}) => {
	const { post } = await parent();
	const session = await getSession();

	if (post.user_id !== session?.user.id && post.comment === 'none') {
		throw error(401, 'Not available');
	}

	const { data, error: errorComments } = await supabase
		.from('posts_comments')
		.select('*, profiles(*)')
		.eq('post_id', params.postId)
		.order('created_at', { ascending: false });

	console.log('POST COMMENTS', errorComments);
	return { comments: data };
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
		const comment = formData.get('comment') as string;

		if (!comment) {
			return fail(404, {
				error: 'Comment cannot be empty'
			});
		}

		const { error } = await supabase.from('posts_comments').insert({
			post_id: params.postId,
			user_id: session.user.id,
			text: comment
		});

		console.log('CREATE COMMENT', error);
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

		const { error } = await supabase.from('posts_comments').delete().eq('id', id);

		console.log('DELETE COMMENT', error);
	},
	...postActions
};
