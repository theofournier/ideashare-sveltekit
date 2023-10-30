<script lang="ts">
	import type { ShareType } from '$lib/data/post';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	export let title: string;
	export let name: string;
	export let values: ShareType[];
	export let defaultValue: string | null;

	const getLabel = (value: ShareType) => {
		switch (value) {
			case 'all':
				return 'Everyone';
			case 'work':
				return 'Work';
			case 'approval':
				return 'Approval';
			case 'none':
				return 'None';
		}
	};

	$: currentValue = defaultValue || 'all';
</script>

<div class="flex flex-col items-start">
	<h5 class="h5">{title}</h5>
	<RadioGroup>
		{#each values as value}
			<RadioItem
				active="variant-filled-primary"
				hover="hover:variant-soft-primary"
				bind:group={currentValue}
				{name}
				{value}
			>
				{getLabel(value)}
			</RadioItem>
		{/each}
	</RadioGroup>
</div>
