import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase } }) => {
	const { data, error } = await supabase.from('posts').select(`
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
    `);
	console.log('POSTS', error);
	return { posts: data };
}) satisfies PageServerLoad;
