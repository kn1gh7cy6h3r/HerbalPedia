import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { mockPlants as genericPlants } from '@/lib/data/mockPlants';
import { mockPlants as richPlants } from '@/lib/seed/plantData';
import { richPatches } from '@/lib/data/richPatches';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    
    // Rudimentary protection
    if (secret !== 'seed123') {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }
    
    // 1. Merge the 3 ultra-rich plants into the 50 generic plants
    // We match roughly by scientific name since slugs might be slightly different
    const mergedPlants = genericPlants.map(gp => {
      // @ts-expect-error - gp type bypass
      const richMatch = richPlants.find(rp => rp.scientific_name === gp.scientificName);
      if (richMatch) return richMatch;
      return gp;
    });

    // 2. Read local images we just generated
    const imageDir = path.join(process.cwd(), 'public', 'images', 'plants');
    let localImages: string[] = [];
    if (fs.existsSync(imageDir)) {
      localImages = fs.readdirSync(imageDir);
    }

    // Map mock plants to snake_case for Supabase
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dbPlants: any[] = mergedPlants.map((plant: any) => {
      // 1.5 Try to seamlessly graft our highly detailed new medical patches!
      let p = { ...plant };
      if (p.slug && richPatches[p.slug]) {
        p = { ...p, ...richPatches[p.slug] };
      }
      // 3. Robust Fuzzy match for the local image
      const matchTargets = [
        plant.slug?.toLowerCase() || '',
        plant.scientific_name?.toLowerCase() || '',
        plant.scientificName?.toLowerCase() || '',
        plant.common_names?.english?.toLowerCase() || '',
        plant.commonNames?.english?.toLowerCase() || '',
        plant.common_names?.hindi?.toLowerCase() || '',
        plant.commonNames?.hindi?.toLowerCase() || ''
      ].filter(Boolean);

      let matchedImage: string | undefined = undefined;

      for (const img of localImages) {
        const imgName = img.split('.')[0].replace(/[^a-z]/g, '');
        for (const target of matchTargets) {
          const t = target.replace(/[^a-z]/g, '');
          if (t.length > 3 && (imgName.includes(t) || t.includes(imgName))) {
            matchedImage = img;
            break;
          }
        }
        if (matchedImage) break;
      }
      
      // Hardcode fallbacks for tough typos
      if (!matchedImage) {
        if (plant.slug?.includes('aloe')) matchedImage = 'aelo-evra.jpg';
        if (plant.slug?.includes('ginger')) matchedImage = 'gingeer.jpg';
        if (plant.slug?.includes('moringa')) matchedImage = 'drumstick-moringa.jpg';
        if (plant.slug?.includes('holy-basil') || plant.slug === 'tulsi-holy-basil') matchedImage = 'tulsi-holy-basil.jpg';
        if (plant.slug?.includes('neem')) matchedImage = 'neem.jpg';
      }
      
      const imagesArr = plant.images ? [...plant.images] : [];
      if (matchedImage) {
        if (imagesArr.length > 0) {
          imagesArr[0].url = `/images/plants/${matchedImage}`;
        } else {
          imagesArr.push({ url: `/images/plants/${matchedImage}`, alt: plant.commonNames?.english || 'Plant image', isPrimary: true });
        }
      }

      return {
      scientific_name: plant.scientific_name || plant.scientificName,
      common_names: plant.common_names || plant.commonNames,
      family: plant.family,
      slug: plant.slug,
      description: plant.description,
      habitat: plant.habitat,
      identification_features: plant.identification_features || plant.identificationFeatures,
      parts_used: plant.parts_used || plant.partsUsed,
      images: imagesArr,
      medicinal_uses: plant.medicinal_uses || plant.medicinalUses,
      preparations: plant.preparations,
      safety_rating: plant.safety_rating || plant.safetyRating,
      safety_rationale: plant.safety_rationale || plant.safetyRationale || null,
      precautions: plant.precautions || null,
      contraindications: plant.contraindications || null,
      side_effects: plant.side_effects || plant.sideEffects || null,
      toxicity: plant.toxicity || null,
      pregnancy_safe: plant.pregnancy_safe !== undefined ? plant.pregnancy_safe : (plant.pregnancySafe !== undefined ? plant.pregnancySafe : null),
      lactation_safe: plant.lactation_safe !== undefined ? plant.lactation_safe : (plant.lactationSafe !== undefined ? plant.lactationSafe : null),
      substitutes: plant.substitutes || null,
      active_compounds: plant.active_compounds || plant.activeCompounds || null,
      scientific_references: plant.scientific_references || plant.scientificReferences || null,
      cultivation: plant.cultivation || null,
      status: plant.status || 'published',
      regions_in_india: plant.regions_in_india || plant.regionsInIndia || null,
      drug_interactions: plant.drug_interactions || plant.drugInteractions || null
    };
  });

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
    const { data, error } = await supabaseAdmin
      .from('plants')
      // @ts-expect-error - Supabase types restricting insert arrays
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
