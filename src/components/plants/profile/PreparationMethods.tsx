import React from 'react';
import { PreparationMethod } from '@/types/plant';
import { Utensils, Droplet, Clock, FileText, Beaker } from 'lucide-react';

interface PreparationMethodsProps {
  preparations: PreparationMethod[];
}

export default function PreparationMethods({ preparations }: PreparationMethodsProps) {
  if (!preparations || preparations.length === 0) return null;

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'decoction': return <Beaker className="w-5 h-5" />;
      case 'juice': return <Droplet className="w-5 h-5" />;
      case 'paste': return <Utensils className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 ml-2">
        <div className="p-2 bg-amber-50 text-amber-600 rounded-xl dark:bg-amber-950/30 dark:text-amber-400">
          <Utensils className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Preparation Methods</h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {preparations.map((prep, idx) => (
          <div 
            key={idx} 
            className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-sm border border-neutral-100 dark:border-neutral-800"
          >
            {/* Header */}
            <div className="p-6 bg-amber-50/50 dark:bg-amber-900/10 border-b border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm text-amber-600 dark:text-amber-400">
                  {getTypeIcon(prep.type)}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-neutral-900 dark:text-neutral-100">
                    {prep.name}
                  </h3>
                  <div className="flex gap-2 mt-1">
                    <span className="text-xs font-semibold px-2 py-0.5 bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-full uppercase tracking-wider">
                      {prep.type}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      prep.difficulty === 'easy' ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400' :
                      prep.difficulty === 'medium' ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400' :
                      'bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-400'
                    }`}>
                      {prep.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 text-sm">
                 <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                   <Droplet className="w-4 h-4 text-emerald-500" />
                   <span className="font-medium text-neutral-900 dark:text-neutral-200">Dosage:</span> {prep.dosage}
                 </div>
                 {prep.duration && (
                   <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                     <Clock className="w-4 h-4 text-amber-500" />
                     <span className="font-medium text-neutral-900 dark:text-neutral-200">Duration:</span> {prep.duration}
                   </div>
                 )}
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ingredients */}
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-4 border-b border-dashed border-neutral-200 dark:border-neutral-700 pb-2">
                  Ingredients Needed
                </h4>
                <ul className="space-y-3">
                  {prep.ingredients.map((ing, iIdx) => (
                    <li key={iIdx} className="flex justify-between items-center text-sm">
                      <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                        {ing.item}
                        {ing.notes && <span className="block text-xs text-neutral-500 italic mt-0.5">{ing.notes}</span>}
                      </span>
                      <span className="text-neutral-500 font-mono bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded text-xs ml-4">
                        {ing.quantity} {ing.unit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Steps */}
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-4 border-b border-dashed border-neutral-200 dark:border-neutral-700 pb-2">
                  Step-by-Step Instructions
                </h4>
                <ol className="space-y-4 relative">
                  <div className="absolute top-2 bottom-2 left-2.5 w-px bg-neutral-200 dark:bg-neutral-800" />
                  {prep.steps.map((step, sIdx) => (
                    <li key={sIdx} className="flex gap-4 relative z-10">
                      <div className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs font-bold ring-4 ring-white dark:ring-neutral-900 flex-shrink-0 mt-0.5">
                        {sIdx + 1}
                      </div>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {prep.precautions && prep.precautions.length > 0 && (
              <div className="px-6 py-4 bg-rose-50/50 dark:bg-rose-900/10 border-t border-rose-100 dark:border-rose-900/30 text-sm">
                <span className="font-semibold text-rose-700 dark:text-rose-400 mr-2">Precautions:</span>
                <span className="text-rose-600 dark:text-rose-300">{prep.precautions.join(' • ')}</span>
              </div>
            )}
            
          </div>
        ))}
      </div>
    </div>
  );
}
