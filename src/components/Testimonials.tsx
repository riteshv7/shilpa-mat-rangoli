import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data/products';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 bg-white border-b border-festive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
            <span>❤️</span>
            <span>CUSTOMER STORIES</span>
          </div>
          <h2 className="text-3xl font-extrabold text-stone-900 font-festive">
            Loved by Festive Homes Across India
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            Real feedback from homemakers who celebrated Diwali, Ganesh Utsav, and family occasions with Shilpa Mat Rangoli.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FCF9F2] rounded-3xl p-6 border border-festive-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-marigold-500 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-marigold-500" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-4">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Occasion */}
              <div className="pt-3 border-t border-stone-200/80">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-sm text-stone-900">{rev.author}</span>
                  <span title="Verified Customer" className="inline-flex">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </span>
                </div>
                <div className="text-[11px] text-stone-500 font-medium">
                  {rev.location}
                </div>
                <div className="mt-1 inline-block text-[10px] font-bold text-kumkum-800 bg-kumkum-50 px-2 py-0.5 rounded-full">
                  {rev.occasion}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
