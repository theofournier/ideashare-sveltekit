<!-- src/routes/account/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from './$types.js';
	import Avatar from './Avatar.svelte';

	export let data;
	export let form;

	let { session, supabase, user } = data;
	$: ({ session, supabase, user } = data);

	let profileForm: HTMLFormElement;
	let loading = false;
	let firstName: string = user?.first_name ?? '';
	let lastName: string = user?.last_name ?? '';
	let avatarUrl: string = user?.avatar_url ?? '';

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async ({ update }) => {
			update();
			loading = false;
		};
	};
</script>

<div>
	<form method="post" action="?/update" use:enhance={handleSubmit} bind:this={profileForm}>
		<Avatar
			{supabase}
			bind:url={avatarUrl}
			size={10}
			on:upload={() => {
				profileForm.requestSubmit();
			}}
		/>
		<input
			name="email"
			id="email"
			class="input"
			type="email"
			placeholder="Email"
			value={session?.user?.email}
			disabled
		/>

		<input id="firstName" name="firstName" type="text" value={form?.firstName ?? firstName} />

		<input id="lastName" name="lastName" type="text" value={form?.lastName ?? lastName} />

		<button disabled={loading}>Update my profile</button>
	</form>
</div>
