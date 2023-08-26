<script lang="ts">
	import ProfileItem from '$lib/components/ProfileItem.svelte';

	export let data;
</script>

<div>
	{#if !data.profiles || data.profiles.length === 0}
		<p>No following profiles</p>
	{:else}
		{#each data.profiles as profile (profile.id)}
			<ProfileItem {profile} />
		{/each}
	{/if}
</div>
