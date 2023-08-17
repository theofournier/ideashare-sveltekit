import { SupabaseClient, Session } from '@supabase/supabase-js';
import type { UserProfile } from './lib/data/users';
import type { Database } from '$lib/supabase.schema';

declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient<Database>;
			getSession(): Promise<Session | null>;
			getUser(): Promise<UserProfile | null>;
		}
		interface PageData {
			session: Session | null;
			user: UserProfile | null;
		}
		// interface Error {}
		// interface Platform {}
	}
}

export {};
