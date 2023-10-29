<script lang="ts">
	import { AppBar, popup } from '@skeletonlabs/skeleton';
	import Avatar from './Avatar.svelte';
	import type { UserProfile } from '$lib/data/users';

	export let user: UserProfile | undefined | null;

	const avatarMenu: { href: string; title: string }[] = [
		{ href: '/login', title: 'Login' },
		{ href: '/profiles/me', title: 'My profile' },
		{ href: '/settings', title: 'Settings' }
	];
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a href="/" class="btn">IdeaShare</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div>
			<a href="/posts" class="btn">Posts</a>
			<a href="/posts/create" class="btn">Create</a>
			<a href="/profiles" class="btn">Profiles</a>
		</div>
		<div>
			<button
				use:popup={{
					event: 'click',
					target: 'popupAvatarMenu'
				}}
			>
				<Avatar
					avatarName={user?.avatar_name}
					firstName={user?.first_name}
					lastName={user?.last_name}
				/>
			</button>
			<div class="card w-40 shadow-xl" data-popup="popupAvatarMenu">
				<ul class="list-nav">
					{#each avatarMenu as menu}
						<li>
							<a href={menu.href}>
								{menu.title}
							</a>
						</li>
					{/each}
				</ul>
				<form action="/logout" method="POST">
					<button class="btn w-full justify-start variant-filled-error" type="submit">Logout</button
					>
				</form>
			</div>
		</div>
	</svelte:fragment>
</AppBar>
