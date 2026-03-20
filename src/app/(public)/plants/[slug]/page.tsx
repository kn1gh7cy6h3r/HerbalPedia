
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';

async function getPlant(slug: string) {
  const { data: plant, error } = await supabase
    .from('plants')
    .select('*')
    .eq('slug', slug)
    .single();
    
  if (error || !plant) return null;
  return plant as any;
}

export default async function PlantDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const plant = await getPlant(slug);

  if (!plant) {
    notFound();
  }

  const getSafetyColor = (rating: string) => {
    if (rating === 'green') return 'bg-green-500 hover:bg-green-600';
    if (rating === 'yellow') return 'bg-yellow-500 hover:bg-yellow-600';
    return 'bg-red-500 hover:bg-red-600';
  };

  const primaryImage = plant.images?.find((img: Record<string, unknown>) => img.isPrimary) || plant.images?.[0];

  return (
    <div className="container py-8 px-4 md:px-6">
      {/* Breadcrumbs & Back */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap overflow-x-auto">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4 mx-1 shrink-0" />
          <Link href="/plants" className="hover:text-foreground">Plants</Link>
          <ChevronRight className="h-4 w-4 mx-1 shrink-0" />
          <span className="text-foreground font-medium truncate max-w-[200px]">{plant.common_names?.english || plant.scientific_name}</span>
        </div>
        <Link href="/plants" className="flex items-center text-sm font-medium text-green-700 hover:text-green-800">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Directory
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Image & Quick Info */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          <div className="rounded-xl overflow-hidden shadow-md bg-muted aspect-square relative">
            {primaryImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img 
                src={primaryImage.url} 
                alt={primaryImage.alt || 'Plant Image'}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-green-50 text-green-200">
                <span className="text-6xl text-green-300">🌱</span>
              </div>
            )}
            <div className="absolute top-4 right-4">
              <Badge className={`text-white uppercase font-bold tracking-wider px-3 py-1 ${getSafetyColor(plant.safety_rating)}`}>
                {plant.safety_rating === 'green' ? 'Generally Safe' : plant.safety_rating === 'yellow' ? 'Use with Caution' : 'Warning'}
              </Badge>
            </div>
          </div>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Quick Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Family</h4>
                <p>{plant.family}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Parts Used</h4>
                <div className="flex flex-wrap gap-2">
                  {plant.parts_used?.map((part: string) => (
                    <Badge variant="outline" key={part} className="capitalize">{part}</Badge>
                  ))}
                </div>
              </div>
              {plant.habitat && (
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Habitat</h4>
                  <p className="text-sm">{plant.habitat}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Details */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2 text-green-950">{plant.common_names?.english || plant.scientific_name}</h1>
            <p className="text-xl italic text-muted-foreground mb-4">{plant.scientific_name}</p>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
              <div className="flex items-center">
                <span className="text-sm font-semibold text-gray-500 mr-2 w-12">Hindi:</span>
                <span className="bg-gray-100 rounded-md px-3 py-1 font-medium">{plant.common_names?.hindi || '-'}</span>
              </div>
              {Array.isArray(plant.common_names?.regional) && plant.common_names.regional.length > 0 && (
                <div className="flex items-center">
                  <span className="text-sm font-semibold text-gray-500 mr-2">Other:</span>
                  <span className="text-sm">{plant.common_names.regional.join(', ')}</span>
                </div>
              )}
            </div>
            
            <div className="prose prose-green max-w-none">
              <p className="text-lg leading-relaxed text-gray-700">{plant.description}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-2">Preparations & Remedies</h2>
            {plant.preparations && Array.isArray(plant.preparations) && plant.preparations.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {plant.preparations.map((prep: any, index: number) => (
                  <Card key={index} className="bg-green-50/50 border-green-100">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-green-800">{prep.name}</CardTitle>
                        <Badge variant="secondary" className="capitalize text-xs">{prep.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="text-sm font-semibold mb-2">Instructions</h4>
                      <ol className="list-decimal pl-5 space-y-1 mb-4 text-sm text-gray-700">
                        {Array.isArray(prep.steps) ? prep.steps.map((step: string, i: number) => (
                          <li key={i}>{step}</li>
                        )) : <li>{prep.steps}</li>}
                      </ol>
                      <div className="bg-white rounded p-3 text-sm flex flex-col gap-2">
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-500">Dosage:</span>
                          <span>{prep.dosage || 'N/A'}</span>
                        </div>
                        {prep.duration && (
                          <div className="flex justify-between">
                            <span className="font-medium text-gray-500">Duration:</span>
                            <span>{prep.duration}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground italic">No specific preparations listed.</p>
            )}
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-2">Safety Information</h2>
            <Card className={
              plant.safety_rating === 'green' ? 'border-green-200 bg-green-50' : 
              plant.safety_rating === 'yellow' ? 'border-yellow-200 bg-yellow-50' : 
              'border-red-200 bg-red-50'
            }>
              <CardContent className="pt-6">
                <p className="font-medium mb-4">{plant.safety_rationale}</p>
                
                {plant.precautions && Array.isArray(plant.precautions) && plant.precautions.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-1 text-gray-700">Precautions</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                      {plant.precautions.map((pre: string, i: number) => (
                        <li key={i}>{pre}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
