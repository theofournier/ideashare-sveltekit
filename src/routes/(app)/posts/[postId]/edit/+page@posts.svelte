<script lang="ts">
	export let data;
</script>

<div>
	Welcome
	<form method="POST">
		<div id="category" class="bg-base-200 my-4">
			<div class="card shadow-lg">
				<div class="card-body">
					<h2 class="card-title">{data.post?.type === 'idea' ? 'Idea' : 'Issue'}</h2>
				</div>
			</div>
		</div>
		<div id="info" class="bg-base-200 my-4">
			<div class="text-xl">Give some information</div>
			<input
				type="text"
				placeholder="Title"
				class="input input-bordered"
				name="title"
				value={data.post?.title}
			/>
			<textarea
				class="textarea textarea-bordered"
				placeholder="Short description"
				name="shortDescription"
				value={data.post?.short_desc}
			/>
			<textarea
				class="textarea textarea-bordered"
				placeholder="Long description"
				name="longDescription"
				value={data.post?.long_desc}
			/>
		</div>
		{#if data.labels}
			<div id="labels" class="bg-base-200 my-4">
				<div class="text-xl">Select labels</div>
				{#each data.labels as label (label.value)}
					<div class="form-control">
						<label class="label cursor-pointer">
							<span class="label-text">{label.name}</span>
							<input
								type="checkbox"
								class="checkbox"
								name="label"
								value={label.value}
								checked={data.post.posts_labels.some(
									(postLabel) => label.value === postLabel.label_id
								)}
							/>
						</label>
					</div>
				{/each}
			</div>
		{/if}
		<div id="additional-info" class="bg-base-200 my-4">
			<div class="text-xl">Additional info</div>
			<select class="select select-bordered" name="language" value={data.post?.language}>
				<option>English</option>
				<option>French</option>
			</select>
		</div>
		<div id="share-options" class="bg-base-200 my-4">
			<div class="text-xl">Share options</div>
			<div class="form-control">
				<label class="label cursor-pointer">
					<span class="label-text">Private</span>
					<input
						type="checkbox"
						class="toggle"
						name="private"
						checked={data.post?.privacy === 'private'}
					/>
				</label>
			</div>
			<div class="form-control">
				<label class="label cursor-pointer">
					<span class="label-text">Anonymous</span>
					<input type="checkbox" class="toggle" name="anonymous" checked={data.post?.anonymous} />
				</label>
			</div>
			<div>
				<p>Like</p>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">All</span>
						<input
							type="radio"
							name="like"
							class="radio"
							checked={data.post?.like === 'all'}
							value="all"
						/>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">None</span>
						<input
							type="radio"
							name="like"
							class="radio"
							checked={data.post?.like === 'none'}
							value="none"
						/>
					</label>
				</div>
			</div>
			<div>
				<p>Comment</p>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">All</span>
						<input
							type="radio"
							name="comment"
							class="radio"
							checked={data.post?.comment === 'all'}
							value="all"
						/>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">Work</span>
						<input
							type="radio"
							name="comment"
							class="radio"
							checked={data.post?.comment === 'work'}
							value="work"
						/>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">None</span>
						<input
							type="radio"
							name="comment"
							class="radio"
							checked={data.post?.comment === 'none'}
							value="none"
						/>
					</label>
				</div>
			</div>
			<div>
				<p>Help</p>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">All</span>
						<input
							type="radio"
							name="help"
							class="radio"
							checked={data.post?.help === 'all'}
							value="all"
						/>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">Approval</span>
						<input
							type="radio"
							name="help"
							class="radio"
							checked={data.post?.help === 'approval'}
							value="approval"
						/>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">None</span>
						<input
							type="radio"
							name="help"
							class="radio"
							checked={data.post?.help === 'none'}
							value="none"
						/>
					</label>
				</div>
			</div>
			<div>
				<p>Link post</p>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">All</span>
						<input
							type="radio"
							name="linkPost"
							class="radio"
							checked={data.post?.link_post === 'all'}
							value="all"
						/>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">Approval</span>
						<input
							type="radio"
							name="linkPost"
							class="radio"
							checked={data.post?.link_post === 'approval'}
							value="approval"
						/>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">None</span>
						<input
							type="radio"
							name="linkPost"
							class="radio"
							checked={data.post?.link_post === 'none'}
							value="none"
						/>
					</label>
				</div>
			</div>
			<div>
				<p>Work on it</p>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">All</span>
						<input
							type="radio"
							name="work"
							class="radio"
							checked={data.post?.work === 'all'}
							value="all"
						/>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">Approval</span>
						<input
							type="radio"
							name="work"
							class="radio"
							checked={data.post?.work === 'approval'}
							value="approval"
						/>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">None</span>
						<input
							type="radio"
							name="work"
							class="radio"
							checked={data.post?.work === 'none'}
							value="none"
						/>
					</label>
				</div>
			</div>
			<div>
				<p>Contact</p>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">All</span>
						<input
							type="radio"
							name="contact"
							class="radio"
							checked={data.post?.contact === 'all'}
							value="all"
						/>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">Approval</span>
						<input
							type="radio"
							name="contact"
							class="radio"
							checked={data.post?.contact === 'approval'}
							value="approval"
						/>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">None</span>
						<input
							type="radio"
							name="contact"
							class="radio"
							checked={data.post?.contact === 'none'}
							value="none"
						/>
					</label>
				</div>
			</div>
			<div>
				<p>Follow</p>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">All</span>
						<input
							type="radio"
							name="follow"
							class="radio"
							checked={data.post?.follow === 'all'}
							value="all"
						/>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">None</span>
						<input
							type="radio"
							name="follow"
							class="radio"
							checked={data.post?.follow === 'none'}
							value="none"
						/>
					</label>
				</div>
			</div>
			<div>
				<p>Status</p>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">Work</span>
						<input
							type="radio"
							name="status"
							class="radio"
							checked={data.post?.status === 'work'}
							value="work"
						/>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">None</span>
						<input
							type="radio"
							name="status"
							class="radio"
							checked={data.post?.status === 'none'}
							value="none"
						/>
					</label>
				</div>
			</div>
		</div>
		<button class="btn">Save</button>
	</form>
</div>
