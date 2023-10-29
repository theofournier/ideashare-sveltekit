<script lang="ts">
	import { AppShell, storePopup } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	export let data;
</script>

<svelte:head>
	<title>Idea Share</title>
</svelte:head>

<AppShell>
	<svelte:fragment slot="header">
		<Navbar user={data.user} />
	</svelte:fragment>
	<slot />
</AppShell>
