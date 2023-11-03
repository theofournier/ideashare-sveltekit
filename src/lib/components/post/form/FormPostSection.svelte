<script lang="ts">
	export let title: string;
</script>

<div class="card bg-base-200">
	<div class="card-body p-4">
		<div class="card-title">{title}</div>
		<slot />
	</div>
</div>
