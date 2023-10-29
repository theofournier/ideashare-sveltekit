<script lang="ts">
	import type { ProfileApproval } from '$lib/data/users';

	export let approval: ProfileApproval;
</script>

<div class="border-solid border-2 border-black">
	<p>ID: {approval.id}</p>
	<p>User Id: {approval.user_id}</p>
	<p>Type: {approval.type}</p>
	<p>Status: {approval.status}</p>
	<p>Follow Id: {approval.follow_id}</p>
	<p>{approval.created_at}</p>
	<p>Approver Id: {approval.approver_id}</p>
	<form method="POST" action="?/profile-approve">
		<input type="hidden" name="id" value={approval.id} />
		<button class="btn">✅</button>
	</form>
	<form method="POST" action="?/profile-refuse">
		<input type="hidden" name="id" value={approval.id} />
		<button class="btn">❌</button>
	</form>
</div>
