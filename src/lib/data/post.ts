import type { Database } from '../supabase.schema';

export type Post = Database['public']['Tables']['posts']['Row'];
export type Label = Database['public']['Tables']['labels']['Row'];
export type PostLabel = Database['public']['Tables']['posts_labels']['Row'];
export type PostNote = Database['public']['Tables']['posts_notes']['Row'];
export type Help = Database['public']['Tables']['posts_helps']['Row'];
