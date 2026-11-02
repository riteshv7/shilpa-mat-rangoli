import React from 'react';
import { Wind, Droplets, Archive, Sparkles, AlertCircle } from 'lucide-react';

export const CareGuide: React.FC = () => {
  return (
    <section id="care" className="py-16 bg-[#FAF6EE] border-b border-festive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>BUILT TO LAST FOR YEARS</span>
          </div>
          <h2 className="text-3xl font-extrabold text-stone-900 font-festive">
            Simple 3-Step Care & Storage Guide
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            Shilpa Mat Rangolis are made with premium colorfast acrylic wool designed for effortless maintenance.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Step 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-festive-border shadow-sm flex flex-col items-center text-center relative group hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-marigold-700 mb-4 group-hover:scale-110 transition-transform">
              <Wind className="w-7 h-7" />
            </div>
            <div className="absolute top-5 right-5 text-3xl font-black text-stone-200">
              01
            </div>
            <h3 className="font-bold text-stone-900 font-festive text-lg mb-2">
              Dust & Shake
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              After celebrations, simply pick up the mat and gently shake it outdoors to remove surface dust. A handheld vacuum on low power works wonderfully too.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-festive-border shadow-sm flex flex-col items-center text-center relative group hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 mb-4 group-hover:scale-110 transition-transform">
              <Droplets className="w-7 h-7" />
            </div>
            <div className="absolute top-5 right-5 text-3xl font-black text-stone-200">
              02
            </div>
            <h3 className="font-bold text-stone-900 font-festive text-lg mb-2">
              Spot Clean Spills
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              If tea, oil, or prasad spills on it, simply dab with a damp microfiber cloth and mild liquid soap. Do not scrub harshly. Air dry in shade.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-festive-border shadow-sm flex flex-col items-center text-center relative group hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4 group-hover:scale-110 transition-transform">
              <Archive className="w-7 h-7" />
            </div>
            <div className="absolute top-5 right-5 text-3xl font-black text-stone-200">
              03
            </div>
            <h3 className="font-bold text-stone-900 font-festive text-lg mb-2">
              Roll & Store
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Store flat or roll loosely with the tufted side facing outward. Place in the provided bag or a dry box away from direct dampness until your next festival!
            </p>
          </div>

        </div>

        {/* Pro Tip Alert */}
        <div className="max-w-3xl mx-auto mt-8 p-4 bg-amber-100/60 rounded-2xl border border-amber-300/80 flex items-center gap-3 text-amber-900 text-xs sm:text-sm font-medium">
          <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0" />
          <span>
            <strong>Diya Safety Pro-Tip:</strong> While our mats are heat-durable, we recommend using a small brass plate or coaster underneath open flame oil diyas, or pairing with LED tea-lights for maximum safety and cleanliness!
          </span>
        </div>

      </div>
    </section>
  );
};
