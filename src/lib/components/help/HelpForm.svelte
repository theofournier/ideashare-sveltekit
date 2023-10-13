<script lang="ts">
	import HelpImage from './HelpImage.svelte';

	export let helpLinks: string[] | null = null;
	export let helpImages: string[] | null = null;

	let selectedImages: string[] = [];
	let selectedLinks: string[] = helpLinks ? [...helpLinks] : [];
	let files: FileList;

	const onChangeImages = () => {
		if (!files || files.length === 0) {
			throw new Error('You must select an image to upload.');
		}
		selectedImages = Array.from(files).map((file) => URL.createObjectURL(file));
	};
</script>

<div>
	<input type="text" placeholder="Title" class="input input-bordered" name="title" />
	<textarea class="textarea textarea-bordered" placeholder="Description" name="description" />
	<input
		class="file-input file-input-bordered"
		type="file"
		accept=".png,.jpg"
		name="helpImages"
		placeholder="Images"
		multiple
		bind:files
		on:change={onChangeImages}
	/>
	{#if selectedImages.length > 0}
		{#each selectedImages as image}
			<HelpImage imageUrl={image} />
		{/each}
	{:else if helpImages && helpImages.length > 0}
		{#each helpImages as image}
			<HelpImage imageName={image} />
		{/each}
	{/if}
	<button
		type="button"
		class="btn"
		on:click={() => {
			selectedLinks = [...selectedLinks, ''];
		}}>Add link</button
	>
	{#each selectedLinks as link, index (index)}
		<div>
			<input
				type="url"
				placeholder={`Link ${index + 1}`}
				class="input input-bordered"
				name="link"
				value={link !== '' ? link : null}
				on:change={(e) => {
					selectedLinks[index] = e.currentTarget.value;
				}}
			/>
			<button
				type="button"
				class="btn btn-error"
				on:click={() => {
					selectedLinks.splice(index, 1);
					selectedLinks = selectedLinks;
				}}>Remove</button
			>
		</div>
	{/each}
</div>
