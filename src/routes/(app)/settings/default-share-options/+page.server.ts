import { error, fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import type { ShareType } from '$lib/data/post';
import type { DefaultShareOptionsUpdate } from '$lib/data/users';

export const load: PageServerLoad = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();
	if (!session) {
		throw error(401, 'You must be logged in');
	}
	const { data: defaultShareOptions, error: err } = await supabase
		.from('profiles_default_share_options')
		.select('*')
		.eq('user_id', session.user.id)
		.single();
	console.log('DEFAULT_SHARE_OPTIONS', err);

	return { defaultShareOptions };
};

export const actions: Actions = {
	save: async ({ request, locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}

		const formData = await request.formData();

		const data: DefaultShareOptionsUpdate = {
			privacy: formData.get('private')?.toString() === 'on' ? 'private' : 'public',
			anonymous: formData.get('anonymous')?.toString() === 'on',
			like: formData.get('like')?.toString() as ShareType,
			comment: formData.get('comment')?.toString() as ShareType,
			help: formData.get('help')?.toString() as ShareType,
			link_post: formData.get('linkPost')?.toString() as ShareType,
			work: formData.get('work')?.toString() as ShareType,
			contact: formData.get('contact')?.toString() as ShareType,
			follow: formData.get('follow')?.toString() as ShareType,
			status: formData.get('status')?.toString() as ShareType
		};

		const { data: defaultShareOptions } = await supabase
			.from('profiles_default_share_options')
			.select('*')
			.eq('user_id', session.user.id)
			.single();

		if (defaultShareOptions) {
			const { error } = await supabase
				.from('profiles_default_share_options')
				.update(data)
				.eq('user_id', session.user.id);

			console.log('UPDATE DEFAULT SHARE OPTIONS', error);
		} else {
			const { error } = await supabase
				.from('profiles_default_share_options')
				.insert({ user_id: session.user.id, ...data });
			console.log('INSERT DEFAULT SHARE OPTIONS', error);
		}
	},
	reset: async ({ locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}

		const { error } = await supabase
			.from('profiles_default_share_options')
			.update({
				privacy: 'public',
				anonymous: false,
				like: 'all',
				comment: 'all',
				help: 'all',
				link_post: 'all',
				work: 'all',
				contact: 'all',
				follow: 'all',
				status: 'work'
			})
			.eq('user_id', session.user.id);

		console.log('UPDATE DEFAULT SHARE OPTIONS', error);
	}
};
