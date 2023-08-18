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
			last_name: lastName,
			updated_at: new Date()
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
	}
};
