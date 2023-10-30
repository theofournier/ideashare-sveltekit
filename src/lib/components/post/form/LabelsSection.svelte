<script lang="ts">
	import type { Label, PostLabel } from '$lib/data/post';

	export let labels: Label[];
	export let postLabels: PostLabel[] = [];
</script>

<div id="labels">
	{#each labels as label (label.value)}
		<div class="form-control">
			<label class="label cursor-pointer">
				<span class="label-text">{label.name}</span>
				<input
					type="checkbox"
					class="checkbox"
					name="label"
					value={label.value}
					checked={postLabels.some((postLabel) => label.value === postLabel.label_id)}
				/>
			</label>
		</div>
	{/each}
</div>
