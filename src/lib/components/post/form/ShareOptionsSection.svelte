<script lang="ts">
	import type { PrivacyType, ShareType } from '$lib/data/post';

	export let privacy: PrivacyType | null = null;
	export let anonymous: boolean | null = null;
	export let like: ShareType | null = null;
	export let comment: ShareType | null = null;
	export let help: ShareType | null = null;
	export let link_post: ShareType | null = null;
	export let work: ShareType | null = null;
	export let contact: ShareType | null = null;
	export let follow: ShareType | null = null;
	export let status: ShareType | null = null;
</script>

<div id="share-options">
	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Private</span>
			<input type="checkbox" class="toggle" name="private" checked={privacy === 'private'} />
		</label>
	</div>
	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Anonymous</span>
			<input type="checkbox" class="toggle" name="anonymous" checked={anonymous} />
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
					checked={!like || like === 'all'}
					value="all"
				/>
			</label>
		</div>
		<div class="form-control">
			<label class="label cursor-pointer">
				<span class="label-text">None</span>
				<input type="radio" name="like" class="radio" checked={like === 'none'} value="none" />
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
					checked={!comment || comment === 'all'}
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
					checked={comment === 'work'}
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
					checked={comment === 'none'}
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
					checked={!help || help === 'all'}
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
					checked={help === 'approval'}
					value="approval"
				/>
			</label>
		</div>
		<div class="form-control">
			<label class="label cursor-pointer">
				<span class="label-text">None</span>
				<input type="radio" name="help" class="radio" checked={help === 'none'} value="none" />
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
					checked={!link_post || link_post === 'all'}
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
					checked={link_post === 'approval'}
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
					checked={link_post === 'none'}
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
					checked={!work || work === 'all'}
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
					checked={work === 'approval'}
					value="approval"
				/>
			</label>
		</div>
		<div class="form-control">
			<label class="label cursor-pointer">
				<span class="label-text">None</span>
				<input type="radio" name="work" class="radio" checked={work === 'none'} value="none" />
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
					checked={!contact || contact === 'all'}
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
					checked={contact === 'approval'}
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
					checked={contact === 'none'}
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
					checked={!follow || follow === 'all'}
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
					checked={follow === 'approval'}
					value="approval"
				/>
			</label>
		</div>
		<div class="form-control">
			<label class="label cursor-pointer">
				<span class="label-text">None</span>
				<input type="radio" name="follow" class="radio" checked={follow === 'none'} value="none" />
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
					checked={!status || status === 'work'}
					value="work"
				/>
			</label>
		</div>
		<div class="form-control">
			<label class="label cursor-pointer">
				<span class="label-text">None</span>
				<input type="radio" name="status" class="radio" checked={status === 'none'} value="none" />
			</label>
		</div>
	</div>
</div>
