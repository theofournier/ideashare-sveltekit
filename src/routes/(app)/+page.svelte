<script lang="ts">
	export let data;
</script>

<p>Welcome on IdeaShare</p>
<p>{data.user?.id}</p>
<p>{data.user?.email}</p>
<p>{data.user?.first_name} {data.user?.last_name}</p>
