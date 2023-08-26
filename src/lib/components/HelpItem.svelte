<script lang="ts">
	import type { Help } from '$lib/data/post';
	import type { Profile } from '$lib/data/users';

	export let help: Help;
	export let profile: Profile | null;
	export let showDelete = false;
</script>

<div class="border-solid border-2 border-black">
	<p>{help.title}</p>
	<p>{help.description}</p>
	<p>{profile?.first_name} {profile?.last_name} ({help.user_id})</p>
	<p>{help.created_at}</p>
	{#if showDelete}
		<form method="POST" action="?/delete">
			<input type="hidden" name="id" value={help.id} />
			<button class="btn">❌</button>
		</form>
	{/if}
</div>
