<script lang="ts">
	export let value: string;
	export let title: string;
	export let description: string;
	export let checked = false;
</script>

<label for={value}>
	<input type="radio" id={value} name="postType" {value} class="hidden peer" {checked} />
	<div class="card variant-soft card-hover cursor-pointer peer-checked:!variant-filled-secondary">
		<header class="card-header">
			<h4 class="h4 font-bold">{title}</h4>
		</header>
		<section class="p-4">{description}</section>
	</div>
</label>
