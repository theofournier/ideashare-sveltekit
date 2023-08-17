<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import type { SubmitFunction } from './(protected)/(auth)/logout/$types.js';
	import type { PageData } from './$types';
	export let data: PageData;

	$: ({ user } = data);

	let loading = false;

	const handleLogout: SubmitFunction = () => {
		loading = true;
		return async ({ update, result }) => {
			if (result.type === 'redirect') {
				await invalidate('supabase:auth');
			} else {
				await update();
			}
			loading = false;
		};
	};
</script>

<p>Welcome on IdeaShare</p>
<p>{user?.id}</p>
<p>{user?.email}</p>
<p>{user?.first_name} {user?.last_name}</p>
<p>
	<a href="/account">My account</a>
</p>
<form action="/logout" method="POST" use:enhance={handleLogout}>
	<button disabled={loading} type="submit">Logout</button>
</form>
