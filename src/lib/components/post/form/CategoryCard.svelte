<script lang="ts">
	export let value: string;
	export let title: string;
	export let description: string;
	export let checked = false;
</script>

<label for={value}>
	<input type="radio" id={value} name="postType" {value} class="hidden peer" {checked} />
	<div class="card bg-base-300 cursor-pointer peer-checked:!bg-secondary">
		<div class="card-body p-4">
			<div class="card-title">
				{title}
			</div>
			<p>{description}</p>
		</div>
	</div>
</label>
