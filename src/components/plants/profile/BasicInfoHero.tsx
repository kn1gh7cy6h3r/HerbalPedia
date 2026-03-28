import React from 'react';
import { Plant } from '@/types/plant';
import { MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface BasicInfoHeroProps {
  plant: Plant;
}

export default function BasicInfoHero({ plant }: BasicInfoHeroProps) {
  const primaryImage = plant.images?.find(img => img.isPrimary) || plant.images?.[0];

  return (
    <div className="relative w-full h-[60vh] min-h-[500px] flex items-end pb-32 overflow-hidden bg-neutral-900 rounded-b-[40px] shadow-2xl">
      
      {/* Dynamic Background Blurs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-700/30 blur-[120px] rounded-full pointer-events-none" />

      {/* Floating Isolated Plant Image */}
      {primaryImage && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-80 mix-blend-screen pointer-events-none pt-12">
           <img 
            src={primaryImage.url} 
            alt={primaryImage.alt || 'Plant Image'}
            className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(52,211,153,0.3)] scale-110 md:scale-100 origin-bottom"
          />
        </div>
      )}
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-900/40 to-transparent" />

      {/* Top Nav */}
      <div className="absolute top-0 inset-x-0 p-6 z-20 flex justify-between items-center">
        <Link href="/plants" className="inline-flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors text-white shadow-sm border border-white/10">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase shadow-xl">
          {plant.family}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row gap-6 justify-between items-end">
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-4 py-1.5 bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
              Medicinal Plant
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-md">
            {plant.common_names.english}
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-neutral-200">
            <span className="text-xl md:text-3xl font-serif italic text-emerald-300 drop-shadow-sm">
              {plant.scientific_name}
            </span>
            <div className="hidden sm:block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            <span className="text-xl md:text-2xl font-bold text-emerald-50 drop-shadow-sm">
              {plant.common_names.hindi}
            </span>
          </div>
        </div>

        <div className="bg-neutral-950/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl w-full md:w-auto min-w-[300px] shadow-2xl">
          <h3 className="text-white/60 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" /> Regional Names
          </h3>
          <div className="flex flex-wrap gap-2">
            {plant.common_names.regional.map((name, idx) => (
              <span key={idx} className="bg-white/10 text-white/95 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm border border-white/5">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
