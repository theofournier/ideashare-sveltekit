<script lang="ts">
	import AdditionalInfoSection from '$lib/components/post/form/AdditionalInfoSection.svelte';
	import InfoSection from '$lib/components/post/form/InfoSection.svelte';
	import LabelsSection from '$lib/components/post/form/LabelsSection.svelte';
	import ShareOptionsSection from '$lib/components/post/form/ShareOptionsSection.svelte';
	import FormPostSection from '$lib/components/post/form/FormPostSection.svelte';
	import CategoryCard from '$lib/components/post/form/CategoryCard.svelte';
	import CrossIcon from '$lib/components/icons/CrossIcon.svelte';

	export let data;
</script>

<div>
	<form method="POST" enctype="multipart/form-data">
		<div class="navbar bg-base-100/50 backdrop-blur-md sticky top-[60px] z-10">
			<div class="navbar-start">
				<h3>Create a new post</h3>
			</div>
			<div class="navbar-end gap-2">
				<button type="submit" class="btn btn-primary">Save</button>
				<div class="dropdown dropdown-end">
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label tabindex="0" class="btn btn-error btn-circle">
						<CrossIcon />
					</label>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<div tabindex="0" class="dropdown-content z-10 mt-1 p-2 shadow-xl bg-base-100 w-40">
						<div class="flex flex-col gap-2">
							<p class="text-center">This will discard your changes!</p>
							<a href="/posts" class="btn btn-error w-full">Discard</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-[90%] sm:w-[80%] mx-auto my-4">
			Welcome.....
			<div class="flex flex-col gap-2">
				<FormPostSection title="Choose a category">
					<div id="category" class="grid grid-cols-1 sm:grid-cols-2 gap-2">
						<CategoryCard value="idea" title="Idea" description="Do you have an idea?" checked />
						<CategoryCard value="issue" title="Issue" description="Do you have an issue?" />
					</div>
				</FormPostSection>
				<FormPostSection title="Provide required information">
					<InfoSection />
				</FormPostSection>
				{#if data.labels && data.labels.length > 0}
					<FormPostSection title="Add some labels">
						<LabelsSection labels={data.labels} />
					</FormPostSection>
				{/if}
				<FormPostSection title="Provide additional information">
					<AdditionalInfoSection />
				</FormPostSection>
				<FormPostSection title="Choose the share options">
					<ShareOptionsSection
						privacy={data.defaultShareOptions?.privacy}
						anonymous={data.defaultShareOptions?.anonymous}
						like={data.defaultShareOptions?.like}
						comment={data.defaultShareOptions?.comment}
						help={data.defaultShareOptions?.help}
						link_post={data.defaultShareOptions?.link_post}
						work={data.defaultShareOptions?.work}
						contact={data.defaultShareOptions?.contact}
						follow={data.defaultShareOptions?.follow}
						status={data.defaultShareOptions?.status}
					/>
				</FormPostSection>
			</div>
		</div>
	</form>
</div>
