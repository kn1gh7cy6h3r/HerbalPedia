import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { mockPlants } from '@/lib/seed/plantData';
import { Plant } from '@/types/plant';
import PlantProfileLayout from '@/components/plants/profile/PlantProfileLayout';

async function getPlant(slug: string): Promise<Plant | null> {
  // Try fetching from Supabase first
  const { data: plant, error } = await supabase
    .from('plants')
    .select('*')
    .eq('slug', slug)
    .single();
    
  if (!error && plant) {
    return plant as unknown as Plant;
  }
  
  // Fallback to our meticulously researched initial seed data
  const mockPlant = mockPlants.find(p => p.slug === slug);
  if (mockPlant) {
    return mockPlant as Plant;
  }
  
  return null;
}

export default async function PlantDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const plant = await getPlant(slug);

  if (!plant) {
    notFound();
  }

  return <PlantProfileLayout plant={plant} />;
}
