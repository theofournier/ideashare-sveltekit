<script lang="ts">
	import ApprovalItem from '$lib/components/ApprovalItem.svelte';
	export let data;
</script>

{#if !data.postApprovals || data.postApprovals.length === 0}
	<p>No Post Approvals</p>
{:else}
	{#each data.postApprovals as approval (approval.id)}
		<ApprovalItem {approval} />
	{/each}
{/if}
