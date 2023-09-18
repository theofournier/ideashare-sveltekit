import { postActions } from '$lib/server/postActions';
import { approvalActions } from '$lib/server/approvalActions';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase }, params }) => {
	const { data, error } = await supabase
		.from('posts_approvals')
		.select(
			`
			*
		`
		)
		.eq('post_id', params.postId)
		.order('created_at', { ascending: false });

	console.log('POST APPROVALS', error);
	return { postApprovals: data };
};

export const actions: Actions = {
	...postActions,
	...approvalActions
};
