<script lang="ts">
	import type { ShareType } from '$lib/data/post';

	export let title: string;
	export let name: string;
	export let values: ShareType[];
	export let defaultValue: ShareType | null;

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
</script>

<div class="form-control">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label class="label">
		<span class="label-text">{title}</span>
	</label>
	<div class="join">
		{#each values as value (value)}
			<input
				class="join-item btn btn-outline btn-sm checked:!bg-secondary checked:!border-secondary checked:bg-none"
				type="radio"
				{name}
				aria-label={getLabel(value)}
				{value}
				checked={value === (defaultValue ?? 'all')}
			/>
		{/each}
	</div>
</div>
