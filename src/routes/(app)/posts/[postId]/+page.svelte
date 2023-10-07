<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import PostImage from '$lib/components/PostImage.svelte';

	export let data;

	$: post = data.post;
</script>

<div>
	{#if !post}
		<p>Post not found</p>
	{:else}
		Info
		<p>{post.long_desc}</p>
		{#if post.url_links}
			{#each post.url_links as link}
				<Link {link} />
			{/each}
		{/if}
		{#if post.images}
			{#each post.images as image}
				<PostImage postImageName={image} />
			{/each}
		{/if}
	{/if}
</div>
