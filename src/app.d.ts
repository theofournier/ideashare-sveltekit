import { SupabaseClient, Session } from '@supabase/supabase-js';
import type { UserProfile } from './lib/data/users';

declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient;
			getSession(): Promise<Session | null>;
			user: UserProfile | null;
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
