import React from 'react';
import { Phone, MessageCircle, MapPin, Heart, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { CONTACT_INFO, buildWhatsAppLink } from '../data/products';

interface FooterProps {
  onOpenBrochure: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrochure }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-24 sm:pb-12 border-t-4 border-marigold-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kumkum-700 to-marigold-600 p-0.5 shadow-md">
                <div className="w-full h-full rounded-full bg-stone-900 flex items-center justify-center">
                  <span className="text-2xl">🪔</span>
                </div>
              </div>
              <div>
                <span className="font-royal text-2xl font-bold tracking-tight text-amber-100">
                  SHILPA
                </span>
                <span className="font-festive italic text-marigold-400 text-xl font-bold ml-1">
                  Mat Rangoli
                </span>
                <p className="text-xs text-stone-400 font-medium">
                  {CONTACT_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Crafting sacred Indian traditions into mess-free, multi-year reusable festive decor. Hand-tufted with love and devotion by Shilpa Narkar in Mumbai.
            </p>

            {/* Marathi Motto */}
            <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700 text-marigold-300 text-xs font-festive">
              ✨ <em>"सुंदर रांगोळी, सुंदर घर, सुंदर तुम्ही"</em>
            </div>

            <div className="flex items-center gap-4 text-xs text-stone-400 pt-1">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> 100% Genuine Handcrafted
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-marigold-400" /> Pan-India Courier
              </span>
            </div>
          </div>

          {/* Quick Links (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#collections" className="hover:text-marigold-400 transition-colors">
                  Festive Collections
                </a>
              </li>
              <li>
                <a href="#spaces" className="hover:text-marigold-400 transition-colors">
                  Shop by Space (Door, Stairs, Mandir)
                </a>
              </li>
              <li>
                <a href="#why-mat" className="hover:text-marigold-400 transition-colors">
                  Why Mat vs Powder Rangoli
                </a>
              </li>
              <li>
                <a href="#care" className="hover:text-marigold-400 transition-colors">
                  Care & Cleaning Instructions
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBrochure}
                  className="hover:text-marigold-400 transition-colors text-left flex items-center gap-1"
                >
                  <span>Official Flyer / Catalog</span>
                  <Sparkles className="w-3 h-3 text-marigold-400" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct & Orders (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-200">
              Orders & Enquiries
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center text-marigold-400 flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-stone-500 block">Call Founder Directly</span>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="font-bold text-white hover:text-marigold-400">
                    {CONTACT_INFO.name} ({CONTACT_INFO.phone})
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-900/60 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-stone-500 block">WhatsApp Orders & Quotes</span>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-400 hover:underline"
                  >
                    +91 {CONTACT_INFO.phone} (Quick Reply)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center text-stone-400 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-stone-500 block">Location</span>
                  <span className="text-stone-300">{CONTACT_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Payment Modes */}
            <div className="pt-2">
              <span className="text-[11px] text-stone-500 block mb-1.5 font-medium">
                Accepted Payment Methods:
              </span>
              <div className="flex flex-wrap gap-1.5 text-[10px] font-semibold text-stone-400">
                <span className="px-2 py-0.5 rounded bg-stone-800 border border-stone-700">GPay</span>
                <span className="px-2 py-0.5 rounded bg-stone-800 border border-stone-700">PhonePe</span>
                <span className="px-2 py-0.5 rounded bg-stone-800 border border-stone-700">Paytm</span>
                <span className="px-2 py-0.5 rounded bg-stone-800 border border-stone-700">UPI</span>
                <span className="px-2 py-0.5 rounded bg-stone-800 border border-stone-700">Bank Transfer</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <p>© {new Date().getFullYear()} Shilpa Mat Rangoli. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-kumkum-500 fill-kumkum-500" /> for Indian Festivals
          </p>
        </div>

      </div>
    </footer>
  );
};
