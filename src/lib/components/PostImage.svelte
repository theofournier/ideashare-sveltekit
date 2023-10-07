<script lang="ts">
	import { getPostImageUrl } from '$lib/utils/storageUrl';

	export let postImageUrl: string | undefined = undefined;
	export let postImageName: string | undefined | null = undefined;

	$: url = postImageUrl || getPostImageUrl(postImageName);
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
