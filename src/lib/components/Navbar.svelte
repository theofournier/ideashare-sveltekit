<script lang="ts">
	import { AppBar, popup } from '@skeletonlabs/skeleton';
	import Avatar from './Avatar.svelte';
	import type { UserProfile } from '$lib/data/users';
	import { page } from '$app/stores';

	export let user: UserProfile | undefined | null;

	const avatarMenu: { href: string; title: string }[] = [
		{ href: '/login', title: 'Login' },
		{ href: '/profiles/me', title: 'My profile' },
		{ href: '/settings', title: 'Settings' }
	];
	const nav: { href: string; title: string }[] = [
		{ href: '/posts', title: 'Posts' },
		{ href: '/posts/create', title: 'New post' },
		{ href: '/profiles', title: 'Profiles' }
	];

	$: classActive = (href: string) => ($page.url.pathname === href ? '!variant-soft-primary' : '');
</script>

<AppBar padding="px-4 py-2">
	<svelte:fragment slot="lead">
		<a href="/" class="btn bg-gradient-to-br variant-gradient-tertiary-primary">IdeaShare</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div>
			<ul class="list-nav flex gap-2">
				{#each nav as item}
					<li>
						<a href={item.href} class="btn variant-soft {classActive(item.href)}">
							{item.title}
						</a>
					</li>
				{/each}
			</ul>
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
			<div class="card w-40 shadow-xl p-2" data-popup="popupAvatarMenu">
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
					<button class="btn w-full justify-start variant-filled-error" type="submit">
						Logout
					</button>
				</form>
			</div>
		</div>
	</svelte:fragment>
</AppBar>
