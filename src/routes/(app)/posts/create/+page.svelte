<script lang="ts">
	import PostImage from '$lib/components/PostImage.svelte';

	export let data;

	let postImages: string[] = [];
	let linksCount = 0;
	let files: FileList;

	const onChangePostImages = () => {
		if (!files || files.length === 0) {
			throw new Error('You must select an image to upload.');
		}
		postImages = Array.from(files).map((file) => URL.createObjectURL(file));
	};
</script>

<div>
	Welcome
	<form method="POST" enctype="multipart/form-data">
		<div id="category" class="bg-base-200 my-4">
			<div class="text-xl">Choose a post category</div>
			<div>
				<input type="radio" id="idea" name="postType" value="idea" class="hidden peer" />
				<label for="idea" class="cursor-pointer peer-checked:text-blue-600">
					<div class="card shadow-lg">
						<div class="card-body">
							<h2 class="card-title">Idea</h2>
							<p>Do you have an idea?</p>
						</div>
					</div>
				</label>
			</div>
			<div>
				<input type="radio" id="issue" name="postType" value="issue" class="hidden peer" />
				<label for="issue" class="cursor-pointer peer-checked:text-blue-600">
					<div class="card shadow-lg">
						<div class="card-body">
							<h2 class="card-title">Issue</h2>
							<p>Do you have an issue?</p>
						</div>
					</div>
				</label>
			</div>
		</div>
		<div id="info" class="bg-base-200 my-4">
			<div class="text-xl">Give some information</div>
			<input type="text" placeholder="Title" class="input input-bordered" name="title" />
			<textarea
				class="textarea textarea-bordered"
				placeholder="Short description"
				name="shortDescription"
			/>
			<textarea
				class="textarea textarea-bordered"
				placeholder="Long description"
				name="longDescription"
			/>
		</div>
		{#if data.labels}
			<div id="labels" class="bg-base-200 my-4">
				<div class="text-xl">Select labels</div>
				{#each data.labels as label (label.value)}
					<div class="form-control">
						<label class="label cursor-pointer">
							<span class="label-text">{label.name}</span>
							<input type="checkbox" class="checkbox" name="label" value={label.value} />
						</label>
					</div>
				{/each}
			</div>
		{/if}
		<div id="additional-info" class="bg-base-200 my-4">
			<div class="text-xl">Additional info</div>
			<select class="select select-bordered" name="language">
				<option>English</option>
				<option>French</option>
			</select>
			<textarea class="textarea textarea-bordered" placeholder="Note" name="note" />
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
			{#each postImages as postImage}
				<PostImage postImageUrl={postImage} />
			{/each}
			<button type="button" class="btn" on:click={() => linksCount++}>Add link</button>
			{#each Array(linksCount) as _, index (index)}
				<input type="url" placeholder={`Link ${index}`} class="input input-bordered" name="link" />
			{/each}
		</div>
		<div id="share-options" class="bg-base-200 my-4">
			<div class="text-xl">Share options</div>
			<div class="form-control">
				<label class="label cursor-pointer">
					<span class="label-text">Private</span>
					<input type="checkbox" class="toggle" name="private" />
				</label>
			</div>
			<div class="form-control">
				<label class="label cursor-pointer">
					<span class="label-text">Anonymous</span>
					<input type="checkbox" class="toggle" name="anonymous" />
				</label>
			</div>
			<div>
				<p>Like</p>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">All</span>
						<input type="radio" name="like" class="radio" checked value="all" />
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">None</span>
						<input type="radio" name="like" class="radio" value="none" />
					</label>
				</div>
			</div>
			<div>
				<p>Comment</p>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">All</span>
						<input type="radio" name="comment" class="radio" checked value="all" />
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">Work</span>
						<input type="radio" name="comment" class="radio" value="work" />
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">None</span>
						<input type="radio" name="comment" class="radio" value="none" />
					</label>
				</div>
			</div>
			<div>
				<p>Help</p>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">All</span>
						<input type="radio" name="help" class="radio" checked value="all" />
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">Approval</span>
						<input type="radio" name="help" class="radio" value="approval" />
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">None</span>
						<input type="radio" name="help" class="radio" value="none" />
					</label>
				</div>
			</div>
			<div>
				<p>Link post</p>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">All</span>
						<input type="radio" name="linkPost" class="radio" checked value="all" />
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">Approval</span>
						<input type="radio" name="linkPost" class="radio" value="approval" />
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">None</span>
						<input type="radio" name="linkPost" class="radio" value="none" />
					</label>
				</div>
			</div>
			<div>
				<p>Work on it</p>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">All</span>
						<input type="radio" name="work" class="radio" checked value="all" />
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">Approval</span>
						<input type="radio" name="work" class="radio" value="approval" />
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">None</span>
						<input type="radio" name="work" class="radio" value="none" />
					</label>
				</div>
			</div>
			<div>
				<p>Contact</p>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">All</span>
						<input type="radio" name="contact" class="radio" checked value="all" />
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">Approval</span>
						<input type="radio" name="contact" class="radio" value="approval" />
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">None</span>
						<input type="radio" name="contact" class="radio" value="none" />
					</label>
				</div>
			</div>
			<div>
				<p>Follow</p>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">All</span>
						<input type="radio" name="follow" class="radio" checked value="all" />
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">Approval</span>
						<input type="radio" name="follow" class="radio" value="approval" />
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">None</span>
						<input type="radio" name="follow" class="radio" value="none" />
					</label>
				</div>
			</div>
			<div>
				<p>Status</p>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">Work</span>
						<input type="radio" name="status" class="radio" checked value="work" />
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">None</span>
						<input type="radio" name="status" class="radio" value="none" />
					</label>
				</div>
			</div>
		</div>
		<button type="submit" class="btn">Save</button>
	</form>
</div>
