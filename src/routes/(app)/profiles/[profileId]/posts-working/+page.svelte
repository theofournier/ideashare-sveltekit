<script lang="ts">
	import PostItem from '$lib/components/post/PostItem.svelte';

	export let data;

	$: posts = data.posts;
</script>

<div>
	{#if !posts || posts.length === 0}
		<p>No posts</p>
	{:else}
		Posts
		{#each posts as post (post.id)}
			<PostItem
				{post}
				labels={post.posts_labels.map((label) => label.labels)}
				profile={post.profiles}
			/>
		{/each}
	{/if}
</div>
