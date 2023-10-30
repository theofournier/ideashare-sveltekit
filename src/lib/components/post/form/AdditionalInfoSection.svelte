<script lang="ts">
	import PostImage from '../PostImage.svelte';

	export let language: string | null = null;
	export let postLinks: string[] | null = null;
	export let postImages: string[] | null = null;

	let selectedImages: string[] = [];
	let selectedLinks: string[] = postLinks ? [...postLinks] : [];
	let files: FileList;

	const onChangePostImages = () => {
		if (!files || files.length === 0) {
			throw new Error('You must select an image to upload.');
		}
		selectedImages = Array.from(files).map((file) => URL.createObjectURL(file));
	};
</script>

<div id="additional-info" class="flex flex-col gap-2 items-start">
	<label class="label">
		<p>Choose the language of the post</p>
		<select class="select" name="language" value={language || 'English'}>
			<option>English</option>
			<option>French</option>
		</select>
	</label>
	<div class="flex flex-col gap-2">
		<label class="label">
			<p>Add images</p>
			<input
				class="input"
				type="file"
				accept=".png,.jpg"
				name="postImages"
				placeholder="Images"
				multiple
				bind:files
				on:change={onChangePostImages}
			/>
		</label>
		{#if selectedImages.length > 0}
			<div class="flex gap-2">
				{#each selectedImages as postImage}
					<PostImage postImageUrl={postImage} />
				{/each}
			</div>
		{:else if postImages && postImages.length > 0}
			<div class="flex gap-2">
				{#each postImages as postImage}
					<PostImage postImageName={postImage} />
				{/each}
			</div>
		{/if}
	</div>
	<div class="flex flex-col gap-2 items-start">
		<button
			type="button"
			class="btn variant-filled-secondary"
			on:click={() => {
				selectedLinks = [...selectedLinks, ''];
			}}>Add link</button
		>
		{#each selectedLinks as link, index (index)}
			<div class="flex gap-2">
				<input
					type="url"
					placeholder={`Link ${index + 1}`}
					class="input"
					name="link"
					value={link !== '' ? link : null}
					on:change={(e) => {
						selectedLinks[index] = e.currentTarget.value;
					}}
				/>
				<button
					type="button"
					class="btn variant-soft-error"
					on:click={() => {
						selectedLinks.splice(index, 1);
						selectedLinks = selectedLinks;
					}}>Remove</button
				>
			</div>
		{/each}
	</div>
</div>
