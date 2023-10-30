<script lang="ts">
	import { getPostImageUrl } from '$lib/utils/storageUrl';

	export let postImageUrl: string | undefined = undefined;
	export let postImageName: string | undefined | null = undefined;

	$: url = postImageUrl || getPostImageUrl(postImageName);
</script>

<img class="w-32 h-32 rounded-md object-cover" src={url} alt={url} />
