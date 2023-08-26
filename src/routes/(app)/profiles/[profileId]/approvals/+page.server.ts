import { profileActions } from '$lib/server/profileActions';
import type { Actions } from './$types';

export const actions: Actions = {
	...profileActions
};
