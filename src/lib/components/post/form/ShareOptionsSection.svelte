<script lang="ts">
	import type { PrivacyType, ShareType } from '$lib/data/post';
	import ShareOptionItem from './ShareOptionItem.svelte';

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

<div id="share-options" class="flex flex-col gap-2">
	<div>
		<div class="form-control hover:bg-neutral/10 rounded-btn">
			<label class="cursor-pointer label justify-normal gap-2">
				<input
					type="checkbox"
					name="private"
					class="toggle toggle-secondary"
					checked={privacy === 'private'}
				/>
				<span class="label-text">Private</span>
			</label>
		</div>
		<div class="form-control hover:bg-neutral/10 rounded-btn">
			<label class="label cursor-pointer justify-normal gap-2">
				<input
					type="checkbox"
					name="anonymous"
					class="toggle toggle-secondary"
					checked={!!anonymous}
				/>
				<span class="label-text">Anonymous</span>
			</label>
		</div>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
		<ShareOptionItem title="Like" name="like" values={['all', 'none']} defaultValue={like} />
		<ShareOptionItem
			title="Comment"
			name="comment"
			values={['all', 'work', 'none']}
			defaultValue={comment}
		/>
		<ShareOptionItem
			title="Help"
			name="help"
			values={['all', 'approval', 'none']}
			defaultValue={help}
		/>
		<ShareOptionItem
			title="Link post"
			name="linkPost"
			values={['all', 'approval', 'none']}
			defaultValue={link_post}
		/>
		<ShareOptionItem
			title="Work on it"
			name="work"
			values={['all', 'approval', 'none']}
			defaultValue={work}
		/>
		<ShareOptionItem
			title="Contact"
			name="contact"
			values={['all', 'approval', 'none']}
			defaultValue={contact}
		/>
		<ShareOptionItem
			title="Follow"
			name="follow"
			values={['all', 'approval', 'none']}
			defaultValue={follow}
		/>
		<ShareOptionItem
			title="Status"
			name="status"
			values={['work', 'none']}
			defaultValue={status || 'work'}
		/>
	</div>
</div>
