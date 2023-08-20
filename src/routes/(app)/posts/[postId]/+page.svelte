<script lang="ts">
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
				<p>{link}</p>
			{/each}
		{/if}
	{/if}
</div>
