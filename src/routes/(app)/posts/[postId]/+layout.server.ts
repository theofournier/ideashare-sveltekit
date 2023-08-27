import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { supabase }, params }) => {
	const { data, error: errorPost } = await supabase
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
		.eq('id', params.postId)
		.single();
	console.log('POST', params.postId, errorPost);
	if (!data) {
		throw error(404, "Post not found")
	}
	return { post: data };
}) satisfies LayoutServerLoad;
