<script lang="ts">

	export let form;
</script>

<div>
	<h1>Sign In</h1>
	<form action="?/login-with-password" method="POST">
		<input
			id="email"
			name="email"
			value={form?.loginWithPassword.values.email ?? ''}
			class="input input-bordered"
			type="email"
			placeholder="Email"
			required
		/>
		<input
			id="password"
			name="password"
			class="input input-bordered"
			type="password"
			placeholder="Password"
			required
		/>
		{#if form?.loginWithPassword.error}
			<p>{form.loginWithPassword.error}</p>
		{/if}
		<button class="btn">Login</button>
	</form>
	<p>Don't have an account? <a href="/register" class='link'>Register here</a></p>
</div>
