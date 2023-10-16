<script>
	import Avatar from '$lib/components/Avatar.svelte';
	import '../app.css';

	export let data;
</script>

<svelte:head>
	<title>Idea Share</title>
</svelte:head>

<div class="min-h-full">
	<div class="navbar">
		<div class="flex-1">
			<a href="/" class="btn">IdeaShare</a><a href="/posts" class="btn">Posts</a><a
				href="/posts/create"
				class="btn">Create</a
			><a href="/profiles" class="btn">Profiles</a>
		</div>
		<div class="flex-none">
			<p>{data.user?.first_name} {data.user?.last_name}</p>
			<div class="dropdown dropdown-end">
				<label tabindex="0" class="btn btn-circle avatar">
					<Avatar avatarName={data.user?.avatar_name} />
				</label>
				<ul tabindex="0" class="bg-base-100 z-[1] menu menu-sm dropdown-content shadow-lg">
					<li>
						<a href="/login">Login</a>
					</li>
					<li>
						<a href={`/profiles/${data.session?.user.id}`}>My profile</a>
					</li>
					<li>
						<a href="/settings">Settings</a>
					</li>
					<li>
						<form action="/logout" method="POST">
							<button type="submit">Logout</button>
						</form>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<slot />
</div>
