<script lang="ts">
	import Pagination from '$lib/components/Pagination.svelte';
	import PostItem from '$lib/components/post/PostItem.svelte';

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
		<Pagination currentPage={data.currentPage} totalPage={data.totalPage} />
	{/if}
</div>
