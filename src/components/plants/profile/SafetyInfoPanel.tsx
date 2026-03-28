import React from 'react';
import { Plant } from '@/types/plant';
import { ShieldAlert, AlertTriangle, Thermometer, Baby, ShieldX, FlaskConical } from 'lucide-react';

interface SafetyInfoPanelProps {
  plant: Plant;
}

export default function SafetyInfoPanel({ plant }: SafetyInfoPanelProps) {
  const isGreen = plant.safety_rating === 'green';
  const isYellow = plant.safety_rating === 'yellow';
  const isRed = plant.safety_rating === 'red';

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-xl flex items-center justify-center ${
          isGreen ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400' :
          isYellow ? 'bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400' :
          'bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400'
        }`}>
          <ShieldAlert className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Safety Profile</h2>
      </div>

      {/* Traffic Light Rating Card */}
      <div className={`rounded-3xl p-6 border ${
        isGreen ? 'bg-emerald-50/50 border-emerald-200 dark:bg-emerald-900/10 dark:border-emerald-800' :
        isYellow ? 'bg-amber-50/50 border-amber-200 dark:bg-amber-900/10 dark:border-amber-800' :
        'bg-rose-50/50 border-rose-200 dark:bg-rose-900/10 dark:border-rose-800'
      }`}>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex gap-1.5 p-2 bg-white dark:bg-neutral-900 rounded-full shadow-sm border border-neutral-100 dark:border-neutral-800">
            <div className={`w-4 h-4 rounded-full ${isGreen ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]' : 'bg-neutral-200 dark:bg-neutral-800'}`} />
            <div className={`w-4 h-4 rounded-full ${isYellow ? 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]' : 'bg-neutral-200 dark:bg-neutral-800'}`} />
            <div className={`w-4 h-4 rounded-full ${isRed ? 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]' : 'bg-neutral-200 dark:bg-neutral-800'}`} />
          </div>
          <h3 className={`font-bold text-lg ${
            isGreen ? 'text-emerald-700 dark:text-emerald-400' :
            isYellow ? 'text-amber-700 dark:text-amber-400' :
            'text-rose-700 dark:text-rose-400'
          }`}>
            {isGreen ? 'Generally Safe' : isYellow ? 'Use with Caution' : 'High Risk / Toxic'}
          </h3>
        </div>
        {plant.safety_rationale && (
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
            {plant.safety_rationale}
          </p>
        )}
      </div>

      <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 shadow-sm border border-neutral-100 dark:border-neutral-800 space-y-6">
        
        {/* Contraindications & Precautions */}
        <div className="space-y-4">
          {plant.contraindications && plant.contraindications.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2 mb-2 uppercase tracking-wide">
                <ShieldX className="w-4 h-4" /> Strictly Avoid In
              </h4>
              <ul className="space-y-1">
                {plant.contraindications.map((item, idx) => (
                  <li key={idx} className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2">
                    <span className="text-rose-500 mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {plant.precautions && plant.precautions.length > 0 && (
            <div className="pt-2">
              <h4 className="text-sm font-bold text-amber-600 dark:text-amber-400 flex items-center gap-2 mb-2 uppercase tracking-wide">
                <AlertTriangle className="w-4 h-4" /> Precautions
              </h4>
              <ul className="space-y-1">
                {plant.precautions.map((item, idx) => (
                  <li key={idx} className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <hr className="border-neutral-100 dark:border-neutral-800" />

        {/* Drug Interactions */}
        {plant.drug_interactions && plant.drug_interactions.length > 0 && (
          <div>
            <h4 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2 mb-3 uppercase tracking-wide">
              <FlaskConical className="w-4 h-4" /> Drug Interactions
            </h4>
            <div className="space-y-3">
              {plant.drug_interactions.map((interaction, idx) => {
                const [drug, effect] = interaction.includes(':') ? interaction.split(':') : [interaction, ''];
                return (
                  <div key={idx} className="bg-indigo-50/50 dark:bg-indigo-900/10 p-3 rounded-xl border border-indigo-100 dark:border-indigo-800/30 text-sm">
                    <span className="font-semibold text-indigo-900 dark:text-indigo-200 block mb-1">{drug}</span>
                    {effect && <span className="text-indigo-700/80 dark:text-indigo-400 leading-snug">{effect.trim()}</span>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <hr className="border-neutral-100 dark:border-neutral-800" />

        {/* Pregnancy/Lactation & Toxicity */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="col-span-2 sm:col-span-1 border border-neutral-100 dark:border-neutral-800 rounded-2xl p-4 flex items-start gap-3">
            <Baby className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plant.pregnancy_safe ? 'text-emerald-500' : 'text-rose-500'}`} />
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">Pregnancy</span>
              <span className={`text-sm font-bold ${plant.pregnancy_safe ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                {plant.pregnancy_safe ? 'Safe' : 'Not Recommended'}
              </span>
            </div>
          </div>
          
          {plant.toxicity && (
            <div className="col-span-2 sm:col-span-1 border border-neutral-100 dark:border-neutral-800 rounded-2xl p-4 flex items-start gap-3">
              <Thermometer className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plant.toxicity.level === 'none' ? 'text-emerald-500' : 'text-amber-500'}`} />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">Toxicity</span>
                <span className={`text-sm font-bold capitalize ${plant.toxicity.level === 'none' ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
                  {plant.toxicity.level} Level
                </span>
                {plant.toxicity.details && (
                  <span className="block text-xs text-neutral-500 mt-1 leading-tight">{plant.toxicity.details}</span>
                )}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
