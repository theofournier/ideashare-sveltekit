<script lang="ts">
	export let data;
	export let form;

	let { session, user } = data;
	$: ({ session, user } = data);

	let firstName: string = user?.first_name ?? '';
	let lastName: string = user?.last_name ?? '';
</script>

<div>
	<form method="POST">
		<input
			name="email"
			id="email"
			class="input input-bordered"
			value={session?.user?.email}
			disabled
		/>

		<input
			id="firstName"
			name="firstName"
			type="text"
			class="input input-bordered"
			value={form?.values.firstName ?? firstName}
		/>

		<input
			id="lastName"
			name="lastName"
			type="text"
			class="input input-bordered"
			value={form?.values.lastName ?? lastName}
		/>

		<button class="btn">Update my profile</button>
	</form>
</div>
