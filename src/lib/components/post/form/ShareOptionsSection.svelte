<script lang="ts">
	import type { PrivacyType, ShareType } from '$lib/data/post';
	import { SlideToggle } from '@skeletonlabs/skeleton';
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
		<SlideToggle
			name="private"
			checked={privacy === 'private'}
			active="bg-secondary-500"
			class="list-option"
		>
			<p>Private</p>
		</SlideToggle>
		<SlideToggle name="anonymous" checked={!!anonymous} active="bg-secondary-500" class="list-option">
			<p>Anonymous</p>
		</SlideToggle>
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
