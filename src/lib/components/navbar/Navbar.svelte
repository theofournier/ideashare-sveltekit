<script lang="ts">
	import Avatar from '../Avatar.svelte';
	import HamburgerIcon from '../icons/HamburgerIcon.svelte';
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

	$: classActive = (href: string) => ($page.url.pathname === href ? 'active' : '');
</script>

<div class="navbar z-10 bg-base-100/50 backdrop-blur-md sticky top-0">
	<div class="navbar-start">
		<a href="/" class="btn btn-ghost normal-case text-xl">IdeaShare</a>
	</div>
	<div class="navbar-end">
		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost btn-sm md:hidden">
				<HamburgerIcon />
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 z-10 p-2 shadow-xl w-40">
				{#each nav as item}
					<li>
						<a href={item.href} class={classActive(item.href)}>
							{item.title}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="hidden md:flex">
			<ul class="menu menu-horizontal">
				{#each nav as item}
					<li>
						<a href={item.href} class={classActive(item.href)}>
							{item.title}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<Avatar
					avatarName={user?.avatar_name}
					firstName={user?.first_name}
					lastName={user?.last_name}
				/>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 z-10 p-2 shadow-xl w-40">
				{#each avatarMenu as menu}
					<li>
						<a href={menu.href} class={classActive(menu.href)}>
							{menu.title}
						</a>
					</li>
				{/each}
				<form action="/logout" method="POST">
					<button class="btn btn-sm btn-accent w-full justify-start" type="submit">Logout</button>
				</form>
			</ul>
		</div>
	</div>
</div>
