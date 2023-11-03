<script lang="ts">
	import { getAvatarUrl } from '$lib/utils/storageUrl';
	import { getInitials } from '$lib/utils/getInitials';

	export let avatarUrl: string | undefined = undefined;
	export let avatarName: string | undefined | null = undefined;
	export let firstName: string | undefined | null = undefined;
	export let lastName: string | undefined | null = undefined;
	export let width = 'w-10';

	$: url = avatarUrl || getAvatarUrl(avatarName);
	$: initials = getInitials(firstName, lastName);
</script>

{#if url}
	<div class="avatar">
		<div class="{width} rounded-full">
			<img src={url} alt={url} />
		</div>
	</div>
{:else}
	<div class="avatar placeholder">
		<div class="bg-neutral text-neutral-content rounded-full {width}">
			<span>{initials}</span>
		</div>
	</div>
{/if}
