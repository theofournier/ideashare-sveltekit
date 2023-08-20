<script>
	import '../app.css';
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<div class="min-h-full">
	<div class="navbar">
		<div class="flex-1">
			<a href="/" class="btn">IdeaShare</a><a href="/posts" class="btn">Posts</a><a
				href="/posts/create"
				class="btn">Create</a
			>
		</div>
		<div class="flex-none">
			<div class="dropdown dropdown-end">
				<label tabindex="0" class="btn btn-circle avatar">
					<div class="w-10 rounded-full" />
				</label>
				<ul tabindex="0" class="bg-base-100 z-[1] menu menu-sm dropdown-content">
					<li>
						<a href="/login">Login</a>
					</li>
					<li>
						<a href="/account">Account</a>
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
