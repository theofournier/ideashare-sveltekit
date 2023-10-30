<script lang="ts">
	import AdditionalInfoSection from '$lib/components/post/form/AdditionalInfoSection.svelte';
	import InfoSection from '$lib/components/post/form/InfoSection.svelte';
	import LabelsSection from '$lib/components/post/form/LabelsSection.svelte';
	import ShareOptionsSection from '$lib/components/post/form/ShareOptionsSection.svelte';
	import FormPostSection from '$lib/components/post/form/FormPostSection.svelte';
	import { Accordion } from '@skeletonlabs/skeleton';
	import CategoryCard from '$lib/components/post/form/CategoryCard.svelte';

	export let data;
</script>

<div class="w-4/5 m-auto">
	Welcome.....
	<form method="POST" enctype="multipart/form-data">
		<Accordion>
			<FormPostSection title="Choose a category">
				<div id="category" class="flex flex-col gap-2">
					<CategoryCard value="idea" title="Idea" description="Do you have an idea?" />
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
		<button type="submit" class="btn variant-filled-primary">Save</button>
	</form>
</div>
