<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { getAvatarUrl } from '$lib/utils/storageUrl';
	import { getInitials } from '$lib/utils/getInitials';

	export let avatarUrl: string | undefined = undefined;
	export let avatarName: string | undefined | null = undefined;
	export let firstName: string | undefined | null = undefined;
	export let lastName: string | undefined | null = undefined;
	export let width = 'w-12';

	$: url = avatarUrl || getAvatarUrl(avatarName);
	$: initials = getInitials(firstName, lastName);
</script>

<Avatar src={url} {initials} {width} rounded="rounded-full" />
