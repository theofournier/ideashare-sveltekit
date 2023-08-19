import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase } }) => {
	const { data, error } = await supabase.from('posts').select(`
        *,
        posts_shareoptions(
            *
        ),
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
	return { posts: data };
}) satisfies PageServerLoad;
