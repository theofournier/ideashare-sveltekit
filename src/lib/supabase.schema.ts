export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      labels: {
        Row: {
          created_at: string
          icon_url: string | null
          name: string
          parent_value: string | null
          value: string
        }
        Insert: {
          created_at?: string
          icon_url?: string | null
          name: string
          parent_value?: string | null
          value: string
        }
        Update: {
          created_at?: string
          icon_url?: string | null
          name?: string
          parent_value?: string | null
          value?: string
        }
        Relationships: [
          {
            foreignKeyName: "labels_parent_value_fkey"
            columns: ["parent_value"]
            referencedRelation: "labels"
            referencedColumns: ["value"]
          }
        ]
      }
      posts: {
        Row: {
          anonymous: boolean | null
          comment: string | null
          contact: string | null
          created_at: string
          follow: string | null
          help: string | null
          id: string
          images: Json[] | null
          language: string | null
          like: string | null
          link_post: string | null
          long_desc: string | null
          privacy: string | null
          short_desc: string | null
          status: string | null
          title: string | null
          type: string
          updated_at: string | null
          url_links: string[] | null
          user_id: string | null
          work: string | null
        }
        Insert: {
          anonymous?: boolean | null
          comment?: string | null
          contact?: string | null
          created_at?: string
          follow?: string | null
          help?: string | null
          id?: string
          images?: Json[] | null
          language?: string | null
          like?: string | null
          link_post?: string | null
          long_desc?: string | null
          privacy?: string | null
          short_desc?: string | null
          status?: string | null
          title?: string | null
          type: string
          updated_at?: string | null
          url_links?: string[] | null
          user_id?: string | null
          work?: string | null
        }
        Update: {
          anonymous?: boolean | null
          comment?: string | null
          contact?: string | null
          created_at?: string
          follow?: string | null
          help?: string | null
          id?: string
          images?: Json[] | null
          language?: string | null
          like?: string | null
          link_post?: string | null
          long_desc?: string | null
          privacy?: string | null
          short_desc?: string | null
          status?: string | null
          title?: string | null
          type?: string
          updated_at?: string | null
          url_links?: string[] | null
          user_id?: string | null
          work?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      posts_comments: {
        Row: {
          created_at: string
          id: string
          post_id: string
          text: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          post_id: string
          text: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          post_id?: string
          text?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_comments_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_comments_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      posts_followers: {
        Row: {
          created_at: string
          post_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          post_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_followers_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_followers_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      posts_helps: {
        Row: {
          created_at: string
          description: string | null
          id: string
          images: Json[] | null
          post_id: string
          title: string | null
          url_links: string[] | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          images?: Json[] | null
          post_id: string
          title?: string | null
          url_links?: string[] | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          images?: Json[] | null
          post_id?: string
          title?: string | null
          url_links?: string[] | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_helps_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_helps_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      posts_labels: {
        Row: {
          label_id: string
          post_id: string
        }
        Insert: {
          label_id: string
          post_id: string
        }
        Update: {
          label_id?: string
          post_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_labels_label_id_fkey"
            columns: ["label_id"]
            referencedRelation: "labels"
            referencedColumns: ["value"]
          },
          {
            foreignKeyName: "posts_labels_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          }
        ]
      }
      posts_likes: {
        Row: {
          created_at: string
          post_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          post_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_likes_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_likes_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      posts_notes: {
        Row: {
          created_at: string | null
          id: string
          post_id: string
          text: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          post_id: string
          text?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          post_id?: string
          text?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_notes_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_notes_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      posts_works: {
        Row: {
          created_at: string
          post_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          post_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_works_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_works_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          first_name: string | null
          id: string
          last_name: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles_follows: {
        Row: {
          created_at: string
          follower_user_id: string
          following_user_id: string
        }
        Insert: {
          created_at?: string
          follower_user_id: string
          following_user_id: string
        }
        Update: {
          created_at?: string
          follower_user_id?: string
          following_user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_follows_follower_user_id_fkey"
            columns: ["follower_user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_follows_following_user_id_fkey"
            columns: ["following_user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_avatar: {
        Args: {
          avatar_url: string
        }
        Returns: Record<string, unknown>
      }
      delete_storage_object: {
        Args: {
          bucket: string
          object: string
        }
        Returns: Record<string, unknown>
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
