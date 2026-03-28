import React from 'react';
import { Plant } from '@/types/plant';
import { Leaf, MapPin, Eye } from 'lucide-react';

interface DescriptionHabitatProps {
  plant: Plant;
}

export default function DescriptionHabitat({ plant }: DescriptionHabitatProps) {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-neutral-100 dark:border-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Physical Description & Plant Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 pb-2 border-b border-neutral-100 dark:border-neutral-800">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl dark:bg-emerald-950/30 dark:text-emerald-400">
              <Leaf className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Plant Information & Description</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-3 text-sm mt-4 mb-5 bg-emerald-50/50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100/50 dark:border-emerald-800/30">
            <div><span className="font-semibold text-emerald-800 dark:text-emerald-400">Botanical Name:</span> <span className="italic text-emerald-900 dark:text-emerald-300">{plant.scientific_name}</span></div>
            <div><span className="font-semibold text-emerald-800 dark:text-emerald-400">Family:</span> <span className="text-emerald-900 dark:text-emerald-300">{plant.family || 'Unknown'}</span></div>
            {plant.common_names?.hindi && <div><span className="font-semibold text-emerald-800 dark:text-emerald-400">Hindi Name:</span> <span className="text-emerald-900 dark:text-emerald-300">{plant.common_names.hindi}</span></div>}
            {plant.safety_rating && <div><span className="font-semibold text-emerald-800 dark:text-emerald-400">Safety Profile:</span> <span className="capitalize text-emerald-900 dark:text-emerald-300">{plant.safety_rating}</span></div>}
          </div>

          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {plant.description}
          </p>

          {plant.identification_features && plant.identification_features.length > 0 && (
            <div className="mt-4 pt-4">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-300 mb-3 flex items-center gap-2">
                <Eye className="w-4 h-4 text-emerald-500" /> How to Identify
              </h3>
              <ul className="grid grid-cols-1 gap-2">
                {plant.identification_features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800/50 p-3 rounded-xl">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Habitat & Distribution */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 pb-2 border-b border-neutral-100 dark:border-neutral-800">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl dark:bg-blue-950/30 dark:text-blue-400">
              <MapPin className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Habitat & Distribution</h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {plant.habitat || 'Found in various regions across the Indian subcontinent.'}
          </p>
          
          {plant.regions_in_india && plant.regions_in_india.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-300 mb-3">Regions in India</h3>
              <div className="flex flex-wrap gap-2">
                {plant.regions_in_india.map((region, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-blue-50/50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50 rounded-lg text-sm transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
