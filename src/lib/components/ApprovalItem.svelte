<script lang="ts">
	import type { PostApproval } from '$lib/data/post';

	export let approval: PostApproval;
</script>

<div class="border-solid border-2 border-black">
	<p>ID: {approval.id}</p>
	<p>Post Id: {approval.post_id}</p>
	<p>User Id: {approval.user_id}</p>
	<p>Type: {approval.type}</p>
	<p>Status: {approval.status}</p>
	<p>Follow Id: {approval.follow_id}</p>
	<p>Work Id: {approval.work_id}</p>
	<p>Help Id: {approval.help_id}</p>
	<p>{approval.created_at}</p>
	<p>Approver Id: {approval.approver_id}</p>
	<form method="POST" action="?/approve">
		<input type="hidden" name="id" value={approval.id} />
		<button class="btn">✅</button>
	</form>
	<form method="POST" action="?/refuse">
		<input type="hidden" name="id" value={approval.id} />
		<button class="btn">❌</button>
	</form>
</div>
