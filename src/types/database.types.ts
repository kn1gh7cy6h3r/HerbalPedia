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
      plants: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          scientific_name: string
          common_names: Json // { english: string, hindi: string, regional: string[] }
          family: string
          slug: string
          description: string
          habitat: string | null
          identification_features: string[] | null
          parts_used: string[]
          images: Json[] // { url: string, alt: string, caption?: string, isPrimary?: boolean }
          medicinal_uses: Json[] // { ailment_id?: string, ailment_name: string, effectiveness: string, description: string, scientifically_proven: boolean }
          preparations: Json[] // { name: string, type: string, difficulty: string, ingredients: any[], steps: string[], dosage: string, duration?: string, precautions?: string[] }
          safety_rating: string
          safety_rationale: string | null
          precautions: string[] | null
          contraindications: string[] | null
          side_effects: string[] | null
          toxicity: Json | null // { level: string, details?: string }
          pregnancy_safe: boolean | null
          lactation_safe: boolean | null
          substitutes: Json[] | null
          active_compounds: string[] | null
          scientific_references: Json[] | null
          cultivation: Json | null
          status: string
          verified_by: string | null
          last_verified: string | null
          sources: string[] | null
          tags: string[] | null
          view_count: number
          bookmark_count: number
        }
        Insert: Omit<Database['public']['Tables']['plants']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['plants']['Insert']>
      }
      ailments: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          slug: string
          category: string
          description: string | null
          synonyms: string[] | null
          related_plants: Json[] | null // { plant_id: string, plant_name: string, effectiveness: string }
          common_symptoms: string[] | null
        }
        Insert: Omit<Database['public']['Tables']['ailments']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['ailments']['Insert']>
      }
    }
  }
}
