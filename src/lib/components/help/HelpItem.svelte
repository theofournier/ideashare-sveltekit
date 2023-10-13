<script lang="ts">
	import type { Help } from '$lib/data/post';
	import type { Profile } from '$lib/data/users';
	import Link from '../Link.svelte';
	import HelpImage from './HelpImage.svelte';

	export let help: Help;
	export let profile: Profile | null;
	export let showDelete = false;
</script>

<div class="border-solid border-2 border-black">
	<p>{help.title}</p>
	<p>{help.description}</p>
	{#if help.url_links}
		{#each help.url_links as link}
			<Link {link} />
		{/each}
	{/if}
	{#if help.images}
		{#each help.images as image}
			<HelpImage imageName={image} />
		{/each}
	{/if}
	<p>{profile?.first_name} {profile?.last_name} ({help.user_id})</p>
	<p>{help.created_at}</p>
	{#if showDelete}
		<form method="POST" action="?/delete-help">
			<input type="hidden" name="id" value={help.id} />
			<button class="btn">❌</button>
		</form>
	{/if}
</div>
