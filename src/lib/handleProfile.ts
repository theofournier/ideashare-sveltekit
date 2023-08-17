import type { Handle } from '@sveltejs/kit';
import type { UserProfile } from './data/users';

export const handleProfile: Handle = async ({ event, resolve }) => {
	event.locals.getUser = async () => {
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
				if (profile) {
					const userProfile: UserProfile = { ...user, ...profile };
					return userProfile;
				}
			}
		}
		return null;
	};

	return resolve(event);
};
