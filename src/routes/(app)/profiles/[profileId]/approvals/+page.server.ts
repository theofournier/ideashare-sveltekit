import { profileActions } from '$lib/server/profileActions';
import { postApprovalActions } from '$lib/server/postApprovalActions';
import { profileApprovalActions } from '$lib/server/profileApprovalActions';
import type { Actions, PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals: { supabase, getSession }, params }) => {
	const session = await getSession();
	if (params.profileId !== session?.user.id) {
		throw error(401, 'Unauthorized');
	}

	const { data: postApprovals, error: errorPostApprovals } = await supabase
		.from('posts_approvals')
		.select(
			`
			*
		`
		)
		.eq('approver_id', params.profileId)
		.order('created_at', { ascending: false });
	console.log('POST APPROVALS', errorPostApprovals);

	const { data: profileApprovals, error: errorProfileApprovals } = await supabase
		.from('profiles_approvals')
		.select(
			`
			*
		`
		)
		.eq('approver_id', params.profileId)
		.order('created_at', { ascending: false });
	console.log('PROFILE APPROVALS', errorProfileApprovals);

	return { postApprovals, profileApprovals };
};

export const actions: Actions = {
	...profileActions,
	...postApprovalActions,
	...profileApprovalActions
};
