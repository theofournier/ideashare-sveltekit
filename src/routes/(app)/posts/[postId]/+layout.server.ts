import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { supabase }, params }) => {
	const { data, error } = await supabase
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
		posts_likes(*),
		posts_works(*),
		posts_followers(*),
        profiles!posts_user_id_fkey(*)
    `
		)
		.eq('id', params.postId);
	console.log('POST', params.postId, error);
	if (data && data.length > 0) {
		return { post: data[0] };
	}
	return { post: null };
}) satisfies LayoutServerLoad;
