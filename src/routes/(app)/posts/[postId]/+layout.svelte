<script lang="ts">
	import { page } from '$app/stores';
	export let data;

	$: post = data.post;
	$: isLike = post?.posts_likes.some((like) => like.user_id === data.session?.user.id);
	$: isFollow = post?.posts_followers.some(
		(follower) => follower.user_id === data.session?.user.id
	);
	$: isWork = post?.posts_works.some((work) => work.user_id === data.session?.user.id);
	$: status = post?.posts_status.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
	$: lastStatus = status.at(0)?.status;
	$: isOwner = post.user_id === data.session?.user.id;
</script>

<div>
	<h2>{post.title}</h2>
	<p>{post.id}</p>
	<p>{post.type}</p>
	<p>{post.language}</p>
	<p>{post.short_desc}</p>
	<p>{post.privacy}</p>
	{#if post.posts_labels}
		{#each post.posts_labels as label}
			<p>{label.labels?.name}</p>
		{/each}
	{/if}
	{#if status}
		{#each status as s}
			<p>{s.status} {s.created_at}</p>
		{/each}
	{/if}
	<form method="POST" action="?/change-status">
		<select class="select select-bordered" name="status" value={lastStatus}>
			<option>open</option>
			<option>ongoing</option>
			<option>complete</option>
			<option>close</option>
		</select>
		<button class="btn">Save</button>
	</form>
	<p>{post.profiles?.first_name} {post.profiles?.last_name}</p>
	<p>{post.created_at}</p>
	<p>Views: {post.posts_views?.length ?? 0}</p>
	<form method="POST" action={isLike ? '?/unlike' : '?/like'}>
		<button class={`btn ${isLike ? 'btn-primary' : ''}`}
			>{isLike ? 'Unlike' : 'Like'} {post.posts_likes?.length ?? 0}</button
		>
	</form>
	<form method="POST" action={isFollow ? '?/unfollow' : '?/follow'}>
		<button class={`btn ${isFollow ? 'btn-primary' : ''}`}
			>{isFollow ? 'Unfollow' : 'Follow'} {post.posts_followers?.length ?? 0}</button
		>
	</form>
	<form method="POST" action={isWork ? '?/unwork' : '?/work'}>
		<button class={`btn ${isWork ? 'btn-primary' : ''}`}
			>{isWork ? 'Unwork' : 'Work'} {post.posts_works?.length ?? 0}</button
		>
	</form>
	<a href={`/posts/${$page.params.postId}/edit`} class="btn">Edit</a>
	<form method="POST" action={'?/delete'}>
		<button class="btn btn-error">Delete</button>
	</form>
	<div class="tabs tabs-boxed">
		<a
			href={`/posts/${$page.params.postId}`}
			class="tab"
			class:tab-active={$page.url.pathname === `/posts/${$page.params.postId}`}>Info</a
		>
		<a
			href={`/posts/${$page.params.postId}/comments`}
			class="tab"
			class:tab-active={$page.url.pathname === `/posts/${$page.params.postId}/comments`}>Comments</a
		>
		<a
			href={`/posts/${$page.params.postId}/helps`}
			class="tab"
			class:tab-active={$page.url.pathname === `/posts/${$page.params.postId}/helps`}>Helps</a
		>
		<a
			href={`/posts/${$page.params.postId}/post-links`}
			class="tab"
			class:tab-active={$page.url.pathname === `/posts/${$page.params.postId}/post-links`}
			>Posts linked</a
		>
		<a
			href={`/posts/${$page.params.postId}/notes`}
			class="tab"
			class:tab-active={$page.url.pathname === `/posts/${$page.params.postId}/notes`}>Notes</a
		>
		{#if isOwner}
			<a
				href={`/posts/${$page.params.postId}/approvals`}
				class="tab"
				class:tab-active={$page.url.pathname === `/posts/${$page.params.postId}/approvals`}
				>Approvals</a
			>
		{/if}
	</div>
	<slot />
</div>
