import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase } }) => {
	const { data, error } = await supabase.from('profiles').select(`
        *
    `);
	console.log('PROFILES', error);
	return { profiles: data };
}) satisfies PageServerLoad;
