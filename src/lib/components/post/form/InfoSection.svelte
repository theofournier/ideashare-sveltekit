<script lang="ts">
	export let title: string | null = null;
	export let shortDescription: string | null = null;
	export let longDescription: string | null = null;
</script>

<div id="info" class="flex flex-col gap-2">
	<div class="form-control">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="label">
			<span class="label-text">Title</span>
		</label>
		<input type="text" placeholder="Title" class="input" name="title" value={title} required />
	</div>
	<div class="form-control">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="label">
			<span class="label-text">Short description</span>
		</label>
		<textarea
			class="textarea"
			placeholder="Short description"
			name="shortDescription"
			value={shortDescription}
		/>
	</div>
	<div class="form-control">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="label">
			<span class="label-text">Long description</span>
		</label>
		<textarea
			class="textarea"
			placeholder="Long description"
			name="longDescription"
			value={longDescription}
			rows={5}
		/>
	</div>
</div>
