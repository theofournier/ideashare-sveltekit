import type { Profile } from '$lib/data/users';
import { profileActions } from '$lib/server/profileActions';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase }, params }) => {
	const { data, error } = await supabase
		.from('profiles_follows')
		.select(`*, profiles!profiles_follows_following_user_id_fkey(*)`)
		.eq('follower_user_id', params.profileId);
	console.log('PROFILE', params.profileId, error);
	return {
		profiles: data
			?.map((profile) => profile.profiles)
			.filter((profile): profile is Profile => !!profile)
	};
};

export const actions: Actions = {
	...profileActions
};
