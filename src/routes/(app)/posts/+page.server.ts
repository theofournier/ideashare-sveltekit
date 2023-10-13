import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { toInteger, ceil } from 'lodash-es';

const ITEM_PER_PAGE = 2;

export const load = (async ({ locals: { supabase }, url }) => {
	let page = toInteger(url.searchParams.get('page'));
	if (page > 0) {
		page -= 1;
	}
	const search = url.searchParams.get('search');

	let query = supabase
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
	if (search) query = query.textSearch('title_shortdesc', search, { type: 'websearch' });

	const { data, count, error } = await query;
	console.log('POSTS', error, search);
	return {
		posts: data,
		currentPage: page + 1,
		totalPage: ceil((count ?? 0) / ITEM_PER_PAGE),
		search
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	search: async ({ request }) => {
		const formData = await request.formData();
		const search = formData.get('search') as string;
		if (!search) {
			return fail(404, {
				error: 'Search is required'
			});
		}

		throw redirect(303, `?search=${search}`);
	}
};
