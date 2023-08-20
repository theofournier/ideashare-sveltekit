<script lang="ts">
	export let data;
</script>

<div>
	Posts
	{#if !data.profiles}
		<p>No profiles</p>
	{:else}
		{#each data.profiles as profile (profile.id)}
			<div class="card shadow-lg">
				<div class="card-body">
					<h2 class="card-title">{profile.first_name} {profile.last_name}</h2>
					<a href={`/profiles/${profile.id}`} class="btn">See profile</a>
				</div>
			</div>
		{/each}
	{/if}
</div>
