import type { PageServerLoad } from './$types';
import { toInteger, ceil } from 'lodash-es';

const ITEM_PER_PAGE = 20;

export const load = (async ({ locals: { supabase }, url }) => {
	let page = toInteger(url.searchParams.get('page'));
	if (page > 0) {
		page -= 1;
	}

	const { data, count, error } = await supabase
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
        ),
        profiles!posts_user_id_fkey(*)
    `,
			{ count: 'estimated' }
		)
		.range(page * ITEM_PER_PAGE, (page + 1) * ITEM_PER_PAGE - 1);
	console.log('POSTS', error);
	return { posts: data, currentPage: page + 1, totalPage: ceil((count ?? 0) / ITEM_PER_PAGE) };
}) satisfies PageServerLoad;
