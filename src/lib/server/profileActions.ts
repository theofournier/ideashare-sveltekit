import { fail, type Actions } from '@sveltejs/kit';

export const profileActions: Actions = {
	follow: async ({ locals: { supabase, getSession }, params }) => {
		if (!params.profileId) {
			return fail(404, {
				error: 'ProfileId is required'
			});
		}
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}

		const { error } = await supabase.from('profiles_follows').insert({
			follower_user_id: session.user.id,
			following_user_id: params.profileId
		});

		console.log('FOLLOW', error);
	},
	unfollow: async ({ locals: { supabase, getSession }, params }) => {
		if (!params.profileId) {
			return fail(404, {
				error: 'ProfileId is required'
			});
		}
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}

		const { error } = await supabase
			.from('profiles_follows')
			.delete()
			.eq('follower_user_id', session.user.id)
			.eq('following_user_id', params.profileId);

		console.log('UNFOLLOW', error);
	}
};
