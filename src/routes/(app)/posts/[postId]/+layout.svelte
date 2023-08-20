<script lang="ts">
	import { page } from '$app/stores';
	export let data;

	$: post = data.post;
</script>

<div>
	{#if !post}
		<p>Post not found</p>
	{:else}
		<h2>{post.title}</h2>
		<p>{post.id}</p>
		<p>{post.type}</p>
		<p>{post.created_at}</p>
		<p>{post.language}</p>
		<p>{post.short_desc}</p>
		<p>{post.privacy}</p>
		{#if post.posts_labels}
			{#each post.posts_labels as label}
				<p>{label.labels?.name}</p>
			{/each}
		{/if}
		<div class="tabs tabs-boxed">
			<a
				href={`/posts/${$page.params.postId}`}
				class="tab"
				class:tab-active={$page.url.pathname === `/posts/${$page.params.postId}`}>Info</a
			>
			<a
				href={`/posts/${$page.params.postId}/comments`}
				class="tab"
				class:tab-active={$page.url.pathname === `/posts/${$page.params.postId}/comments`}
				>Comments</a
			>
			<a
				href={`/posts/${$page.params.postId}/helps`}
				class="tab"
				class:tab-active={$page.url.pathname === `/posts/${$page.params.postId}/helps`}
				>Helps</a
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
				class:tab-active={$page.url.pathname === `/posts/${$page.params.postId}/notes`}
				>Notes</a
			>
			<a
				href={`/posts/${$page.params.postId}/approvals`}
				class="tab"
				class:tab-active={$page.url.pathname === `/posts/${$page.params.postId}/approvals`}
				>Approvals</a
			>
		</div>
		<slot />
	{/if}
</div>
