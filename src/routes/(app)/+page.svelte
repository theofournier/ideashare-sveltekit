<script lang="ts">
	export let data;
</script>

<p>Welcome on IdeaShare</p>
<p>{data.user?.id}</p>
<p>{data.user?.email}</p>
<p>{data.user?.first_name} {data.user?.last_name}</p>
<p>
	<a href="/account">My account</a>
</p>
<form action="/logout" method="POST">
	<button type="submit">Logout</button>
</form>
