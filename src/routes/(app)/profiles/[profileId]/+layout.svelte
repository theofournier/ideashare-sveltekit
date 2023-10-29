<script lang="ts">
	import { page } from '$app/stores';
	import Avatar from '$lib/components/Avatar.svelte';
	export let data;

	$: profile = data.profile;
	$: isFollow = profile?.profiles_follows.some(
		(follower) => follower.follower_user_id === data.session?.user.id
	);
	$: isCurrentUser = profile.id === data.session?.user.id;
</script>

<div>
	<Avatar avatarName={profile.avatar_name} />
	<h2>{profile.first_name} {profile.last_name}</h2>
	<p>{profile.id}</p>
	<form method="POST" action={isFollow ? '?/unfollow' : '?/follow'}>
		<button class={`btn ${isFollow ? 'btn-primary' : ''}`}
			>{isFollow ? 'Unfollow' : 'Follow'} {profile.profiles_follows?.length ?? 0}</button
		>
	</form>
	<div class="tabs tabs-boxed">
		<a
			href={`/profiles/${$page.params.profileId}`}
			class="tab"
			class:tab-active={$page.url.pathname === `/profiles/${$page.params.profileId}`}>Posts</a
		>
		<a
			href={`/profiles/${$page.params.profileId}/posts-following`}
			class="tab"
			class:tab-active={$page.url.pathname ===
				`/profiles/${$page.params.profileId}/posts-following`}>Posts following</a
		>
		<a
			href={`/profiles/${$page.params.profileId}/posts-working`}
			class="tab"
			class:tab-active={$page.url.pathname === `/profiles/${$page.params.profileId}/posts-working`}
			>Posts working</a
		>
		<a
			href={`/profiles/${$page.params.profileId}/helps`}
			class="tab"
			class:tab-active={$page.url.pathname === `/profiles/${$page.params.profileId}/helps`}>Helps</a
		>
		<a
			href={`/profiles/${$page.params.profileId}/profiles-following`}
			class="tab"
			class:tab-active={$page.url.pathname ===
				`/profiles/${$page.params.profileId}/profiles-following`}>Profiles Following</a
		>
		{#if isCurrentUser}
			<a
				href={`/profiles/${$page.params.profileId}/approvals`}
				class="tab"
				class:tab-active={$page.url.pathname === `/profiles/${$page.params.profileId}/approvals`}
				>Approvals</a
			>
		{/if}
	</div>
	<slot />
</div>
