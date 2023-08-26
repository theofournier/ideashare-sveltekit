import { profileActions } from '$lib/server/profileActions';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase }, params }) => {
	const { data, error } = await supabase
		.from('posts_helps')
		.select(
			`
			*,
			posts(
				*,
				posts_labels(
					*,
					labels(
						*
					)
				),
				posts_notes(
					*
				),
				profiles!posts_user_id_fkey(*)
			),
			profiles(*)
		`
		)
		.eq('user_id', params.profileId)
		.order('created_at', { ascending: false });

	console.log('POST HELPS', error);
	return { helps: data };
};

export const actions: Actions = {
	...profileActions
};
