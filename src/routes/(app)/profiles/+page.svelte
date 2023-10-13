<script lang="ts">
	import Pagination from '$lib/components/Pagination.svelte';
	import ProfileItem from '$lib/components/ProfileItem.svelte';

	export let data;
</script>

<div>
	Posts
	{#if !data.profiles}
		<p>No profiles</p>
	{:else}
		<form method="POST" action="?/search">
			<input
				class="input input-bordered"
				type="search"
				placeholder="Search..."
				name="search"
				value={data.search}
			/><button class="btn">Search</button>
		</form>
		{#each data.profiles as profile (profile.id)}
			<ProfileItem {profile} />
		{/each}
		<Pagination currentPage={data.currentPage} totalPage={data.totalPage} />
	{/if}
</div>
