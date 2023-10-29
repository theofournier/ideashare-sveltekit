<script lang="ts">
	import PostApprovalItem from '$lib/components/post/PostApprovalItem.svelte';
	export let data;
</script>

{#if !data.postApprovals || data.postApprovals.length === 0}
	<p>No Post Approvals</p>
{:else}
	{#each data.postApprovals as approval (approval.id)}
		<PostApprovalItem {approval} />
	{/each}
{/if}
