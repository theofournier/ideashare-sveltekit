<script lang="ts">
	export let data;
</script>

<div>
	<form method="POST" action="?/reset">
		<button class="btn">Reset to default</button>
	</form>
	<form method="POST" action="?/save">
		<div class="form-control">
			<label class="label cursor-pointer">
				<span class="label-text">Private</span>
				<input
					type="checkbox"
					class="toggle"
					name="private"
					checked={data.user?.privacy === 'private'}
				/>
			</label>
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
						checked={!data.user?.follow || data.user?.follow === 'all'}
						value="all"
					/>
				</label>
			</div>
			<div class="form-control">
				<label class="label cursor-pointer">
					<span class="label-text">Approval</span>
					<input
						type="radio"
						name="follow"
						class="radio"
						checked={data.user?.follow === 'approval'}
						value="approval"
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
						checked={data.user?.follow === 'none'}
						value="none"
					/>
				</label>
			</div>
		</div>
		<div>
			<p>My posts</p>
			<div class="form-control">
				<label class="label cursor-pointer">
					<span class="label-text">All</span>
					<input
						type="radio"
						name="posts"
						class="radio"
						checked={!data.user?.posts || data.user?.posts === 'all'}
						value="all"
					/>
				</label>
			</div>
			<div class="form-control">
				<label class="label cursor-pointer">
					<span class="label-text">None</span>
					<input
						type="radio"
						name="posts"
						class="radio"
						checked={data.user?.posts === 'none'}
						value="none"
					/>
				</label>
			</div>
		</div>
		<div>
			<p>Posts following</p>
			<div class="form-control">
				<label class="label cursor-pointer">
					<span class="label-text">All</span>
					<input
						type="radio"
						name="postsFollowing"
						class="radio"
						checked={!data.user?.posts_following || data.user?.posts_following === 'all'}
						value="all"
					/>
				</label>
			</div>
			<div class="form-control">
				<label class="label cursor-pointer">
					<span class="label-text">None</span>
					<input
						type="radio"
						name="postsFollowing"
						class="radio"
						checked={data.user?.posts_following === 'none'}
						value="none"
					/>
				</label>
			</div>
		</div>
		<div>
			<p>Posts working</p>
			<div class="form-control">
				<label class="label cursor-pointer">
					<span class="label-text">All</span>
					<input
						type="radio"
						name="postsWorking"
						class="radio"
						checked={!data.user?.posts_working || data.user?.posts_working === 'all'}
						value="all"
					/>
				</label>
			</div>
			<div class="form-control">
				<label class="label cursor-pointer">
					<span class="label-text">None</span>
					<input
						type="radio"
						name="postsWorking"
						class="radio"
						checked={data.user?.posts_working === 'none'}
						value="none"
					/>
				</label>
			</div>
		</div>
		<div>
			<p>My helps</p>
			<div class="form-control">
				<label class="label cursor-pointer">
					<span class="label-text">All</span>
					<input
						type="radio"
						name="helps"
						class="radio"
						checked={!data.user?.helps || data.user?.helps === 'all'}
						value="all"
					/>
				</label>
			</div>
			<div class="form-control">
				<label class="label cursor-pointer">
					<span class="label-text">None</span>
					<input
						type="radio"
						name="helps"
						class="radio"
						checked={data.user?.helps === 'none'}
						value="none"
					/>
				</label>
			</div>
		</div>
		<div>
			<p>Profiles following</p>
			<div class="form-control">
				<label class="label cursor-pointer">
					<span class="label-text">All</span>
					<input
						type="radio"
						name="profilesFollowing"
						class="radio"
						checked={!data.user?.profiles_following || data.user?.profiles_following === 'all'}
						value="all"
					/>
				</label>
			</div>
			<div class="form-control">
				<label class="label cursor-pointer">
					<span class="label-text">None</span>
					<input
						type="radio"
						name="profilesFollowing"
						class="radio"
						checked={data.user?.profiles_following === 'none'}
						value="none"
					/>
				</label>
			</div>
		</div>
		<button class="btn">Save</button>
	</form>
</div>
