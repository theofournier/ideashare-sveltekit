<script>
	import HelpForm from '$lib/components/help/HelpForm.svelte';

	export let data;
</script>

<div>
	Create help
	<form method="POST" enctype="multipart/form-data">
		<HelpForm
			title={data.help.title}
			description={data.help.description}
			helpLinks={data.help.url_links}
			helpImages={data.help.images}
		/>
		<button class="btn">Save</button>
	</form>
</div>
