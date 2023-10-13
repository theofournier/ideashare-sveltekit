<script lang="ts">
	import { getHelpImageUrl } from '$lib/utils/storageUrl';

	export let imageUrl: string | undefined = undefined;
	export let imageName: string | undefined | null = undefined;

	$: url = imageUrl || getHelpImageUrl(imageName);
</script>

{#if url}
	<div class="avatar">
		<div class="rounded-md w-32">
			<img src={url} alt={url} />
		</div>
	</div>
{:else}
	<div class="avatar">
		<div class="rounded-full w-32 bg-black" />
	</div>
{/if}
