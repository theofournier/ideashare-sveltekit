import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	like: async ({ locals: { supabase, getSession }, params }) => {
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
	}
};
