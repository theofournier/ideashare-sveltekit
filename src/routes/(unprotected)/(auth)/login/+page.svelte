<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from './$types.js';

	export let form;
	let loading = false;

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async ({ update }) => {
			update();
			loading = false;
		};
	};
</script>

<div>
	<h1>Sign In</h1>
	<form action="?/login-with-password" method="POST" use:enhance={handleSubmit}>
		<input
			id="email"
			name="email"
			value={form?.loginWithPassword.values.email ?? ''}
			class="input"
			type="email"
			placeholder="Email"
			required
		/>
		<input
			id="password"
			name="password"
			class="input"
			type="password"
			placeholder="Password"
			required
		/>
		{#if form?.loginWithPassword.error}
			<p>{form.loginWithPassword.error}</p>
		{/if}
		<button disabled={loading}>Login</button>
	</form>
	<p>Don't have an account? <a href="/register">Register here</a></p>
</div>
