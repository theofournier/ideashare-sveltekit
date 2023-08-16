import type { Handle } from '@sveltejs/kit';
import type { UserProfile } from './data/users';

export const handleProfile: Handle = async ({ event, resolve }) => {
	const { getSession, supabase } = event.locals;
	const session = await getSession();

	if (session) {
		const { user } = session;
		if (user) {
			const { data: profile } = await supabase
				.from('profiles')
				.select('*')
				.eq('id', user?.id)
				.maybeSingle();

			const userProfile: UserProfile = { ...user, ...profile };
			event.locals.user = userProfile;
		}
	} else {
		event.locals.user = null;
	}

	return resolve(event);
};
