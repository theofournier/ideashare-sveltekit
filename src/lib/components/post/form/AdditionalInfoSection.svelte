<script lang="ts">
	import PostImage from '../PostImage.svelte';

	export let language: string | null = null;
	export let postLinks: string[] | null = null;
	export let postImages: string[] | null = null;

	let selectedImages: string[] = [];
	let linksCount = postLinks?.length || 0;
	let files: FileList;

	const onChangePostImages = () => {
		if (!files || files.length === 0) {
			throw new Error('You must select an image to upload.');
		}
		selectedImages = Array.from(files).map((file) => URL.createObjectURL(file));
	};
</script>

<div id="additional-info" class="bg-base-200 my-4">
	<div class="text-xl">Additional info</div>
	<select class="select select-bordered" name="language" value={language || 'English'}>
		<option>English</option>
		<option>French</option>
	</select>
	<input
		class="file-input file-input-bordered"
		type="file"
		accept=".png,.jpg"
		name="postImages"
		placeholder="Images"
		multiple
		bind:files
		on:change={onChangePostImages}
	/>
	{#if selectedImages.length > 0}
		{#each selectedImages as postImage}
			<PostImage postImageUrl={postImage} />
		{/each}
	{:else if postImages && postImages.length > 0}
		{#each postImages as postImage}
			<PostImage postImageName={postImage} />
		{/each}
	{/if}
	<button type="button" class="btn" on:click={() => linksCount++}>Add link</button>
	{#each Array(linksCount) as _, index (index)}
		<input
			type="url"
			placeholder={`Link ${index + 1}`}
			class="input input-bordered"
			name="link"
			value={postLinks ? postLinks[index] || null : null}
		/>
	{/each}
</div>
