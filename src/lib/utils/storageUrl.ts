import { PUBLIC_SUPABASE_URL } from '$env/static/public';

export const BASE_STORAGE_URL = `${PUBLIC_SUPABASE_URL}/storage/v1/object/public`;

export const getAvatarUrl = (avatarName?: string | null) =>
	avatarName ? `${BASE_STORAGE_URL}/avatars/${avatarName}` : '';

export const getPostImageUrl = (imageName?: string | null) =>
	imageName ? `${BASE_STORAGE_URL}/post-images/${imageName}` : '';

export const getHelpImageUrl = (imageName?: string | null) =>
	imageName ? `${BASE_STORAGE_URL}/help-images/${imageName}` : '';
