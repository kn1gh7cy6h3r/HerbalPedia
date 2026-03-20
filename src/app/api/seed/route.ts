import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { mockPlants } from '@/lib/data/mockPlants';

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    
    // Rudimentary protection
    if (secret !== 'seed123') {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }
    
    // Map mock plants to snake_case for Supabase
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dbPlants: any[] = mockPlants.map((plant: any) => ({
      scientific_name: plant.scientificName,
      common_names: plant.commonNames,
      family: plant.family,
      slug: plant.slug,
      description: plant.description,
      habitat: plant.habitat,
      identification_features: plant.identificationFeatures,
      parts_used: plant.partsUsed,
      images: plant.images,
      medicinal_uses: plant.medicinalUses,
      preparations: plant.preparations,
      safety_rating: plant.safetyRating,
      safety_rationale: plant.safetyRationale || null,
      precautions: plant.precautions || null,
      contraindications: null,
      side_effects: null,
      toxicity: null,
      pregnancy_safe: null,
      lactation_safe: null,
      substitutes: null,
      active_compounds: null,
      scientific_references: null,
      cultivation: null,
      status: plant.status || 'draft',
    }));

    const supabaseAdmin = process.env.SUPABASE_SERVICE_ROLE_KEY 
      ? createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.SUPABASE_SERVICE_ROLE_KEY
        )
      : supabase;

    // Optional: Clear existing plants (Be careful with this on a real database)
    // Tautology filter to delete all rows
    console.log("Clearing existing plants...");
    await supabaseAdmin.from('plants').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    
    console.log("Preparing to insert data. First item:", JSON.stringify(dbPlants[0], null, 2));

    // Insert mock plants into Supabase using admin client to bypass RLS
    // @ts-expect-error - Supabase type inference for JSONB arrays is causing issue
    const { data, error } = await supabaseAdmin
      .from('plants')
      .insert(dbPlants)
      .select();
      
    if (error) {
      console.error("Supabase insert error:", error);
      throw error;
    }
    
    return NextResponse.json({ success: true, count: data?.length || 0, message: 'Supabase Database seeded successfully' });
  } catch (error: any) {
    console.error("API Seed Catch Error:", error);
    return NextResponse.json({ success: false, error: error?.message || 'Unknown error' }, { status: 400 });
  }
}
