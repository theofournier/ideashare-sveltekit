import type { User } from '@supabase/supabase-js';
import type { Database } from '../supabase.schema';

type Profile = Database['public']['Tables']['profiles']['Row'];

export type UserProfile = User & Profile;
