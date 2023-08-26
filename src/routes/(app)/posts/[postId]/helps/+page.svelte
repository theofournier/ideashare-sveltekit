<script lang="ts">
	import { page } from '$app/stores';
	export let data;
</script>

<a class="btn" href={`/posts/${$page.params.postId}/helps/create`}>New help</a>
{#if !data.helps || data.helps.length === 0}
	<p>No Helps</p>
{:else}
	{#each data.helps as help (help.id)}
		<div class="border-solid border-2 border-black">
			<p>{help.title}</p>
			<p>{help.description}</p>
			<p>{help.profiles?.first_name} {help.profiles?.last_name} ({help.user_id})</p>
			<p>{help.created_at}</p>
			<form method="POST" action="?/delete">
				<input type="hidden" name="id" value={help.id} />
				<button class="btn">❌</button>
			</form>
		</div>
	{/each}
{/if}
