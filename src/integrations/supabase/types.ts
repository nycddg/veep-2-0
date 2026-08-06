export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      clients: {
        Row: {
          archived: boolean
          company_id: string
          created_at: string
          created_by: string | null
          email: string
          external_id: string | null
          id: string
          is_demo: boolean
          name: string
          role: string | null
          source: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          archived?: boolean
          company_id: string
          created_at?: string
          created_by?: string | null
          email: string
          external_id?: string | null
          id?: string
          is_demo?: boolean
          name: string
          role?: string | null
          source?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          archived?: boolean
          company_id?: string
          created_at?: string
          created_by?: string | null
          email?: string
          external_id?: string | null
          id?: string
          is_demo?: boolean
          name?: string
          role?: string | null
          source?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clients_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      companies: {
        Row: {
          archived: boolean
          created_at: string
          created_by: string | null
          domain: string | null
          external_id: string | null
          id: string
          is_demo: boolean
          name: string
          notes: string | null
          plan: string | null
          slug: string | null
          source: string
          status: string
          updated_at: string
        }
        Insert: {
          archived?: boolean
          created_at?: string
          created_by?: string | null
          domain?: string | null
          external_id?: string | null
          id?: string
          is_demo?: boolean
          name: string
          notes?: string | null
          plan?: string | null
          slug?: string | null
          source?: string
          status?: string
          updated_at?: string
        }
        Update: {
          archived?: boolean
          created_at?: string
          created_by?: string | null
          domain?: string | null
          external_id?: string | null
          id?: string
          is_demo?: boolean
          name?: string
          notes?: string | null
          plan?: string | null
          slug?: string | null
          source?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      documents: {
        Row: {
          archived: boolean
          company_id: string
          created_at: string
          created_by: string | null
          dated: string | null
          external_id: string | null
          id: string
          is_demo: boolean
          kind: string
          name: string
          source: string
          source_url: string | null
          status: string
          updated_at: string
        }
        Insert: {
          archived?: boolean
          company_id: string
          created_at?: string
          created_by?: string | null
          dated?: string | null
          external_id?: string | null
          id?: string
          is_demo?: boolean
          kind: string
          name: string
          source?: string
          source_url?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          archived?: boolean
          company_id?: string
          created_at?: string
          created_by?: string | null
          dated?: string | null
          external_id?: string | null
          id?: string
          is_demo?: boolean
          kind?: string
          name?: string
          source?: string
          source_url?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "documents_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      engagements: {
        Row: {
          archived: boolean
          company_id: string
          created_at: string
          created_by: string | null
          cs_contact: string | null
          end_date: string | null
          external_id: string | null
          files: Json
          goals: string[]
          id: string
          is_demo: boolean
          job_id: string | null
          offer_type: string | null
          operator_id: string
          operator_summary: Json
          requests: Json
          source: string
          start_date: string | null
          state: string
          updated_at: string
          updates: Json
        }
        Insert: {
          archived?: boolean
          company_id: string
          created_at?: string
          created_by?: string | null
          cs_contact?: string | null
          end_date?: string | null
          external_id?: string | null
          files?: Json
          goals?: string[]
          id?: string
          is_demo?: boolean
          job_id?: string | null
          offer_type?: string | null
          operator_id: string
          operator_summary?: Json
          requests?: Json
          source?: string
          start_date?: string | null
          state?: string
          updated_at?: string
          updates?: Json
        }
        Update: {
          archived?: boolean
          company_id?: string
          created_at?: string
          created_by?: string | null
          cs_contact?: string | null
          end_date?: string | null
          external_id?: string | null
          files?: Json
          goals?: string[]
          id?: string
          is_demo?: boolean
          job_id?: string | null
          offer_type?: string | null
          operator_id?: string
          operator_summary?: Json
          requests?: Json
          source?: string
          start_date?: string | null
          state?: string
          updated_at?: string
          updates?: Json
        }
        Relationships: [
          {
            foreignKeyName: "engagements_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "engagements_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "engagements_operator_id_fkey"
            columns: ["operator_id"]
            isOneToOne: false
            referencedRelation: "operators"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          amount: number
          archived: boolean
          company_id: string
          created_at: string
          created_by: string | null
          external_id: string | null
          id: string
          is_demo: boolean
          number: string
          period: string | null
          source: string
          status: string
          updated_at: string
        }
        Insert: {
          amount?: number
          archived?: boolean
          company_id: string
          created_at?: string
          created_by?: string | null
          external_id?: string | null
          id?: string
          is_demo?: boolean
          number: string
          period?: string | null
          source?: string
          status?: string
          updated_at?: string
        }
        Update: {
          amount?: number
          archived?: boolean
          company_id?: string
          created_at?: string
          created_by?: string | null
          external_id?: string | null
          id?: string
          is_demo?: boolean
          number?: string
          period?: string | null
          source?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "invoices_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      jobs: {
        Row: {
          archived: boolean
          company_id: string
          constraints: string | null
          created_at: string
          created_by: string | null
          external_id: string | null
          id: string
          is_demo: boolean
          owned_today: string | null
          source: string
          status: string
          success: string | null
          timeline: Json
          title: string
          updated_at: string
          urgency: string | null
        }
        Insert: {
          archived?: boolean
          company_id: string
          constraints?: string | null
          created_at?: string
          created_by?: string | null
          external_id?: string | null
          id?: string
          is_demo?: boolean
          owned_today?: string | null
          source?: string
          status?: string
          success?: string | null
          timeline?: Json
          title: string
          updated_at?: string
          urgency?: string | null
        }
        Update: {
          archived?: boolean
          company_id?: string
          constraints?: string | null
          created_at?: string
          created_by?: string | null
          external_id?: string | null
          id?: string
          is_demo?: boolean
          owned_today?: string | null
          source?: string
          status?: string
          success?: string | null
          timeline?: Json
          title?: string
          updated_at?: string
          urgency?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "jobs_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          archived: boolean
          created_at: string
          id: string
          one_liner: string
          pseudonym: string
          role_needed: string
          sort_order: number
          stage: string
          updated_at: string
        }
        Insert: {
          archived?: boolean
          created_at?: string
          id?: string
          one_liner: string
          pseudonym: string
          role_needed: string
          sort_order?: number
          stage?: string
          updated_at?: string
        }
        Update: {
          archived?: boolean
          created_at?: string
          id?: string
          one_liner?: string
          pseudonym?: string
          role_needed?: string
          sort_order?: number
          stage?: string
          updated_at?: string
        }
        Relationships: []
      }
      operator_agreements: {
        Row: {
          archived: boolean
          created_at: string
          created_by: string | null
          dated: string | null
          external_id: string | null
          id: string
          is_demo: boolean
          kind: string
          name: string
          operator_id: string
          source: string
          status: string
          updated_at: string
        }
        Insert: {
          archived?: boolean
          created_at?: string
          created_by?: string | null
          dated?: string | null
          external_id?: string | null
          id?: string
          is_demo?: boolean
          kind: string
          name: string
          operator_id: string
          source?: string
          status?: string
          updated_at?: string
        }
        Update: {
          archived?: boolean
          created_at?: string
          created_by?: string | null
          dated?: string | null
          external_id?: string | null
          id?: string
          is_demo?: boolean
          kind?: string
          name?: string
          operator_id?: string
          source?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "operator_agreements_operator_id_fkey"
            columns: ["operator_id"]
            isOneToOne: false
            referencedRelation: "operators"
            referencedColumns: ["id"]
          },
        ]
      }
      operator_assignments: {
        Row: {
          archived: boolean
          company_id: string | null
          created_at: string
          created_by: string | null
          cs_contact: string | null
          end_date: string | null
          external_id: string | null
          files: Json
          goals: string[]
          id: string
          is_demo: boolean
          job: string
          offer_type: string | null
          operator_id: string
          source: string
          start_date: string | null
          state: string
          updated_at: string
          updates: Json
        }
        Insert: {
          archived?: boolean
          company_id?: string | null
          created_at?: string
          created_by?: string | null
          cs_contact?: string | null
          end_date?: string | null
          external_id?: string | null
          files?: Json
          goals?: string[]
          id?: string
          is_demo?: boolean
          job: string
          offer_type?: string | null
          operator_id: string
          source?: string
          start_date?: string | null
          state?: string
          updated_at?: string
          updates?: Json
        }
        Update: {
          archived?: boolean
          company_id?: string | null
          created_at?: string
          created_by?: string | null
          cs_contact?: string | null
          end_date?: string | null
          external_id?: string | null
          files?: Json
          goals?: string[]
          id?: string
          is_demo?: boolean
          job?: string
          offer_type?: string | null
          operator_id?: string
          source?: string
          start_date?: string | null
          state?: string
          updated_at?: string
          updates?: Json
        }
        Relationships: [
          {
            foreignKeyName: "operator_assignments_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "operator_assignments_operator_id_fkey"
            columns: ["operator_id"]
            isOneToOne: false
            referencedRelation: "operators"
            referencedColumns: ["id"]
          },
        ]
      }
      operator_availability: {
        Row: {
          blackouts: Json
          created_at: string
          created_by: string | null
          days_per_week: number
          earliest_start: string | null
          external_id: string | null
          id: string
          is_demo: boolean
          operator_id: string
          source: string
          status: string
          travel: string | null
          updated_at: string | null
        }
        Insert: {
          blackouts?: Json
          created_at?: string
          created_by?: string | null
          days_per_week?: number
          earliest_start?: string | null
          external_id?: string | null
          id?: string
          is_demo?: boolean
          operator_id: string
          source?: string
          status?: string
          travel?: string | null
          updated_at?: string | null
        }
        Update: {
          blackouts?: Json
          created_at?: string
          created_by?: string | null
          days_per_week?: number
          earliest_start?: string | null
          external_id?: string | null
          id?: string
          is_demo?: boolean
          operator_id?: string
          source?: string
          status?: string
          travel?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "operator_availability_operator_id_fkey"
            columns: ["operator_id"]
            isOneToOne: false
            referencedRelation: "operators"
            referencedColumns: ["id"]
          },
        ]
      }
      operator_invitations: {
        Row: {
          archived: boolean
          brief: string | null
          commitment: string | null
          company_id: string | null
          created_at: string
          created_by: string | null
          external_id: string | null
          id: string
          is_demo: boolean
          location: string | null
          offer_type: string | null
          operator_id: string
          respond_by: string | null
          source: string
          status: string
          success: string[]
          title: string
          updated_at: string
        }
        Insert: {
          archived?: boolean
          brief?: string | null
          commitment?: string | null
          company_id?: string | null
          created_at?: string
          created_by?: string | null
          external_id?: string | null
          id?: string
          is_demo?: boolean
          location?: string | null
          offer_type?: string | null
          operator_id: string
          respond_by?: string | null
          source?: string
          status?: string
          success?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          archived?: boolean
          brief?: string | null
          commitment?: string | null
          company_id?: string | null
          created_at?: string
          created_by?: string | null
          external_id?: string | null
          id?: string
          is_demo?: boolean
          location?: string | null
          offer_type?: string | null
          operator_id?: string
          respond_by?: string | null
          source?: string
          status?: string
          success?: string[]
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "operator_invitations_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "operator_invitations_operator_id_fkey"
            columns: ["operator_id"]
            isOneToOne: false
            referencedRelation: "operators"
            referencedColumns: ["id"]
          },
        ]
      }
      operator_payouts: {
        Row: {
          amount: number
          created_at: string
          created_by: string | null
          engagement: string | null
          engagement_id: string | null
          external_id: string | null
          id: string
          is_demo: boolean
          operator_id: string
          payout_date: string | null
          source: string
          status: string
        }
        Insert: {
          amount?: number
          created_at?: string
          created_by?: string | null
          engagement?: string | null
          engagement_id?: string | null
          external_id?: string | null
          id?: string
          is_demo?: boolean
          operator_id: string
          payout_date?: string | null
          source?: string
          status?: string
        }
        Update: {
          amount?: number
          created_at?: string
          created_by?: string | null
          engagement?: string | null
          engagement_id?: string | null
          external_id?: string | null
          id?: string
          is_demo?: boolean
          operator_id?: string
          payout_date?: string | null
          source?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "operator_payouts_operator_id_fkey"
            columns: ["operator_id"]
            isOneToOne: false
            referencedRelation: "operators"
            referencedColumns: ["id"]
          },
        ]
      }
      operators: {
        Row: {
          archived: boolean
          created_at: string
          created_by: string | null
          external_id: string | null
          functions: string[]
          headline: string | null
          highlights: string[]
          id: string
          industries: string[]
          is_demo: boolean
          linkedin: string | null
          marketing_opt_in: boolean
          name: string
          photo_url: string | null
          preferences: string | null
          proof_points: string[]
          source: string
          stages: string[]
          updated_at: string
          user_id: string | null
        }
        Insert: {
          archived?: boolean
          created_at?: string
          created_by?: string | null
          external_id?: string | null
          functions?: string[]
          headline?: string | null
          highlights?: string[]
          id?: string
          industries?: string[]
          is_demo?: boolean
          linkedin?: string | null
          marketing_opt_in?: boolean
          name: string
          photo_url?: string | null
          preferences?: string | null
          proof_points?: string[]
          source?: string
          stages?: string[]
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          archived?: boolean
          created_at?: string
          created_by?: string | null
          external_id?: string | null
          functions?: string[]
          headline?: string | null
          highlights?: string[]
          id?: string
          industries?: string[]
          is_demo?: boolean
          linkedin?: string | null
          marketing_opt_in?: boolean
          name?: string
          photo_url?: string | null
          preferences?: string | null
          proof_points?: string[]
          source?: string
          stages?: string[]
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      partner_invites: {
        Row: {
          accepted_at: string | null
          created_at: string
          email: string
          id: string
          invited_by: string | null
          revoked: boolean
          role: Database["public"]["Enums"]["app_role"]
        }
        Insert: {
          accepted_at?: string | null
          created_at?: string
          email: string
          id?: string
          invited_by?: string | null
          revoked?: boolean
          role?: Database["public"]["Enums"]["app_role"]
        }
        Update: {
          accepted_at?: string | null
          created_at?: string
          email?: string
          id?: string
          invited_by?: string | null
          revoked?: boolean
          role?: Database["public"]["Enums"]["app_role"]
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string
          full_name: string | null
          id: string
          last_sign_in_at: string | null
        }
        Insert: {
          created_at?: string
          email: string
          full_name?: string | null
          id: string
          last_sign_in_at?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          last_sign_in_at?: string | null
        }
        Relationships: []
      }
      proposals: {
        Row: {
          archived: boolean
          commercial: Json
          company_id: string
          created_at: string
          created_by: string | null
          external_id: string | null
          id: string
          inclusions: string[]
          is_demo: boolean
          job_id: string | null
          name: string
          sent_on: string | null
          source: string
          status: string
          updated_at: string
        }
        Insert: {
          archived?: boolean
          commercial?: Json
          company_id: string
          created_at?: string
          created_by?: string | null
          external_id?: string | null
          id?: string
          inclusions?: string[]
          is_demo?: boolean
          job_id?: string | null
          name: string
          sent_on?: string | null
          source?: string
          status?: string
          updated_at?: string
        }
        Update: {
          archived?: boolean
          commercial?: Json
          company_id?: string
          created_at?: string
          created_by?: string | null
          external_id?: string | null
          id?: string
          inclusions?: string[]
          is_demo?: boolean
          job_id?: string | null
          name?: string
          sent_on?: string | null
          source?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "proposals_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proposals_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      team_members: {
        Row: {
          archived: boolean
          company_id: string | null
          created_at: string
          created_by: string | null
          email: string | null
          external_id: string | null
          id: string
          is_demo: boolean
          name: string
          operator_id: string | null
          role: string
          source: string
          status: string
          updated_at: string
        }
        Insert: {
          archived?: boolean
          company_id?: string | null
          created_at?: string
          created_by?: string | null
          email?: string | null
          external_id?: string | null
          id?: string
          is_demo?: boolean
          name: string
          operator_id?: string | null
          role: string
          source?: string
          status?: string
          updated_at?: string
        }
        Update: {
          archived?: boolean
          company_id?: string | null
          created_at?: string
          created_by?: string | null
          email?: string | null
          external_id?: string | null
          id?: string
          is_demo?: boolean
          name?: string
          operator_id?: string | null
          role?: string
          source?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_members_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_members_operator_id_fkey"
            columns: ["operator_id"]
            isOneToOne: false
            referencedRelation: "operators"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      wins: {
        Row: {
          archived: boolean
          created_at: string
          engagement_type: string
          happened_on: string
          id: string
          length: string
          role: string
          updated_at: string
        }
        Insert: {
          archived?: boolean
          created_at?: string
          engagement_type: string
          happened_on?: string
          id?: string
          length: string
          role: string
          updated_at?: string
        }
        Update: {
          archived?: boolean
          created_at?: string
          engagement_type?: string
          happened_on?: string
          id?: string
          length?: string
          role?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_member: { Args: { _user_id: string }; Returns: boolean }
    }
    Enums: {
      app_role: "admin" | "partner" | "operator" | "client"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "partner", "operator", "client"],
    },
  },
} as const
