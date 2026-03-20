import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    
    let query = supabase
      .from('plants')
      .select('*')
      .order('created_at', { ascending: false });

    // Note: Advanced JSONB searching in Supabase via JS client is more limited than MongoDB, 
    // but basic text matching on the scientific_name and common_names can be done via raw postgres text search
    // Using a simple fallback search for now
    if (search) {
      query = query.or(`scientific_name.ilike.%${search}%,slug.ilike.%${search}%`);
    }
    
    const { data: plants, error } = await query;

    if (error) throw error;

    return NextResponse.json({ success: true, data: plants });
  } catch (error: unknown) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Map JS camelCase to Postgres snake_case
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dbPayload: any = {
      scientific_name: body.scientificName,
      common_names: body.commonNames,
      family: body.family,
      slug: body.slug,
      description: body.description,
      habitat: body.habitat,
      identification_features: body.identificationFeatures,
      parts_used: body.partsUsed,
      images: body.images,
      medicinal_uses: body.medicinalUses,
      preparations: body.preparations,
      safety_rating: body.safetyRating,
      safety_rationale: body.safetyRationale,
      precautions: body.precautions,
      contraindications: body.contraindications,
      side_effects: body.sideEffects,
      toxicity: body.toxicity,
      pregnancy_safe: body.pregnancySafe,
      lactation_safe: body.lactationSafe,
      substitutes: body.substitutes,
      active_compounds: body.activeCompounds,
      scientific_references: body.scientificReferences,
      cultivation: body.cultivation,
      status: body.status || 'draft',
      verified_by: body.verifiedBy,
      last_verified: body.lastVerified,
      sources: body.sources,
      tags: body.tags
    };

    const { data: plant, error } = await supabase
      .from('plants')
      .insert(dbPayload)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, data: plant }, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}
