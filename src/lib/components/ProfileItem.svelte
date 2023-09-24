<script lang="ts">
	import type { Profile } from '$lib/data/users';
	import { getAvatarUrl } from '$lib/utils/getAvatarUrl';
	import Avatar from './Avatar.svelte';

	export let profile: Profile;
</script>

<div class="card shadow-lg">
	<div class="card-body">
		<Avatar avatarName={profile.avatar_name} />
		<h2 class="card-title">{profile.first_name} {profile.last_name}</h2>
		<p>{profile.id}</p>
		<div class="card-actions">
			<a href={`/profiles/${profile.id}`} class="btn">See profile</a>
		</div>
	</div>
</div>
