import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { ShareType } from '$lib/data/post';

export const actions: Actions = {
	save: async ({ request, locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}

		const formData = await request.formData();

		const { error } = await supabase
			.from('profiles')
			.update({
				privacy: formData.get('private')?.toString() === 'on' ? 'private' : 'public',
				follow: formData.get('follow')?.toString() as ShareType,
				posts: formData.get('posts')?.toString() as ShareType,
				posts_following: formData.get('postsFollowing')?.toString() as ShareType,
				posts_working: formData.get('postsWorking')?.toString() as ShareType,
				helps: formData.get('helps')?.toString() as ShareType,
				profiles_following: formData.get('profilesFollowing')?.toString() as ShareType
			})
			.eq('id', session.user.id);

		console.log('UPDATE PRIVACY', error);
	},
	reset: async ({ locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}

		const { error } = await supabase
			.from('profiles')
			.update({
				privacy: 'public',
				follow: 'all',
				posts: 'all',
				posts_following: 'all',
				posts_working: 'all',
				helps: 'all',
				profiles_following: 'all'
			})
			.eq('id', session.user.id);

		console.log('UPDATE PRIVACY', error);
	}
};
