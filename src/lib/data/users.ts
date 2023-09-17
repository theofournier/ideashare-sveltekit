import type { User } from '@supabase/supabase-js';
import type { Database } from '../supabase.schema';

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type UserProfile = Omit<User, 'updated_at'> & Profile;
