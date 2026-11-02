import React from 'react';
import { MessageCircle, Gift, Sparkles, Building2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/products';

export const CustomOrderBanner: React.FC = () => {
  const customWhatsAppUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Namaste Shilpa ji! 🙏\n\nI am looking for a custom size / bulk order for Shilpa Mat Rangoli (e.g. society building decor / wedding return gifts / special dimensions).\n\nPlease let me know how we can proceed with a custom quote."
  )}`;

  return (
    <section className="py-10 sm:py-14 bg-gradient-to-r from-kumkum-900 via-kumkum-800 to-kumkum-950 text-white relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-marigold-500/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-12 border border-white/15 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          
          <div className="space-y-3 sm:space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-marigold-500/20 text-marigold-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-marigold-400" />
              <span>CUSTOM SIZES & BULK GIFTING</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-festive text-amber-50 leading-tight">
              Need a Custom Size or Wedding Return Gifts?
            </h2>

            <p className="text-xs sm:text-base text-stone-200 leading-relaxed font-normal">
              Have a specific stair dimension, grand society building lobby, or looking for memorable handcrafted return gifts for Haldi, Mehendi, or Diwali corporate hampers? We customize colors, dimensions, and motifs!
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-[11px] sm:text-xs text-amber-200/90 pt-1">
              <span className="flex items-center gap-1.5">
                <Gift className="w-4 h-4 text-marigold-400" /> Wedding & Housewarming Gifts
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-marigold-400" /> Society & Temple Dimensions
              </span>
            </div>
          </div>

          {/* Action Button */}
          <div className="w-full sm:w-auto flex-shrink-0">
            <a
              href={customWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-marigold-500 to-amber-500 active:from-marigold-600 active:to-amber-600 text-stone-950 font-extrabold text-xs sm:text-base shadow-xl hover:shadow-2xl transition-all"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-stone-950" />
              <span>Request Custom Quote on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
