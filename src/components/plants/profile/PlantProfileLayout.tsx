import React from 'react';
import { Plant } from '@/types/plant';
import { Info } from 'lucide-react';
import BasicInfoHero from './BasicInfoHero';
import DescriptionHabitat from './DescriptionHabitat';
import MedicinalUses from './MedicinalUses';
import PreparationMethods from './PreparationMethods';
import SafetyInfoPanel from './SafetyInfoPanel';
import ActiveCompounds from './ActiveCompounds';

interface PlantProfileLayoutProps {
  plant: Plant;
}

export default function PlantProfileLayout({ plant }: PlantProfileLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 pb-20">
      {/* Hero Section */}
      <BasicInfoHero plant={plant} />

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Description, Identification */}
          <div className="lg:col-span-8 space-y-8">
            <DescriptionHabitat plant={plant} />
            <MedicinalUses uses={plant.medicinal_uses} />
            <PreparationMethods preparations={plant.preparations} />
          </div>

          {/* Right Column: Safety, Compounds, Sidebar Info */}
          <div className="lg:col-span-4 space-y-8">
            <SafetyInfoPanel plant={plant} />
            {plant.active_compounds && (
              <ActiveCompounds compounds={plant.active_compounds} />
            )}
            
            {/* Quick Facts Card */}
            <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-sm border border-neutral-200/50 dark:border-neutral-800/50">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-emerald-600" />
                Quick Facts
              </h3>
              <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                <li className="flex justify-between border-b border-neutral-100 dark:border-neutral-800 pb-2">
                  <span>Family</span>
                  <span className="font-medium text-neutral-900 dark:text-neutral-200">{plant.family}</span>
                </li>
                <li className="flex justify-between border-b border-neutral-100 dark:border-neutral-800 pb-2">
                  <span>Status</span>
                  <span className="font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-full text-xs">Verified</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Views</span>
                  <span className="font-medium text-neutral-900 dark:text-neutral-200">{plant.view_count || 142}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
