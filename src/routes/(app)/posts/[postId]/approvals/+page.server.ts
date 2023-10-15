import { error } from '@sveltejs/kit';
import { postActions } from '$lib/server/postActions';
import { approvalActions } from '$lib/server/approvalActions';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase, getSession }, parent, params }) => {
	const { post } = await parent();
	const session = await getSession();

	if(post.user_id !== session?.user.id) {
		throw error(401, 'Unauthorized');
	}


	const { data, error: errorApprovals } = await supabase
		.from('posts_approvals')
		.select(
			`
			*
		`
		)
		.eq('post_id', params.postId)
		.order('created_at', { ascending: false });

	console.log('POST APPROVALS', errorApprovals);
	return { postApprovals: data };
};

export const actions: Actions = {
	...postActions,
	...approvalActions
};
