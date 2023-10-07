import type { PostStatus } from '$lib/data/post';
import { fail, type Actions, redirect } from '@sveltejs/kit';

export const postActions: Actions = {
	like: async ({ locals: { supabase, getSession }, params }) => {
		if (!params.postId) {
			return fail(404, {
				error: 'PostId is required'
			});
		}
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}

		const { error } = await supabase.from('posts_likes').insert({
			post_id: params.postId,
			user_id: session.user.id
		});

		console.log('LIKE', error);
	},
	unlike: async ({ locals: { supabase, getSession }, params }) => {
		if (!params.postId) {
			return fail(404, {
				error: 'PostId is required'
			});
		}
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}

		const { error } = await supabase
			.from('posts_likes')
			.delete()
			.eq('user_id', session.user.id)
			.eq('post_id', params.postId);

		console.log('DISLIKE', error);
	},
	follow: async ({ locals: { supabase, getSession }, params }) => {
		if (!params.postId) {
			return fail(404, {
				error: 'PostId is required'
			});
		}
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}

		const { error } = await supabase.from('posts_followers').insert({
			post_id: params.postId,
			user_id: session.user.id
		});

		console.log('FOLLOW', error);
	},
	unfollow: async ({ locals: { supabase, getSession }, params }) => {
		if (!params.postId) {
			return fail(404, {
				error: 'PostId is required'
			});
		}
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}

		const { error } = await supabase
			.from('posts_followers')
			.delete()
			.eq('user_id', session.user.id)
			.eq('post_id', params.postId);

		console.log('UNFOLLOW', error);
	},
	work: async ({ locals: { supabase, getSession }, params }) => {
		if (!params.postId) {
			return fail(404, {
				error: 'PostId is required'
			});
		}
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}

		const { error } = await supabase.from('posts_works').insert({
			post_id: params.postId,
			user_id: session.user.id
		});

		console.log('WORK', error);
	},
	unwork: async ({ locals: { supabase, getSession }, params }) => {
		if (!params.postId) {
			return fail(404, {
				error: 'PostId is required'
			});
		}
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}

		const { error } = await supabase
			.from('posts_works')
			.delete()
			.eq('user_id', session.user.id)
			.eq('post_id', params.postId);

		console.log('UNWORK', error);
	},
	'change-status': async ({ locals: { supabase, getSession }, params, request }) => {
		if (!params.postId) {
			return fail(404, {
				error: 'PostId is required'
			});
		}
		const session = await getSession();
		if (!session) {
			return fail(401, {
				error: 'You must be logged in'
			});
		}

		const formData = await request.formData();
		const status = formData.get('status')?.toString();
		if (!status) {
			return fail(404, {
				error: 'Status required'
			});
		}

		const { error } = await supabase.from('posts_status').insert({
			post_id: params.postId,
			user_id: session.user.id,
			status: status as PostStatus
		});

		console.log('CHANGE_STATUS', error);
	},
	delete: async ({ locals: { supabase, getSession }, params }) => {
		if (!params.postId) {
			return fail(404, {
				error: 'PostId is required'
			});
		}
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
		if (!post) {
			return fail(404, {
				error: 'Post not found'
			});
		}

		const { error: errorDelete } = await supabase.from('posts').delete().eq('id', params.postId);

		console.log('DELETE', errorDelete);

		const { data: postDeleted } = await supabase
			.from('posts')
			.select('*')
			.eq('id', params.postId)
			.single();

		if (!errorDelete && !postDeleted) {
			throw redirect(303, '/');
		}
	}
};
