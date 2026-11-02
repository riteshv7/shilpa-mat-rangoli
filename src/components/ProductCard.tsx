import React from 'react';
import { MessageCircle, Eye, Ruler, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { buildWhatsAppLink } from '../data/products';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const [imgLoaded, setImgLoaded] = React.useState(false);

  const getBadgeStyle = (badge?: string) => {
    switch (badge) {
      case 'Bestseller':
        return 'bg-gradient-to-r from-amber-500 to-marigold-600 text-white shadow-sm';
      case 'Diwali Special':
        return 'bg-gradient-to-r from-kumkum-700 to-red-600 text-white shadow-sm';
      case 'Combo Set':
        return 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm';
      case 'New Design':
        return 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm';
      default:
        return 'bg-stone-800 text-white';
    }
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-festive-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
      
      {/* Product Image Area */}
      <div className="relative aspect-square overflow-hidden bg-[#FAF7F2] cursor-pointer" onClick={() => onQuickView(product)}>
        {/* Loading shimmer placeholder */}
        {!imgLoaded && (
          <div className="absolute inset-0 bg-stone-100 animate-pulse flex items-center justify-center">
            <span className="text-xl opacity-40">🌸</span>
          </div>
        )}

        <img
          src={product.image}
          alt={product.name}
          decoding="async"
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Floating Badge */}
        {product.badge && (
          <div className={`absolute top-2 left-2 sm:top-3 sm:left-3 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-bold tracking-wide ${getBadgeStyle(product.badge)}`}>
            {product.badge}
          </div>
        )}

        {/* Category tag */}
        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-white/90 backdrop-blur-sm px-1.5 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold text-stone-700 shadow-sm max-w-[80%] truncate">
          {product.categoryName}
        </div>

        {/* Multi-photo pill if additional images exist */}
        {product.additionalImages && product.additionalImages.length > 0 && (
          <div className="absolute top-2 right-10 sm:top-3 sm:right-13 bg-stone-900/70 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
            <span>+{product.additionalImages.length} Views</span>
          </div>
        )}

        {/* Quick View Floating Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-stone-700 hover:text-kumkum-700 hover:bg-white shadow-md transition-all opacity-90 group-hover:opacity-100"
          title="Quick View"
          aria-label="Quick View"
        >
          <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>

      {/* Product Content Details */}
      <div className="p-2.5 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
        
        <div>
          {/* Marathi / Hindi subtitle */}
          {product.marathiHindiTitle && (
            <p className="text-[10px] sm:text-[11px] font-bold text-kumkum-700 font-festive truncate">
              {product.marathiHindiTitle}
            </p>
          )}

          {/* Product Name */}
          <h3 
            className="text-xs sm:text-base font-bold text-stone-900 group-hover:text-kumkum-800 transition-colors line-clamp-2 min-h-[2rem] sm:min-h-0 cursor-pointer font-festive mt-0.5 leading-snug"
            onClick={() => onQuickView(product)}
          >
            {product.name}
          </h3>

          {/* Short tagline */}
          <p className="hidden sm:block text-xs text-stone-500 mt-1 line-clamp-2">
            {product.tagline}
          </p>
        </div>

        {/* Specs Pill (Dimensions & Material) */}
        <div className="pt-1.5 sm:pt-2 border-t border-stone-100 space-y-1 text-[11px] sm:text-xs text-stone-600">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <Ruler className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-stone-400 flex-shrink-0" />
            <span className="font-semibold text-stone-800 truncate">{product.dimensions}</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-marigold-500 flex-shrink-0" />
            <span className="text-[11px] text-stone-500 line-clamp-1">{product.material}</span>
          </div>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-2 sm:pt-3 border-t border-stone-100 flex items-center justify-between gap-1.5">
          <div className="min-w-0">
            <span className="text-[9px] sm:text-[10px] text-stone-400 uppercase tracking-wider block font-semibold">
              Price
            </span>
            <span className="text-xs sm:text-base font-extrabold text-stone-900 block truncate">
              {product.estimatedPriceRange}
            </span>
          </div>

          <a
            href={buildWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-emerald-600 active:bg-emerald-700 hover:bg-emerald-700 text-white font-bold text-[11px] sm:text-xs shadow-sm hover:shadow-md transition-all flex-shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Order</span>
          </a>
        </div>

      </div>

    </div>
  );
};
