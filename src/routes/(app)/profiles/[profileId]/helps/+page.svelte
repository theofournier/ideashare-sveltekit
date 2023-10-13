<script lang="ts">
	import HelpItem from '$lib/components/help/HelpItem.svelte';
	export let data;
</script>

{#if !data.helps || data.helps.length === 0}
	<p>No Helps</p>
{:else}
	{#each data.helps as help (help.id)}
		<div class="border-solid border-2 border-black p-1">
			<h2>{help.posts?.title}</h2>
			<p>{help.posts?.profiles?.first_name} {help.posts?.profiles?.last_name}</p>
			<p>{help.posts?.created_at}</p>
			<a class="btn" href={`/posts/${help.post_id}/helps`}>See post helps</a>
			<HelpItem {help} profile={help.profiles} />
		</div>
	{/each}
{/if}
