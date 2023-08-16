import { redirect, error } from '@sveltejs/kit';

export const actions = {
	default: async ({ locals: { supabase } }) => {
		const { error: err } = await supabase.auth.signOut();
		if (err) {
			throw error(500, 'Something went wrong logging you out.');
		}
		throw redirect(303, '/');
	}
};
