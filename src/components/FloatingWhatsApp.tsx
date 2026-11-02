import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { CONTACT_INFO, buildWhatsAppLink } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom Right) */}
      <aside aria-label="Quick contact" className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white px-5 py-3.5 rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all transform hover:-translate-y-1 group border-2 border-white/40"
          aria-label="Order directly on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 fill-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-marigold-400 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-marigold-400 rounded-full" />
          </div>
          <div className="text-left">
            <p className="text-[10px] text-emerald-100 font-bold uppercase tracking-wider flex items-center gap-1">
              <span>Online Now</span> • <Sparkles className="w-2.5 h-2.5 text-marigold-300" />
            </p>
            <p className="text-xs font-extrabold leading-none">
              WhatsApp Shilpa Narkar
            </p>
          </div>
        </a>
      </aside>

      {/* Mobile Persistent Bottom Action Bar */}
      <aside aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 pt-2 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl flex items-center gap-2">
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex-1 py-2.5 rounded-xl border border-stone-300 bg-stone-50 active:bg-stone-200 text-stone-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-stone-600" />
          <span>Call Didi</span>
        </a>

        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] py-2.5 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-md transition-colors"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Order on WhatsApp</span>
        </a>
      </aside>
    </>
  );
};
