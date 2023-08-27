import { profileActions } from '$lib/server/profileActions';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase }, params }) => {
	const { data: posts, error: errorPosts } = await supabase
		.from('posts')
		.select(
			`
			*,
			posts_labels(
				*,
				labels(
					*
				)
			),
			profiles!posts_user_id_fkey(*),
			posts_works!inner(user_id)
		`
		)
		.eq('posts_works.user_id', params.profileId);
	console.log('PROFILE POSTS WORKING', params.profileId, errorPosts);
	return { posts };
};

export const actions: Actions = {
	...profileActions
};
