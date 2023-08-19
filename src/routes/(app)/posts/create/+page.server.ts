import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}
		const formData = await request.formData();

		const { error: errorPost, data } = await supabase
			.from('posts')
			.insert({
				type: 'idea',
				language: formData.get('language')?.toString(),
				long_desc: formData.get('longDescription')?.toString(),
				short_desc: formData.get('shortDescription')?.toString(),
				title: formData.get('title')?.toString(),
				user_id: session.user.id
			})
			.select();

		if (data && data.length > 0) {
			const post = data[0];
			const { error: errorNote } = await supabase.from('posts_notes').insert({
				post_id: post.id,
				user_id: session.user.id,
				text: formData.get('note')?.toString()
			});

			const { error: errorLabel } = await supabase
				.from('posts_labels')
				.insert([{ post_id: post.id, label_id: 'mobile' }]);

			const { error: errorShareOption } = await supabase
				.from('posts_shareoptions')
				.insert([{ post_id: post.id, privacy: 'public' }]);
		}
	}
};
