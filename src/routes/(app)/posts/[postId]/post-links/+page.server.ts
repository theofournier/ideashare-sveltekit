import { postActions } from '$lib/server/postActions';
import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { getSession }, parent }) => {
	const { post } = await parent();
	const session = await getSession();

	if (post.user_id !== session?.user.id && post.link_post === 'none') {
		throw error(401, 'Not available');
	}
};

export const actions: Actions = {
	...postActions
};
