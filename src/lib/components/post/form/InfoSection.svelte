<script lang="ts">
	export let title: string | null = null;
	export let shortDescription: string | null = null;
	export let longDescription: string | null = null;
</script>

<div id="info">
	<input type="text" placeholder="Title" class="input input-bordered" name="title" value={title} />
	<textarea
		class="textarea textarea-bordered"
		placeholder="Short description"
		name="shortDescription"
		value={shortDescription}
	/>
	<textarea
		class="textarea textarea-bordered"
		placeholder="Long description"
		name="longDescription"
		value={longDescription}
	/>
</div>
