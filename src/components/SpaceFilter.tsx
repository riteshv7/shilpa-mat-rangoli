import React from 'react';
import { Sparkles, DoorClosed, Footprints, Flame, Flower2, Compass } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { SpaceCategory } from '../types';

interface SpaceFilterProps {
  selectedCategory: SpaceCategory;
  onSelectCategory: (category: SpaceCategory) => void;
  productCounts: Record<SpaceCategory, number>;
}

export const SpaceFilter: React.FC<SpaceFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  productCounts
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'DoorClosed':
        return <DoorClosed className="w-5 h-5" />;
      case 'Footprints':
        return <Footprints className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'Flower2':
        return <Flower2 className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="spaces" className="py-6 sm:py-8 bg-white border-b border-festive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-marigold-600 mb-1.5">
            <span>🌸</span>
            <span>FIND YOUR PERFECT MATCH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-festive">
            Shop by Space & Occasion
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1.5">
            Every home layout is unique. Select your space to see tailor-made rangoli mats designed for that exact spot.
          </p>
        </div>

        {/* Categories: Horizontal Swipe on Mobile, Grid on Desktop */}
        <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = productCounts[cat.id] || 0;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex-shrink-0 min-w-[125px] sm:min-w-0 p-3 sm:p-3.5 rounded-2xl flex flex-col items-center text-center transition-all duration-300 group border ${
                  isSelected
                    ? 'bg-gradient-to-b from-kumkum-50 to-amber-50/60 border-kumkum-600 shadow-md ring-2 ring-kumkum-600/20'
                    : 'bg-stone-50/70 hover:bg-stone-100/80 border-stone-200 text-stone-700'
                }`}
              >
                {/* Category Icon */}
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-2 transition-colors ${
                    isSelected
                      ? 'bg-kumkum-700 text-white shadow-sm'
                      : 'bg-white text-stone-600 border border-stone-200 group-hover:text-kumkum-700 group-hover:border-kumkum-300'
                  }`}
                >
                  {getIcon(cat.icon)}
                </div>

                {/* Category Label */}
                <span
                  className={`text-xs font-bold leading-tight ${
                    isSelected ? 'text-kumkum-900' : 'text-stone-800'
                  }`}
                >
                  {cat.label}
                </span>

                {/* Count Pill */}
                <span
                  className={`text-[10px] font-semibold mt-1 px-2 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-kumkum-200/60 text-kumkum-900'
                      : 'bg-stone-200/70 text-stone-500'
                  }`}
                >
                  {count} {count === 1 ? 'Design' : 'Designs'}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
