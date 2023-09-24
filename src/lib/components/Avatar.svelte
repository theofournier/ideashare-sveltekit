<script lang="ts">
	import { getAvatarUrl } from '$lib/utils/getAvatarUrl';

	export let avatarUrl: string | undefined = undefined;
	export let avatarName: string | undefined | null = undefined;

	$: url = avatarUrl || getAvatarUrl(avatarName);
</script>

{#if url}
	<div class="avatar">
		<div class="rounded-full w-10">
			<img src={url} alt={url} />
		</div>
	</div>
{:else}
	<div class="avatar">
		<div class="rounded-full w-10 bg-black" />
	</div>
{/if}
