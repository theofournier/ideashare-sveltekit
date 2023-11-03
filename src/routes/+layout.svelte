<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navbar/Navbar.svelte';

	export let data;
</script>

<svelte:head>
	<title>Idea Share</title>
</svelte:head>

<Navbar user={data.user} />
<slot />
