import React from 'react';
import { Check, X, Sparkles, Clock, ShieldCheck, HeartHandshake, RotateCcw } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-mat" className="py-16 bg-white border-y border-festive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-marigold-50 text-marigold-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-marigold-600" />
            <span>THE MODERN FESTIVE REVOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-festive">
            Why Upgrade to Shilpa Mat Rangoli?
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            Preserve sacred Indian traditions without the hours of back pain, wind disasters, and chemical floor stains.
          </p>
        </div>

        {/* Mobile Comparison Cards (Stack) */}
        <div className="sm:hidden space-y-3 mb-10">
          <div className="text-center mb-3">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Quick Head-to-Head Comparison
            </span>
          </div>

          {[
            {
              feature: 'Setup Time',
              shilpa: '30 Seconds Instant',
              traditional: '1.5 to 3 Hours drawing',
            },
            {
              feature: 'Reusability',
              shilpa: 'Years (Roll & Reuse)',
              traditional: 'Single use (Swept to dustbin)',
            },
            {
              feature: 'Floor Protection',
              shilpa: '100% Stain-Free on Italian marble',
              traditional: 'Stubborn chemical stains',
            },
            {
              feature: 'Wind & Fan Proof',
              shilpa: 'Stays flat under fast ceiling fans',
              traditional: 'Ruined by drafts & guests',
            },
            {
              feature: 'Pets & Kids Safe',
              shilpa: 'Non-toxic, zero messy powder',
              traditional: 'Powder eaten or tracked',
            },
            {
              feature: 'Artistic Symmetry',
              shilpa: 'Flawless handcrafted finish',
              traditional: 'Depends on drawing skills',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-stone-50 rounded-2xl p-3 border border-festive-border shadow-sm">
              <div className="text-[11px] font-bold text-stone-800 uppercase tracking-wide mb-2 flex items-center justify-between">
                <span>{item.feature}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-kumkum-50 p-2.5 rounded-xl border border-kumkum-200">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-kumkum-800 mb-0.5">
                    <Check className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                    <span>Shilpa Mat</span>
                  </div>
                  <span className="font-bold text-stone-900 leading-tight block text-[11px]">{item.shilpa}</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-stone-400 mb-0.5">
                    <X className="w-3 h-3 text-red-500 flex-shrink-0" />
                    <span>Traditional</span>
                  </div>
                  <span className="text-stone-500 line-through leading-tight block text-[10px]">{item.traditional}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden sm:block max-w-4xl mx-auto bg-stone-50 rounded-3xl overflow-hidden border border-festive-border shadow-lg mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="p-4 sm:p-5 text-sm font-bold text-stone-800 bg-stone-100/70 w-1/3">
                    Feature
                  </th>
                  <th className="p-4 sm:p-5 text-sm font-extrabold text-white bg-gradient-to-r from-kumkum-800 to-kumkum-700 w-1/3 shadow-md">
                    ✨ Shilpa Mat Rangoli
                  </th>
                  <th className="p-4 sm:p-5 text-sm font-semibold text-stone-500 bg-stone-100/40 w-1/3">
                    Traditional Powder
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                
                <tr className="hover:bg-amber-50/30 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-stone-800">
                    Setup Time
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-kumkum-900 bg-kumkum-50/40 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>30 Seconds (Instant)</span>
                  </td>
                  <td className="p-4 sm:p-5 text-stone-500">
                    1.5 to 3 Hours of tiring drawing
                  </td>
                </tr>

                <tr className="hover:bg-amber-50/30 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-stone-800">
                    Reusability
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-kumkum-900 bg-kumkum-50/40 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Years (Roll & reuse every festival)</span>
                  </td>
                  <td className="p-4 sm:p-5 text-stone-500">
                    Single day use (Swept away into dustbin)
                  </td>
                </tr>

                <tr className="hover:bg-amber-50/30 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-stone-800">
                    Floor Safety & Stains
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-kumkum-900 bg-kumkum-50/40 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>100% Stain-Free on Italian marble & tiles</span>
                  </td>
                  <td className="p-4 sm:p-5 text-stone-500 flex items-center gap-1">
                    <X className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                    <span>Leaves stubborn chemical pigment stains</span>
                  </td>
                </tr>

                <tr className="hover:bg-amber-50/30 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-stone-800">
                    Wind, Fan & Footstep Proof
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-kumkum-900 bg-kumkum-50/40 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Stays flat; unharmed if stepped on</span>
                  </td>
                  <td className="p-4 sm:p-5 text-stone-500 flex items-center gap-1">
                    <X className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                    <span>Ruined by ceiling fans, drafts or guests</span>
                  </td>
                </tr>

                <tr className="hover:bg-amber-50/30 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-stone-800">
                    Pet & Child Friendly
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-kumkum-900 bg-kumkum-50/40 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Non-toxic, no powder eaten or tracked</span>
                  </td>
                  <td className="p-4 sm:p-5 text-stone-500 flex items-center gap-1">
                    <X className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                    <span>Pets track colored powder throughout home</span>
                  </td>
                </tr>

                <tr className="hover:bg-amber-50/30 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-stone-800">
                    Artistic Precision
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-kumkum-900 bg-kumkum-50/40 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Flawless handcrafted symmetry every time</span>
                  </td>
                  <td className="p-4 sm:p-5 text-stone-500">
                    Depends on personal drawing skill
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* 4 Feature Cards (2x2 on mobile, 4-col on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          
          <div className="p-4 sm:p-6 rounded-2xl bg-[#FCF9F2] border border-festive-border shadow-sm">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-marigold-100 flex items-center justify-center text-marigold-700 mb-3 sm:mb-4">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-bold text-stone-900 font-festive text-sm sm:text-base mb-1">
              Instant 30s Setup
            </h3>
            <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed">
              Simply unroll and place with brass lamps. Ready before guests arrive!
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-[#FCF9F2] border border-festive-border shadow-sm">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-3 sm:mb-4">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-bold text-stone-900 font-festive text-sm sm:text-base mb-1">
              Zero Chemical Stains
            </h3>
            <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed">
              100% safe for imported Italian marble, granite, wood, and tiles.
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-[#FCF9F2] border border-festive-border shadow-sm">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-3 sm:mb-4">
              <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-bold text-stone-900 font-festive text-sm sm:text-base mb-1">
              Washable & Reusable
            </h3>
            <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed">
              High density colorfast tufting. Spot clean with damp cloth and roll.
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-[#FCF9F2] border border-festive-border shadow-sm">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-kumkum-100 flex items-center justify-center text-kumkum-700 mb-3 sm:mb-4">
              <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-bold text-stone-900 font-festive text-sm sm:text-base mb-1">
              Handmade with Love
            </h3>
            <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed">
              Every single piece is personally handcrafted by Shilpa Narkar in Mumbai.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
