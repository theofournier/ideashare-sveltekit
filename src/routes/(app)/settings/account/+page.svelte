<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import { getAvatarUrl } from '$lib/utils/storageUrl.js';

	export let data;
	export let form;

	let { session, user } = data;
	$: ({ session, user } = data);

	let firstName: string = user?.first_name ?? '';
	let lastName: string = user?.last_name ?? '';
	let avatarUrl = getAvatarUrl(user?.avatar_name);
	let files: FileList;

	const onChangeAvatar = () => {
		if (!files || files.length === 0) {
			throw new Error('You must select an image to upload.');
		}
		avatarUrl = URL.createObjectURL(files[0]);
	};
</script>

<div>
	<div>
		<h2>Profile</h2>
		<form method="POST" action="?/update">
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
		<form method="POST" action="?/update-email">
			<input name="email" id="email" class="input input-bordered" value={session?.user?.email} />

			<button class="btn">Update email</button>
		</form>
		<form action="?/avatar" method="POST" enctype="multipart/form-data">
			<Avatar {avatarUrl} />
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
	<div>
		<h2>Password</h2>
		<form action="?/update-password" method="POST">
			<input
				name="new-password"
				class="input input-bordered"
				type="password"
				placeholder="New password"
				required
			/>
			<button type="submit" class="btn">Update password</button>
		</form>
	</div>
</div>
