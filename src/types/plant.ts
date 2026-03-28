// t:/HerbalPedia/src/types/plant.ts
import { Database } from './database.types';

export type PlantRow = Database['public']['Tables']['plants']['Row'];

export interface PlantImage {
  url: string;
  alt: string;
  caption?: string;
  isPrimary?: boolean;
}

export interface AilmentUse {
  ailment_id?: string;
  ailment_name: string;
  effectiveness: 'High' | 'Moderate' | 'Traditional' | string;
  description: string;
  scientifically_proven: boolean;
}

export interface PreparationIngredient {
  item: string;
  quantity: number | string;
  unit: string;
  notes?: string;
}

export interface PreparationMethod {
  name: string;
  type: 'decoction' | 'paste' | 'powder' | 'juice' | 'infusion' | 'tea' | string;
  difficulty: 'easy' | 'medium' | 'expert';
  ingredients: PreparationIngredient[];
  steps: string[];
  dosage: string;
  duration?: string;
  precautions?: string[];
}

export interface ToxicityInfo {
  level: 'none' | 'mild' | 'moderate' | 'severe' | string;
  details?: string;
}

// Full domain model for the frontend
export interface Plant {
  id: string;
  slug: string;
  scientific_name: string;
  family: string;
  common_names: {
    english: string;
    hindi: string;
    regional: string[];
  };
  
  description: string;
  habitat: string | null;
  regions_in_india: string[] | null;
  identification_features: string[] | null;
  parts_used: string[];
  
  images: PlantImage[];
  medicinal_uses: AilmentUse[];
  preparations: PreparationMethod[];
  
  safety_rating: 'green' | 'yellow' | 'red';
  safety_rationale: string | null;
  precautions: string[] | null;
  contraindications: string[] | null;
  side_effects: string[] | null;
  toxicity: ToxicityInfo | null;
  pregnancy_safe: boolean | null;
  lactation_safe: boolean | null;
  drug_interactions: string[] | null;
  
  active_compounds: string[] | null;
  
  // Minimal set of metadata
  status?: string;
  verified_by?: string | null;
  last_verified?: string | null;
  sources?: string[] | null;
  tags?: string[] | null;
  view_count?: number;
  bookmark_count?: number;
}
