<script lang="ts">
	import type { Profile } from '$lib/data/users';

	export let profile: Profile;
</script>

<div class="card shadow-lg">
	<div class="card-body">
		<h2 class="card-title">{profile.first_name} {profile.last_name}</h2>
		<p>{profile.id}</p>
		<a href={`/profiles/${profile.id}`} class="btn">See profile</a>
	</div>
</div>
