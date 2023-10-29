import { profileActions } from '$lib/server/profileActions';
import { approvalActions } from '$lib/server/approvalActions';
import type { Actions, PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals: { supabase, getSession }, params }) => {
	const session = await getSession();
	if (params.profileId !== session?.user.id) {
		throw error(401, 'Unauthorized');
	}

	const { data, error: errorApprovals } = await supabase
		.from('posts_approvals')
		.select(
			`
			*
		`
		)
		.eq('approver_id', params.profileId)
		.order('created_at', { ascending: false });

	console.log('POST APPROVALS', errorApprovals);
	return { postApprovals: data };
};

export const actions: Actions = {
	...profileActions,
	...approvalActions
};
