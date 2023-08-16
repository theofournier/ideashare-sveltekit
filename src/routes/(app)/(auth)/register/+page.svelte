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
	<h1>Register</h1>
	<form action="?/register" method="POST" use:enhance={handleSubmit}>
		<input
			id="email"
			name="email"
			value={form?.email ?? ''}
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
		{#if form?.error}
			<p>{form.error}</p>
		{/if}
		<button disabled={loading}>Register</button>
	</form>
	<p>Already have an account? <a href="/login">Login here</a></p>
</div>
