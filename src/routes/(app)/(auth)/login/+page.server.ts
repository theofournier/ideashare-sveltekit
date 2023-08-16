import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	'login-with-password': async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();

		const email = formData.get('email')?.toString();
		const password = formData.get('password')?.toString();

		if (!email) {
			return fail(400, {
				loginWithPassword: {
					error: 'Please enter your email',
					values: {
						email
					}
				}
			});
		}

		if (!password) {
			return fail(400, {
				loginWithPassword: {
					error: 'Please enter your password',
					values: {
						email
					}
				}
			});
		}

		const { error } = await supabase.auth.signInWithPassword({ email, password });

		if (error) {
			if (error instanceof AuthApiError && error.status === 400) {
				return fail(400, {
					loginWithPassword: {
						error: 'Invalid credentials.',
						values: {
							email
						}
					}
				});
			}
			return fail(500, {
				loginWithPassword: {
					error: 'Server error. Try again later.',
					values: {
						email
					}
				}
			});
		}

		throw redirect(303, '/');
	}
};
