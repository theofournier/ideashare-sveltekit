<script lang="ts">
	import PostApprovalItem from '$lib/components/post/PostApprovalItem.svelte';
	import ProfileApprovalItem from '$lib/components/ProfileApprovalItem.svelte';
	export let data;
</script>

{#if !data.postApprovals || data.postApprovals.length === 0}
	<p>No Post Approvals</p>
{:else}
	{#each data.postApprovals as approval (approval.id)}
		<PostApprovalItem {approval} />
	{/each}
{/if}

{#if !data.profileApprovals || data.profileApprovals.length === 0}
	<p>No Profile Approvals</p>
{:else}
	{#each data.profileApprovals as approval (approval.id)}
		<ProfileApprovalItem {approval} />
	{/each}
{/if}