<script lang="ts">
	import { AppShell, Modal, initializeStores, storePopup } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	initializeStores();
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	export let data;
</script>

<svelte:head>
	<title>Idea Share</title>
</svelte:head>

<Modal />
<AppShell>
	<svelte:fragment slot="header">
		<Navbar user={data.user} />
	</svelte:fragment>
	<slot />
</AppShell>
