<script lang="ts">
	import CrossIcon from '$lib/components/icons/CrossIcon.svelte';
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

<div id="additional-info" class="flex flex-col gap-4 items-start">
	<div class="form-control max-w-xs">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="label">
			<span class="label-text">Choose the language of the post</span>
		</label>
		<select class="select" name="language" value={language || 'English'}>
			<option>English</option>
			<option>French</option>
		</select>
	</div>
	<div class="flex flex-col gap-2">
		<div class="form-control max-w-xs">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<span class="label-text">Add images</span>
			</label>
			<input
				class="file-input file-input-secondary"
				type="file"
				accept=".png,.jpg"
				name="postImages"
				placeholder="Images"
				multiple
				bind:files
				on:change={onChangePostImages}
			/>
		</div>
		{#if selectedImages.length > 0}
			<div class="flex flex-wrap gap-2">
				{#each selectedImages as postImage}
					<PostImage postImageUrl={postImage} />
				{/each}
			</div>
		{:else if postImages && postImages.length > 0}
			<div class="flex flex-wrap gap-2">
				{#each postImages as postImage}
					<PostImage postImageName={postImage} />
				{/each}
			</div>
		{/if}
	</div>
	<div class="flex flex-col gap-2 items-start">
		<div class="form-control">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<span class="label-text">Add links</span>
			</label>
			<button
				type="button"
				class="btn btn-secondary"
				on:click={() => {
					selectedLinks = [...selectedLinks, ''];
				}}>Add link</button
			>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
			{#each selectedLinks as link, index (index)}
				<div class="flex gap-1 items-center">
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
						class="btn btn-circle btn-error btn-sm"
						on:click={() => {
							selectedLinks.splice(index, 1);
							selectedLinks = selectedLinks;
						}}
					>
						<CrossIcon />
					</button>
				</div>
			{/each}
		</div>
	</div>
</div>
