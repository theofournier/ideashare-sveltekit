import { handleAuth } from '$lib/handleAuth';
import { handleProfile } from '$lib/handleProfile';
import { handleSupabase } from '$lib/handleSupabase';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const handle: Handle = sequence(handleSupabase, handleAuth, handleProfile);
