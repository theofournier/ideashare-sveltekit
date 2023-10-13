import { ceil, toInteger } from 'lodash-es';
import type { PageServerLoad } from './$types';

const ITEM_PER_PAGE = 2;

export const load = (async ({ locals: { supabase }, url }) => {
	let page = toInteger(url.searchParams.get('page'));
	if (page > 0) {
		page -= 1;
	}

	const { data, count, error } = await supabase
		.from('profiles')
		.select(
			`
        *
    `,
			{ count: 'estimated' }
		)
		.range(page * ITEM_PER_PAGE, (page + 1) * ITEM_PER_PAGE - 1);
	console.log('PROFILES', error);
	return { profiles: data, currentPage: page + 1, totalPage: ceil((count ?? 0) / ITEM_PER_PAGE) };
}) satisfies PageServerLoad;
