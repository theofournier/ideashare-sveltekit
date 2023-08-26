<script lang="ts">
	import { page } from '$app/stores';
	import HelpItem from '$lib/components/HelpItem.svelte';
	export let data;
</script>

<a class="btn" href={`/posts/${$page.params.postId}/helps/create`}>New help</a>
{#if !data.helps || data.helps.length === 0}
	<p>No Helps</p>
{:else}
	{#each data.helps as help (help.id)}
		<HelpItem {help} profile={help.profiles} showDelete />
	{/each}
{/if}
