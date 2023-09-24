import { PUBLIC_SUPABASE_URL } from '$env/static/public';

export const getAvatarUrl = (avatarName?: string | null) =>
	avatarName ? `${PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatars/${avatarName}` : '';
