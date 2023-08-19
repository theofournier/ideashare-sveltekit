<script lang="ts">
	let links: string[] = [];
</script>

<div>
	Welcome
	<form method="POST">
		<div id="category" class="collapse">
			<input type="radio" name="create-post" checked/>
			<div class="collapse-title">Choose a post category</div>
			<div class="collapse-content flex">
				<div class="card shadow-lg">
					<div class="card-body">
						<h2 class="card-title">Idea</h2>
						<p>Do you have an idea?</p>
					</div>
				</div>
				<div class="card shadow-lg">
					<div class="card-body">
						<h2 class="card-title">Issue</h2>
						<p>Do you have an issue?</p>
					</div>
				</div>
			</div>
		</div>
		<div id="info" class="collapse">
			<input type="radio" name="create-post" />
			<div class="collapse-title">Give some information</div>
			<div class="collapse-content">
				<input type="text" placeholder="Title" class="input input-bordered" name="title" />
				<textarea
					class="textarea textarea-bordered"
					placeholder="Short description"
					name="shortDescription"
				/>
				<textarea
					class="textarea textarea-bordered"
					placeholder="Long description"
					name="longDescription"
				/>
			</div>
		</div>
		<div id="labels" class="collapse">
			<input type="radio" name="create-post" />
			<div class="collapse-title">Select labels</div>
			<div class="collapse-content">
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">Mobile</span>
						<input type="checkbox" class="checkbox" />
					</label>
				</div>
			</div>
		</div>
		<div id="additional-info" class="collapse">
			<input type="radio" name="create-post" />
			<div class="collapse-title">Additional info</div>
			<div class="collapse-content">
				<select class="select select-bordered" name="language">
					<option>English</option>
					<option>French</option>
				</select>
				<textarea class="textarea textarea-bordered" placeholder="Note" name="note"/>
				{#each links as link, i (i)}
					<a href={link} class="link">{link}</a>
				{/each}
				<input
					type="text"
					placeholder="Add link"
					class="input input-bordered"
					on:change={(event) => {
						links = [...links, event.target?.value];
					}}
				/>
			</div>
		</div>
		<div id="share-options" class="collapse">
			<input type="radio" name="create-post" />
			<div class="collapse-title">Share options</div>
			<div class="collapse-content">
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">Private</span>
						<input type="checkbox" class="toggle" />
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">Anonymous</span>
						<input type="checkbox" class="toggle" />
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">Like</span>
						<input type="checkbox" class="checkbox" />
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">Comment</span>
						<input type="checkbox" class="checkbox" />
					</label>
				</div>
				<div>
					<p>Help</p>
					<div class="form-control">
						<label class="label cursor-pointer">
							<span class="label-text">Everyone</span>
							<input type="radio" name="help" class="radio" />
						</label>
					</div>
					<div class="form-control">
						<label class="label cursor-pointer">
							<span class="label-text">Approval</span>
							<input type="radio" name="help" class="radio" />
						</label>
					</div>
					<div class="form-control">
						<label class="label cursor-pointer">
							<span class="label-text">None</span>
							<input type="radio" name="help" class="radio" />
						</label>
					</div>
				</div>
			</div>
		</div>
		<button>Save</button>
	</form>
</div>
