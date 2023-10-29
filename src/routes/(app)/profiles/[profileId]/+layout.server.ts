import { error, redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { supabase, getSession }, params }) => {

	if(params.profileId === "me") {
		const session = await getSession();
		if(!session) throw error(401, 'You must be logged in');
		throw redirect(303, `/profiles/${session.user.id}`)
	}

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
