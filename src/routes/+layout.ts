// src/routes/+layout.ts
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import type { Database } from '$lib/supabase.schema';
import type { LayoutLoad } from './$types';
import type { UserProfile } from '$lib/data/users';

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
	depends('supabase:auth');

	const supabase = createSupabaseLoadClient<Database>({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event: { fetch },
		serverSession: data.session
	});

	const {
		data: { session }
	} = await supabase.auth.getSession();

	let userProfile: UserProfile | null = null;

	if (session) {
		const { user } = session;
		if (user) {
			const { data: profile } = await supabase
				.from('profiles')
				.select('*')
				.eq('id', user?.id)
				.maybeSingle();
			if (profile) {
				userProfile = { ...user, ...profile };
			}
		}
	}

	return { supabase, session, user: userProfile };
};
