<script lang="ts">
	import ProfileItem from '$lib/components/ProfileItem.svelte';

	export let data;
</script>

<div>
	Posts
	{#if !data.profiles}
		<p>No profiles</p>
	{:else}
		{#each data.profiles as profile (profile.id)}
			<ProfileItem {profile} />
		{/each}
	{/if}
</div>
