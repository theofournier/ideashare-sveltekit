<script>
	import HelpForm from '$lib/components/help/HelpForm.svelte';
</script>

<div>
	Create help
	<form method="POST" enctype="multipart/form-data">
		<HelpForm />
		<button class="btn">Save</button>
	</form>
</div>
