<script lang="ts">
	export let data;
</script>

<div>
	Posts
	{#if !data.posts}
		<p>No posts</p>
	{:else}
		{#each data.posts as post (post.id)}
			<div class="card shadow-lg">
				<div class="card-body">
					<h2 class="card-title">{post.title}</h2>
					<p>{post.type}</p>
					<p>{post.id}</p>
					<p>{post.created_at}</p>
					<p>{post.language}</p>
					<p>{post.short_desc}</p>
					<p>{post.long_desc}</p>
					<p>{post.privacy}</p>
					{#if post.url_links}
						{#each post.url_links as link}
							<p>{link}</p>
						{/each}
					{/if}
					{#if post.posts_labels}
						{#each post.posts_labels as label}
							<p>{label.labels?.name}</p>
						{/each}
					{/if}
					{#if post.posts_notes}
						{#each post.posts_notes as note}
							<p>{note.text}</p>
						{/each}
					{/if}
					<a href={`/posts/${post.id}`} class="btn">See post</a>
				</div>
			</div>
		{/each}
	{/if}
</div>
