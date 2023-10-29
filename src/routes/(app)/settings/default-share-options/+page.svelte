<script lang="ts">
	import ShareOptionsSection from '$lib/components/post/form/ShareOptionsSection.svelte';

	export let data;
</script>

<div>
	<form method="POST" action="?/reset">
		<button type="submit" class="btn">Reset to default</button>
	</form>
	<form method="POST" action="?/save">
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
		<button class="btn">Save</button>
	</form>
</div>
