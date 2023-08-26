import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { supabase }, params }) => {
	const { data, error } = await supabase
		.from('profiles')
		.select(`*, profiles_follows!profiles_follows_following_user_id_fkey(*)`)
		.eq('id', params.profileId)
		.single();
	console.log('PROFILE', params.profileId, error, data);
	if (data) {
		return { profile: data };
	}
	return { profile: null };
}) satisfies LayoutServerLoad;
