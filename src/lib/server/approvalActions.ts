import { fail, type Actions } from '@sveltejs/kit';

export const approvalActions: Actions = {
	approve: async ({ request, locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}

		const formData = await request.formData();
		const id = formData.get('id') as string;
		if (!id) {
			return fail(404, {
				error: 'Id required'
			});
		}

		const { error } = await supabase
			.from('posts_approvals')
			.update({ status: 'approved' })
			.eq('id', id);

		console.log('APPROVE', error);
	},
	refuse: async ({ request, locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}

		const formData = await request.formData();
		const id = formData.get('id') as string;
		if (!id) {
			return fail(404, {
				error: 'Id required'
			});
		}

		const { error } = await supabase
			.from('posts_approvals')
			.update({ status: 'refused' })
			.eq('id', id);

		console.log('REFUSE', error);
	}
};
