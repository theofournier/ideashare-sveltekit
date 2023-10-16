import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { getSession } }) => {
	const session = await getSession();
	if (!session) {
		throw error(401, 'You need to be logged in');
	}
}) satisfies LayoutServerLoad;
