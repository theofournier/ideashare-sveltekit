<script lang="ts">
	import PostImage from '$lib/components/post/PostImage.svelte';
	import AdditionalInfoSection from '$lib/components/post/form/AdditionalInfoSection.svelte';
	import InfoSection from '$lib/components/post/form/InfoSection.svelte';
	import LabelsSection from '$lib/components/post/form/LabelsSection.svelte';
	import ShareOptionsSection from '$lib/components/post/form/ShareOptionsSection.svelte';

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
		<InfoSection />
		<LabelsSection labels={data.labels} />
		<AdditionalInfoSection />
		<ShareOptionsSection />
		<button type="submit" class="btn">Save</button>
	</form>
</div>
