import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/lib/supabase';

async function getPlants() {
  const { data: plants, error } = await supabase
    .from('plants')
    .select('*')
    .eq('status', 'published')
    .order('scientific_name', { ascending: true });
    
  if (error) {
    console.error('Error fetching plants from Supabase:', error);
    return [];
  }
  return plants;
}

export default async function PlantsPage() {
  const plants = await getPlants();

  const getSafetyBadgeColor = (rating: string) => {
    switch (rating) {
      case 'green': return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'yellow': return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'red': return 'bg-red-100 text-red-800 hover:bg-red-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Medicinal Plants Directory</h1>
          <p className="text-muted-foreground mt-2">Browse the comprehensive list of Indian medicinal plants.</p>
        </div>
        
        {/* Simple Filter placeholder */}
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <Badge variant="secondary" className="px-3 py-1 cursor-pointer">All Categories</Badge>
          <Badge variant="outline" className="px-3 py-1 cursor-pointer whitespace-nowrap">Respiratory</Badge>
          <Badge variant="outline" className="px-3 py-1 cursor-pointer whitespace-nowrap">Digestive</Badge>
          <Badge variant="outline" className="px-3 py-1 cursor-pointer whitespace-nowrap">Skin</Badge>
        </div>
      </div>

      {plants.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No plants found. Try seeding the database.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {plants.map((plant: Record<string, any>) => (
            <Link href={`/plants/${plant.slug}`} key={plant.id}>
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden flex flex-col group border-0 shadow-md">
                <div className="aspect-4/3 w-full relative overflow-hidden bg-muted">
                  {plant.images && plant.images.length > 0 ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                      src={plant.images[0].url} 
                      alt={plant.images[0].alt || plant.common_names?.english}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-green-50 text-green-200">
                      <span className="text-4xl text-green-300">🌱</span>
                    </div>
                  )}
                  <div className="absolute top-2 right-2 flex gap-1">
                    <Badge className={`uppercase text-[10px] font-bold tracking-wider ${getSafetyBadgeColor(plant.safety_rating)} border-0`}>
                      {plant.safety_rating === 'green' ? 'Safe' : plant.safety_rating === 'yellow' ? 'Caution' : 'Warning'}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl line-clamp-1 group-hover:text-green-700 transition-colors">
                    {plant.common_names?.english || plant.scientific_name}
                  </CardTitle>
                  <CardDescription className="italic text-xs line-clamp-1">
                    {plant.scientific_name}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 pb-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {plant.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1">
                    <span className="text-xs font-semibold text-gray-500 mr-1">Hindi:</span>
                    <span className="text-xs bg-gray-100 rounded px-2 py-0.5">{plant.common_names?.hindi || '-'}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
