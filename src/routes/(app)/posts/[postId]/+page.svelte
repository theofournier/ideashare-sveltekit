<script lang="ts">
	export let data;

	$: post = data.post;
</script>

<div>
	{#if !post}
		<p>Post not found</p>
	{:else}
		<h2>{post.title}</h2>
		<p>{post.type}</p>
		<p>{post.id}</p>
		<p>{post.created_at}</p>
		<p>{post.language}</p>
		<p>{post.short_desc}</p>
		<p>{post.long_desc}</p>
		{#if post.url_links}
			{#each post.url_links as link}
				<p>{link}</p>
			{/each}
		{/if}
		{#if post.posts_labels}
			{#each post.posts_labels as label}
				<p>{label.label_id}</p>
				<p>{label.labels?.name}</p>
			{/each}
		{/if}
		{#if post.posts_notes}
			{#each post.posts_notes as note}
				<p>{note.text}</p>
			{/each}
		{/if}
		{#if post.posts_shareoptions}
			<p>{post.posts_shareoptions.privacy}</p>
		{/if}
	{/if}
</div>
