<script lang="ts">
	export let form;
</script>

<div>
	<h1>Register</h1>
	<form action="?/register" method="POST">
		<input
			id="email"
			name="email"
			value={form?.values.email ?? ''}
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
		{#if form?.error}
			<p>{form.error}</p>
		{/if}
		<button class="btn">Register</button>
	</form>
	<p>Already have an account? <a href="/login" class="link">Login here</a></p>
</div>
