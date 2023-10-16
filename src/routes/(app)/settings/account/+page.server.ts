import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	update: async ({ request, locals: { supabase, getSession } }) => {
		const formData = await request.formData();
		const firstName = formData.get('firstName')?.toString();
		const lastName = formData.get('lastName')?.toString();

		const session = await getSession();

		if (!session) {
			return fail(401, {
				error: 'Invalid session',
				values: {
					firstName,
					lastName
				}
			});
		}

		const { error } = await supabase.from('profiles').upsert({
			id: session?.user.id,
			first_name: firstName,
			last_name: lastName
		});

		if (error) {
			return fail(500, {
				error: 'Server error. Try again later',
				values: {
					firstName,
					lastName
				}
			});
		}

		return {
			values: {
				firstName,
				lastName
			}
		};
	},
	'update-email': async ({ request, locals: { supabase, getSession } }) => {
		const formData = await request.formData();
		const email = formData.get('email')?.toString();

		if (!email) {
			return fail(404, {
				error: 'Email required'
			});
		}

		const session = await getSession();

		if (!session) {
			return fail(401, {
				error: 'Invalid session'
			});
		}

		const { error } = await supabase.auth.updateUser({ email: email?.trim() });

		console.log('UPDATE EMAIL', error);

		if (error) {
			return fail(500, {
				error: 'Server error. Try again later'
			});
		}
	},
	avatar: async ({ request, locals: { supabase, getSession } }) => {
		const session = await getSession();

		if (!session) {
			return fail(401, {
				error: 'Invalid session'
			});
		}

		const formData = await request.formData();
		const avatarFile = formData.get('avatar') as Blob;

		if (avatarFile.size === 0) {
			return fail(400, {
				error: true,
				message: 'You must provide an avatar'
			});
		}

		const { data: avatar, error: errorUpload } = await supabase.storage
			.from('avatars')
			.upload(`${crypto.randomUUID()}.${avatarFile.type.split('/')[1]}`, avatarFile);

		if (errorUpload) {
			return fail(500, {
				error: 'Fail upload avatar'
			});
		}

		const { error } = await supabase
			.from('profiles')
			.update({
				avatar_name: avatar.path
			})
			.eq('id', session.user.id);

		if (error) {
			return fail(500, {
				error: 'Fail update profile'
			});
		}
	},
	'update-password': async ({ request, locals: { supabase, getSession } }) => {
		const formData = await request.formData();
		const newPassword = formData.get('new-password')?.toString();

		if (!newPassword) {
			return fail(404, {
				error: 'Passwords required'
			});
		}

		const session = await getSession();

		if (!session) {
			return fail(401, {
				error: 'Invalid session'
			});
		}

		const { error } = await supabase.auth.updateUser({ password: newPassword });

		console.log('UPDATE PASSWORD', error);

		if (error) {
			return fail(500, {
				error: 'Server error. Try again later'
			});
		}
	}
};
