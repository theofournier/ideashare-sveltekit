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
		<button>Register</button>
	</form>
	<p>Already have an account? <a href="/login">Login here</a></p>
</div>
