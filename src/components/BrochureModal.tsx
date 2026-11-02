import React from 'react';
import { X, Download, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, buildWhatsAppLink } from '../data/products';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-t-3xl sm:rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-festive-border max-h-[92vh] sm:max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Drag Indicator */}
        <div className="w-10 h-1 bg-stone-300 rounded-full mx-auto mt-2 sm:hidden flex-shrink-0" />

        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-stone-100 bg-stone-50/70">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-stone-900 font-festive">
              Official Product Brochure & Flyer
            </h3>
            <p className="text-[11px] sm:text-xs text-stone-500">
              Shilpa Mat Rangoli • Contact: {CONTACT_INFO.phone}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center text-stone-700 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Brochure Image Container */}
        <div className="p-3 sm:p-4 bg-stone-100 overflow-y-auto max-h-[65vh] flex justify-center">
          <img
            src={CONTACT_INFO.brochureImage}
            alt="Shilpa Mat Rangoli Official Flyer"
            className="w-full max-w-lg object-contain rounded-xl shadow-lg border border-stone-200"
          />
        </div>

        {/* Footer Actions */}
        <div className="p-3 sm:p-4 border-t border-stone-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <a
            href={CONTACT_INFO.brochureImage}
            download="Shilpa-Mat-Rangoli-Flyer.jpeg"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download Flyer</span>
          </a>

          <a
            href={buildWhatsAppLink(undefined, "Namaste Shilpa ji! 🙏 I saw your official flyer and would like to order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Order from Flyer on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
