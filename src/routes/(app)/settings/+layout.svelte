<script lang="ts">
	import { page } from '$app/stores';
</script>

<div>
	<h2>Settings</h2>
	<div class="tabs tabs-boxed">
		<a
			href={'/settings/account'}
			class="tab"
			class:tab-active={$page.url.pathname === '/settings/account'}>Account</a
		>
		<a
			href={'/settings/default-share-options'}
			class="tab"
			class:tab-active={$page.url.pathname === '/settings/default-share-options'}
			>Default Share Options</a
		>
		<a
			href={'/settings/privacy'}
			class="tab"
			class:tab-active={$page.url.pathname === '/settings/privacy'}>Privacy</a
		>
		<a
			href={'/settings/notifications'}
			class="tab"
			class:tab-active={$page.url.pathname === '/settings/notifications'}>Notifications</a
		>
	</div>
	<slot />
</div>
