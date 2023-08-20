import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase }, params }) => {
	const { data: profile, error: errorProfile } = await supabase
		.from('profiles')
		.select(`*`)
		.eq('id', params.profileId);

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
        posts_notes(
            *
        )
    `
		)
		.eq('user_id', params.profileId);
	console.log('PROFILE', params.profileId, { errorProfile, errorPosts });
	if (profile && profile.length > 0) {
		return { profile: profile[0], posts };
	}
	return { profile: null, posts: null };
}) satisfies PageServerLoad;
