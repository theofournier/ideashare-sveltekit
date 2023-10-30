<script lang="ts">
	export let title: string | null = null;
	export let shortDescription: string | null = null;
	export let longDescription: string | null = null;
</script>

<div id="info" class="flex flex-col gap-2">
	<label class="label">
		<span>Title</span>
		<input type="text" placeholder="Title" class="input" name="title" value={title} required />
	</label>
	<label class="label">
		<span>Short description</span>
		<textarea
			class="textarea"
			placeholder="Short description"
			name="shortDescription"
			value={shortDescription}
		/>
	</label>
	<label class="label">
		<span>Long description</span>
		<textarea
			class="textarea"
			placeholder="Long description"
			name="longDescription"
			value={longDescription}
			rows={5}
		/>
	</label>
</div>
