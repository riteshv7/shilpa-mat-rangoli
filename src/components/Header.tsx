import React, { useState } from 'react';
import { Phone, MessageCircle, Sparkles, FileText, Menu, X } from 'lucide-react';
import { CONTACT_INFO, buildWhatsAppLink } from '../data/products';

interface HeaderProps {
  onOpenBrochure: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBrochure }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-festive-border shadow-sm">
      {/* Festive Announcement Bar */}
      <div className="bg-gradient-to-r from-kumkum-900 via-kumkum-700 to-kumkum-900 text-amber-100 text-[11px] sm:text-xs py-1.5 px-3 text-center font-medium flex items-center justify-center gap-1.5 sm:gap-2">
        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-marigold-400 animate-spin flex-shrink-0" style={{ animationDuration: '6s' }} />
        <span className="truncate sm:overflow-visible">
          <span className="sm:hidden">🪔 <strong>Festive Mats:</strong> Reusable & Washable • Order on WhatsApp</span>
          <span className="hidden sm:inline">🪔 <strong>Festive Season Ready:</strong> Handcrafted Reusable Rangoli Mats | Custom Sizes Available | Direct WhatsApp Orders</span>
        </span>
        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-marigold-400 animate-spin flex-shrink-0 hidden sm:block" style={{ animationDuration: '6s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-kumkum-700 to-marigold-600 p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-lg sm:text-2xl">🪔</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-royal text-lg sm:text-2xl font-bold tracking-tight text-kumkum-900">
                  SHILPA
                </span>
                <span className="font-festive italic text-marigold-600 text-base sm:text-lg font-bold">
                  Mat Rangoli
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-stone-500 font-medium tracking-wide">
                Handcrafted Traditions • Mumbai
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-semibold text-stone-700">
            <a href="#collections" className="hover:text-kumkum-700 transition-colors">
              Collections
            </a>
            <a href="#spaces" className="hover:text-kumkum-700 transition-colors">
              Shop by Space
            </a>
            <a href="#why-mat" className="hover:text-kumkum-700 transition-colors">
              Why Mat Rangoli?
            </a>
            <a href="#care" className="hover:text-kumkum-700 transition-colors">
              Care Guide
            </a>
            <a href="#reviews" className="hover:text-kumkum-700 transition-colors">
              Reviews
            </a>
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenBrochure}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-marigold-300 bg-marigold-50 text-marigold-800 text-xs font-semibold hover:bg-marigold-100 transition-all shadow-sm"
              title="View Original Flyer"
            >
              <FileText className="w-3.5 h-3.5 text-marigold-600" />
              <span>Official Flyer</span>
            </button>

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-stone-500" />
              <span>{CONTACT_INFO.phone}</span>
            </a>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Order</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenBrochure}
              className="p-2 rounded-full border border-marigold-300 bg-marigold-50 text-marigold-800 text-xs"
              title="Official Flyer"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-1 gap-2 text-base font-semibold text-stone-700">
            <a
              href="#collections"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-kumkum-50 hover:text-kumkum-700"
            >
              🌸 Explore Collections
            </a>
            <a
              href="#spaces"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-kumkum-50 hover:text-kumkum-700"
            >
              🏡 Shop by Space (Stairs, Door, Mandir)
            </a>
            <a
              href="#why-mat"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-kumkum-50 hover:text-kumkum-700"
            >
              ✨ Why Choose Mat Rangoli?
            </a>
            <a
              href="#care"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-kumkum-50 hover:text-kumkum-700"
            >
              🧼 Care & Cleaning Guide
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-kumkum-50 hover:text-kumkum-700"
            >
              💬 Customer Reviews
            </a>
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Order Directly on WhatsApp</span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-stone-300 text-stone-700 font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Shilpa Narkar ({CONTACT_INFO.phone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
