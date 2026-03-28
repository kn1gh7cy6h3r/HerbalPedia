import React from 'react';
import { Hexagon } from 'lucide-react';

interface ActiveCompoundsProps {
  compounds: string[];
}

export default function ActiveCompounds({ compounds }: ActiveCompoundsProps) {
  if (!compounds || compounds.length === 0) return null;

  return (
    <div className="bg-slate-50 dark:bg-slate-900/40 rounded-3xl p-6 border border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-indigo-100 text-indigo-600 rounded-xl dark:bg-indigo-900/40 dark:text-indigo-400">
          <Hexagon className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Active Compounds</h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {compounds.map((compound, idx) => (
          <div key={idx} className="flex items-center gap-2 bg-white dark:bg-slate-950 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <Hexagon className="w-3.5 h-3.5 leading-none text-indigo-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {compound}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
