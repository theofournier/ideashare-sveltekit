import { redirect, type Handle } from '@sveltejs/kit';

export const handleRouting: Handle = async ({ event, resolve }) => {
	const { getSession } = event.locals;
	const session = await getSession();
	const routeId = event.route.id;

	if (routeId) {
		if (routeId.includes('(unprotected)') && Boolean(session)) {
			throw redirect(303, '/');
		} else if (routeId.includes('(protected)') && Boolean(!session)) {
			throw redirect(303, '/');
		}
	}

	return resolve(event);
};
