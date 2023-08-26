import { postActions } from '$lib/server/postActions';
import type { Actions } from './$types';

export const actions: Actions = {
	...postActions
};
