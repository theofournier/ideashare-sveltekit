import type { User } from '@supabase/supabase-js';
import type { Database } from '../supabase.schema';

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type UserProfile = Omit<User, 'updated_at'> & Profile;

export type DefaultShareOptions =
	Database['public']['Tables']['profiles_default_share_options']['Row'];
export type DefaultShareOptionsUpdate =
	Database['public']['Tables']['profiles_default_share_options']['Update'];
export type ProfileApproval = Database['public']['Tables']['profiles_approvals']['Row'];
