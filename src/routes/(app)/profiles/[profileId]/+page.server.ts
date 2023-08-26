import { profileActions } from '$lib/server/profileActions';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase }, params }) => {
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
		profiles!posts_user_id_fkey(*)
    `
		)
		.eq('user_id', params.profileId);
	console.log('PROFILE POSTS', params.profileId, errorPosts);
	return { posts };
}) satisfies PageServerLoad;

export const actions: Actions = {
	...profileActions
};
