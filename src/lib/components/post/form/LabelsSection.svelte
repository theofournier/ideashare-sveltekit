<script lang="ts">
	import type { Label, PostLabel } from '$lib/data/post';

	export let labels: Label[];
	export let postLabels: PostLabel[] = [];
</script>

<div id="labels" class="flex flex-col gap-2">
	{#each labels as label (label.value)}
		<div class="form-control hover:bg-neutral/10 rounded-btn">
			<label class="cursor-pointer label justify-normal gap-2">
				<input
					type="checkbox"
					name="label"
					value={label.value}
					checked={postLabels.some((postLabel) => label.value === postLabel.label_id)}
					class="checkbox checkbox-md checkbox-secondary"
				/>
				<span class="label-text">{label.name}</span>
			</label>
		</div>
	{/each}
</div>
