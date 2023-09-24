<script lang="ts">
	import { getAvatarUrl } from '$lib/utils/getAvatarUrl.js';

	export let data;
	export let form;

	let { session, user } = data;
	$: ({ session, user } = data);

	let firstName: string = user?.first_name ?? '';
	let lastName: string = user?.last_name ?? '';
	let avatarUrl = user?.avatar_name ? getAvatarUrl(user.avatar_name) : '';
	let files: FileList;

	const onChangeAvatar = () => {
		if (!files || files.length === 0) {
			throw new Error('You must select an image to upload.');
		}
		avatarUrl = URL.createObjectURL(files[0]);
	};
</script>

<div>
	<form method="POST" action="?/update">
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
			placeholder="First name"
			value={form?.values?.firstName ?? firstName}
		/>

		<input
			id="lastName"
			name="lastName"
			type="text"
			class="input input-bordered"
			placeholder="Last name"
			value={form?.values?.lastName ?? lastName}
		/>

		<button class="btn">Update my profile</button>
	</form>
	<form action="?/avatar" method="POST" enctype="multipart/form-data">
		{#if avatarUrl}
			<div class="avatar">
				<div class="rounded-full w-20">
					<img src={avatarUrl} alt={avatarUrl} />
				</div>
			</div>
		{:else}
			<div class="rounded-full w-20 h-20 bg-black" />
		{/if}
		<input
			class="file-input file-input-bordered"
			type="file"
			accept=".png,.jpg"
			name="avatar"
			placeholder="avatar"
			required
			bind:files
			on:change={onChangeAvatar}
		/>
		<button type="submit" class="btn">Upload</button>
	</form>
</div>
