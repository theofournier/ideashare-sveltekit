<script lang="ts">
	import { AccordionItem } from '@skeletonlabs/skeleton';

    export let title: string;
</script>

<AccordionItem open>
	<svelte:fragment slot="summary">
		<h3 class="h3">{title}</h3>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<slot />
	</svelte:fragment>
</AccordionItem>
