import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase, getSession }, params }) => {
	const session = await getSession();
	if (!session) {
		return fail(401, {
			error: 'You must be logged in'
		});
	}
	const { data: labels, error: errorLabels } = await supabase.from('labels').select('*');
	console.log('LABELS', errorLabels);

	const { data: post, error: errorPost } = await supabase
		.from('posts')
		.select('*, posts_labels(*)')
		.eq('id', params.postId)
		.single();
	console.log('POST', errorPost);
	if (post?.user_id !== session.user.id) {
		return fail(401, {
			error: 'Only owner can edit'
		});
	}

	return { labels, post };
};

export const actions: Actions = {
	default: async ({ request, locals: { supabase, getSession }, params }) => {
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}
		const { data: post, error: errorPost } = await supabase
			.from('posts')
			.select('*')
			.eq('id', params.postId)
			.single();
		console.log('POST', errorPost);
		if (post?.user_id !== session.user.id) {
			return fail(401, {
				error: 'Only owner can edit'
			});
		}

		const formData = await request.formData();

		const { error: errorEdit, data } = await supabase
			.from('posts')
			.update({
				language: formData.get('language')?.toString(),
				long_desc: formData.get('longDescription')?.toString(),
				short_desc: formData.get('shortDescription')?.toString(),
				title: formData.get('title')?.toString(),
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
			.eq('id', params.postId)
			.select();

		console.log('EDIT POST', { errorEdit, data });

		if (data && data.length > 0) {
			const labels = formData.getAll('label') as string[];
			await supabase.from('posts_labels').delete().eq('post_id', params.postId);
			if (labels) {
				const { error: errorLabel } = await supabase
					.from('posts_labels')
					.insert(labels.map((label) => ({ post_id: post.id, label_id: label })));

				console.log('CREATE LABELs', { errorLabel });
			}
		}
	}
};
