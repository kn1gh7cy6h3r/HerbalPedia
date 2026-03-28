import React from 'react';
import { AilmentUse } from '@/types/plant';
import { Activity, ShieldCheck, Beaker } from 'lucide-react';

interface MedicinalUsesProps {
  uses: AilmentUse[];
}

export default function MedicinalUses({ uses }: MedicinalUsesProps) {
  if (!uses || uses.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 ml-2">
        <div className="p-2 bg-rose-50 text-rose-600 rounded-xl dark:bg-rose-950/30 dark:text-rose-400">
          <Activity className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Medicinal Uses</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {uses.map((use, idx) => (
          <div 
            key={idx} 
            className="group bg-white dark:bg-neutral-900 rounded-2xl p-5 shadow-sm border border-neutral-100 dark:border-neutral-800 hover:shadow-md hover:border-rose-200 dark:hover:border-rose-900/50 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
          >
            {/* Subtle background decoration */}
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-rose-50 dark:bg-rose-950/20 rounded-full blur-2xl group-hover:bg-rose-100 dark:group-hover:bg-rose-900/30 transition-colors" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 leading-tight pr-4">
                  {use.ailment_name}
                </h3>
                {use.scientifically_proven ? (
                  <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] uppercase tracking-wider font-bold rounded-md flex-shrink-0" title="Scientifically Proven">
                    <Beaker className="w-3 h-3" />
                    <span>Proven</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 px-2 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-[10px] uppercase tracking-wider font-bold rounded-md flex-shrink-0" title="Traditional Use Only">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Traditional</span>
                  </div>
                )}
              </div>
              
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-5 flex-grow">
                {use.description}
              </p>
              
              <div className="mt-auto pt-3 border-t border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between">
                <span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Effectiveness</span>
                
                {use.effectiveness.toLowerCase() === 'high' && (
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded bg-emerald-500" />
                    <div className="w-2 h-2 rounded bg-emerald-500" />
                    <div className="w-2 h-2 rounded bg-emerald-500" />
                  </div>
                )}
                {use.effectiveness.toLowerCase() === 'moderate' && (
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded bg-emerald-500" />
                    <div className="w-2 h-2 rounded bg-emerald-500" />
                    <div className="w-2 h-2 rounded bg-neutral-200 dark:bg-neutral-800" />
                  </div>
                )}
                {use.effectiveness.toLowerCase() === 'traditional' && (
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded bg-emerald-500" />
                    <div className="w-2 h-2 rounded bg-neutral-200 dark:bg-neutral-800" />
                    <div className="w-2 h-2 rounded bg-neutral-200 dark:bg-neutral-800" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
