<script lang="ts">
	import AdditionalInfoSection from '$lib/components/post/form/AdditionalInfoSection.svelte';
	import InfoSection from '$lib/components/post/form/InfoSection.svelte';
	import LabelsSection from '$lib/components/post/form/LabelsSection.svelte';
	import ShareOptionsSection from '$lib/components/post/form/ShareOptionsSection.svelte';
	import FormPostSection from '$lib/components/post/form/FormPostSection.svelte';
	import { Accordion, AppBar, popup } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import CategoryCard from '$lib/components/post/form/CategoryCard.svelte';

	export let data;

	const modalStore = getModalStore();
</script>

<div>
	<form method="POST" enctype="multipart/form-data">
		<AppBar class="sticky top-0 z-10" background="bg-surface-800/50 backdrop-blur-md">
			<svelte:fragment slot="lead">
				<h3 class="h3">Create a new post</h3>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button type="submit" class="btn variant-filled-primary">Save</button>
				<div>
					<button
						use:popup={{
							event: 'click',
							target: 'popupCloseCreatePost'
						}}
						type="button"
						class="btn variant-ghost-error">X</button
					>
					<div data-popup="popupCloseCreatePost">
						<div class="card flex flex-col w-48 shadow-xl py-2 px-4 gap-2">
							<p class="text-center">This will discard your changes!</p>
							<a href="/posts" class="btn variant-filled-error">Discard</a>
						</div>
					</div>
				</div>
			</svelte:fragment>
		</AppBar>
		<div class="w-[80%] mx-auto my-4">
			Welcome.....
			<Accordion>
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
			</Accordion>
		</div>
	</form>
</div>
