<script lang="ts">
	import type { Label, Post } from '$lib/data/post';
	import type { Profile } from '$lib/data/users';
	import Link from '../Link.svelte';
	import PostImage from './PostImage.svelte';

	export let post: Post;
	export let labels: (Label | null)[] | null;
	export let profile: Profile | null;
</script>

<div class="card shadow-lg">
	<div class="card-body">
		<h2 class="card-title">{post.title}</h2>
		<p>{post.type}</p>
		<p>{post.id}</p>
		<p>{post.language}</p>
		<p>{post.short_desc}</p>
		<p>{post.long_desc}</p>
		<p>{post.privacy}</p>
		{#if post.url_links}
			{#each post.url_links as link}
				<Link {link} />
			{/each}
		{/if}
		{#if labels}
			{#each labels as label}
				<p>{label?.name}</p>
			{/each}
		{/if}
		{#if post.images}
			{#each post.images as image}
				<PostImage postImageName={image} />
			{/each}
		{/if}
		<p>{profile?.first_name} {profile?.last_name}</p>
		<p>{post.created_at}</p>
		<a href={`/posts/${post.id}`} class="btn">See post</a>
	</div>
</div>
