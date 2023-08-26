<script lang="ts">
	import PostItem from '$lib/components/PostItem.svelte';

	export let data;
</script>

<div>
	Posts
	{#if !data.posts}
		<p>No posts</p>
	{:else}
		{#each data.posts as post (post.id)}
			<PostItem
				{post}
				labels={post.posts_labels.map((label) => label.labels)}
				profile={post.profiles}
			/>
		{/each}
	{/if}
</div>
