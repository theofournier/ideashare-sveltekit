import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();
	if (!session) {
		return fail(401, {
			error: 'You must be logged in'
		});
	}
	const { data, error } = await supabase.from('labels').select('*');

	console.log('LABELS', error);
	return { labels: data };
};

export const actions: Actions = {
	default: async ({ request, locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}
		const formData = await request.formData();

		if (!formData.get('postType')) {
			return fail(404, {
				error: 'Type is required'
			});
		}

		const { error: errorPost, data } = await supabase
			.from('posts')
			.insert({
				type: formData.get('postType') as string,
				language: formData.get('language')?.toString(),
				long_desc: formData.get('longDescription')?.toString(),
				short_desc: formData.get('shortDescription')?.toString(),
				title: formData.get('title')?.toString(),
				user_id: session.user.id,
				privacy: formData.get('private')?.toString() === 'on' ? 'private' : 'public',
				anonymous: formData.get('anonymous')?.toString() === 'on',
				like: formData.get('like')?.toString(),
				comment: formData.get('comment')?.toString(),
				help: formData.get('help')?.toString(),
				link_post: formData.get('linkPost')?.toString(),
				work: formData.get('work')?.toString(),
				contact: formData.get('contact')?.toString(),
				follow: formData.get('follow')?.toString(),
				status: formData.get('status')?.toString()
			})
			.select();

		console.log('CREATE POST', { errorPost, data });

		if (data && data.length > 0) {
			const post = data[0];
			const { error: errorNote } = await supabase.from('posts_notes').insert({
				post_id: post.id,
				user_id: session.user.id,
				text: formData.get('note')?.toString()
			});

			console.log('CREATE NOTE', { errorNote });

			const labels = formData.getAll('label') as string[];
			if (labels) {
				const { error: errorLabel } = await supabase
					.from('posts_labels')
					.insert(labels.map((label) => ({ post_id: post.id, label_id: label })));

				console.log('CREATE LABELs', { errorLabel });
			}
		}
	}
};
