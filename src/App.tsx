import React, { useState, useMemo } from 'react';
import { PRODUCTS } from './data/products';
import { Product, SpaceCategory } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SpaceFilter } from './components/SpaceFilter';
import { ProductGrid } from './components/ProductGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CustomOrderBanner } from './components/CustomOrderBanner';
import { CareGuide } from './components/CareGuide';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductModal } from './components/ProductModal';
import { BrochureModal } from './components/BrochureModal';

export const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SpaceCategory>('all');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [brochureOpen, setBrochureOpen] = useState<boolean>(false);

  // Compute product counts per space category
  const productCounts = useMemo(() => {
    const counts: Record<SpaceCategory, number> = {
      'all': PRODUCTS.length,
      'entrance': 0,
      'staircase': 0,
      'mandir-chowki': 0,
      'living-center': 0,
      'corridor-runner': 0
    };

    PRODUCTS.forEach((p) => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });

    return counts;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F2] text-stone-800">
      {/* Header */}
      <Header onOpenBrochure={() => setBrochureOpen(true)} />

      {/* Hero Section */}
      <Hero />

      {/* Shop by Space Category Filter */}
      <SpaceFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        productCounts={productCounts}
      />

      {/* Product Catalog Showcase */}
      <ProductGrid
        products={PRODUCTS}
        selectedCategory={selectedCategory}
        onQuickView={(p) => setActiveProduct(p)}
      />

      {/* Why Choose Shilpa Mat Rangoli (Comparison Table & USPs) */}
      <WhyChooseUs />

      {/* Custom Size & Bulk Gifting Banner */}
      <CustomOrderBanner />

      {/* Care, Cleaning & Storage Guide */}
      <CareGuide />

      {/* Customer Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer onOpenBrochure={() => setBrochureOpen(true)} />

      {/* Floating Sticky WhatsApp Actions */}
      <FloatingWhatsApp />

      {/* Product Lightbox & Order Modal */}
      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />

      {/* Official Brochure / Flyer Lightbox */}
      <BrochureModal
        isOpen={brochureOpen}
        onClose={() => setBrochureOpen(false)}
      />
    </div>
  );
};

export default App;
