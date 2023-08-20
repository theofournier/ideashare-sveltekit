<script lang="ts">
	export let data;
</script>

<form method="POST" action="?/create">
	<textarea placeholder="New note" class="textarea textarea-bordered" name="note" />
	<button class="btn">Save</button>
</form>
{#if !data.notes || data.notes.length === 0}
	<p>No notes</p>
{:else}
	{#each data.notes as note (note.id)}
		<div class="border-solid border-2 border-black">
			<p>{note.text}</p>
			<p>{note.created_at}</p>
			<form method="POST" action="?/delete">
				<input type="hidden" name="id" value={note.id} />
				<button class="btn">❌</button>
			</form>
		</div>
	{/each}
{/if}
