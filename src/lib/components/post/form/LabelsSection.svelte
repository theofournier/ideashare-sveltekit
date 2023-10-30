<script lang="ts">
	import type { Label, PostLabel } from '$lib/data/post';

	export let labels: Label[];
	export let postLabels: PostLabel[] = [];
</script>

<ul id="labels" class="list">
	{#each labels as label (label.value)}
		<label class="cursor-pointer flex items-center gap-2 list-option">
			<input
				type="checkbox"
				class="checkbox"
				name="label"
				value={label.value}
				checked={postLabels.some((postLabel) => label.value === postLabel.label_id)}
			/>
			<span>{label.name}</span>
		</label>
	{/each}
</ul>
