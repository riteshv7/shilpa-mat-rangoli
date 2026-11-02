import React, { useState } from 'react';
import { Search, Sparkles, MessageCircle } from 'lucide-react';
import { Product, SpaceCategory } from '../types';
import { ProductCard } from './ProductCard';
import { buildWhatsAppLink } from '../data/products';

interface ProductGridProps {
  products: Product[];
  selectedCategory: SpaceCategory;
  onQuickView: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  selectedCategory,
  onQuickView,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products by category and search query
  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.marathiHindiTitle && p.marathiHindiTitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.idealFor.some((space) => space.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="collections" className="py-8 sm:py-12 bg-[#FCF9F2] relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header with Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-kumkum-700 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HANDCRAFTED FESTIVE SHOWCASE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-festive">
              Festive Rangoli Mat Collection
            </h2>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search Peacock, Swastik, Stairs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-9 pr-4 py-2.5 rounded-full border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-kumkum-500 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-stone-400 hover:text-stone-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-4 sm:mb-6 flex items-center justify-between text-[11px] sm:text-xs text-stone-500">
          <span>
            Showing <strong>{filteredProducts.length}</strong> handcrafted designs
          </span>
          {selectedCategory !== 'all' && (
            <span className="text-kumkum-800 font-medium truncate max-w-[50%] text-right">
              Filtered: <strong>{selectedCategory.replace('-', ' ')}</strong>
            </span>
          )}
        </div>

        {/* Products Grid: 2 columns on mobile, up to 4 on desktop */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 shadow-sm">
            <span className="text-4xl block mb-3">🔍</span>
            <h3 className="text-lg font-bold text-stone-800 font-festive">
              No matching rangoli designs found
            </h3>
            <p className="text-xs text-stone-500 max-w-md mx-auto mt-1 mb-6">
              We create custom designs! Send us a photo or describe what you have in mind and Shilpa Didi will craft it for you.
            </p>
            <a
              href={buildWhatsAppLink(undefined, `Namaste Shilpa ji! I was searching for "${searchQuery}" on your website. Do you make custom rangoli mats for this?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ask Shilpa on WhatsApp</span>
            </a>
          </div>
        )}

      </div>
    </section>
  );
};
