import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { supabase }, params }) => {
	const { data, error: profileError } = await supabase
		.from('profiles')
		.select(`*, profiles_follows!profiles_follows_following_user_id_fkey(*)`)
		.eq('id', params.profileId)
		.single();
	console.log('PROFILE', params.profileId, profileError);
	if (!data) {
		throw error(404, 'Profile not found');
	}
	return { profile: data };
}) satisfies LayoutServerLoad;
