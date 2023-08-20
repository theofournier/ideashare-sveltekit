<script lang="ts">
	export let data;
</script>

<form method="POST" action="?/create">
	<div class="text-xl">New comment</div>
	<textarea placeholder="New comment" class="textarea textarea-bordered" name="comment" />
	<button class="btn">Send</button>
</form>
{#if !data.comments || data.comments.length === 0}
	<p>No Comments</p>
{:else}
	{#each data.comments as comment (comment.id)}
		<div class="border-solid border-2 border-black">
			<p>{comment.text}</p>
			<p>{comment.profiles?.first_name} {comment.profiles?.last_name} ({comment.user_id})</p>
			<p>{comment.created_at}</p>
			<form method="POST" action="?/delete">
				<input type="hidden" name="id" value={comment.id} />
				<button class="btn">❌</button>
			</form>
		</div>
	{/each}
{/if}
