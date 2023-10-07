<script lang="ts">
	import AdditionalInfoSection from '$lib/components/post/form/AdditionalInfoSection.svelte';
	import InfoSection from '$lib/components/post/form/InfoSection.svelte';
	import LabelsSection from '$lib/components/post/form/LabelsSection.svelte';
	import ShareOptionsSection from '$lib/components/post/form/ShareOptionsSection.svelte';

	export let data;
</script>

<div>
	Welcome
	<form method="POST">
		<div id="category" class="bg-base-200 my-4">
			<div class="card shadow-lg">
				<div class="card-body">
					<h2 class="card-title">{data.post.type === 'idea' ? 'Idea' : 'Issue'}</h2>
				</div>
			</div>
		</div>
		<InfoSection
			title={data.post.title}
			shortDescription={data.post.short_desc}
			longDescription={data.post.long_desc}
		/>
		<LabelsSection labels={data.labels} postLabels={data.post.posts_labels} />
		<AdditionalInfoSection
			language={data.post.language}
			postImages={data.post.images}
			postLinks={data.post.url_links}
		/>
		<ShareOptionsSection
			privacy={data.post.privacy}
			anonymous={data.post.anonymous}
			like={data.post.like}
			comment={data.post.comment}
			help={data.post.help}
			link_post={data.post.link_post}
			work={data.post.work}
			contact={data.post.contact}
			follow={data.post.follow}
			status={data.post.status}
		/>
		<button class="btn">Save</button>
	</form>
</div>
