import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, CheckCircle2, Ruler, Sparkles, MapPin, Package, ZoomIn, Maximize2 } from 'lucide-react';
import { Product } from '../types';
import { CONTACT_INFO } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [quantity, setQuantity] = useState<number>(1);
  const [deliveryCity, setDeliveryCity] = useState<string>('');
  const [customNote, setCustomNote] = useState<string>('');
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [zoomPos, setZoomPos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // Sync active image when product changes
  useEffect(() => {
    setActiveImage(product.image);
    setIsZoomed(false);
  }, [product.id, product.image]);

  const allImages = [product.image, ...(product.additionalImages || [])];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - left) / width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - top) / height) * 100));
    setZoomPos({ x, y });
  };

  const handleOrderWhatsApp = () => {
    let msg = `Namaste Shilpa ji! 🙏\n\nI would like to order this item from *Shilpa Mat Rangoli*:\n\n`;
    msg += `• *Product:* ${product.name}\n`;
    msg += `• *Code:* ${product.code}\n`;
    msg += `• *Price:* ${product.estimatedPriceRange}\n`;
    msg += `• *Quantity / Sets:* ${quantity}\n`;
    if (deliveryCity.trim()) {
      msg += `• *Delivery City / Pincode:* ${deliveryCity.trim()}\n`;
    }
    if (customNote.trim()) {
      msg += `• *Custom Request:* ${customNote.trim()}\n`;
    }
    msg += `\nPlease let me know total price, payment details, and dispatch date. Thank you!`;

    const url = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <div 
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      >
        <div 
          className="relative bg-white rounded-t-3xl sm:rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden border border-festive-border max-h-[92vh] sm:max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Drag Indicator */}
          <div className="w-10 h-1 bg-stone-300 rounded-full mx-auto mt-2 sm:hidden flex-shrink-0" />

          {/* Modal Header & Close Button */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-stone-100 bg-stone-50/70">
            <div className="flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-bold text-stone-500 uppercase tracking-wider">
                Item Code: <strong className="text-kumkum-800">{product.code}</strong>
              </span>
              {product.badge && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                  {product.badge}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-stone-200/80 hover:bg-stone-300 flex items-center justify-center text-stone-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 flex-1">
            
            {/* Left: Gallery & Interactive Zoom Preview */}
            <div className="md:col-span-6 space-y-3 sm:space-y-4">
              
              {/* Active Big Image with Interactive 2.2x Magnifier */}
              <div 
                className="relative aspect-square rounded-2xl overflow-hidden bg-[#FAF7F2] border border-stone-200 shadow-inner group cursor-crosshair select-none"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-200"
                  style={{
                    transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                    transform: isZoomed ? 'scale(2.2)' : 'scale(1)',
                  }}
                />
                
                {/* Floating Pill: Zoom indicator */}
                <div className="absolute bottom-2.5 left-2.5 bg-black/70 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 pointer-events-none">
                  <ZoomIn className="w-3.5 h-3.5 text-marigold-400" />
                  <span>{isZoomed ? '2.2x Wool Tufting Zoom' : 'Hover / Tap to Zoom Detail'}</span>
                </div>

                {/* Fullscreen Lightbox Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullscreenImage(activeImage);
                  }}
                  className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-stone-700 shadow-md flex items-center justify-center transition-all opacity-85 hover:opacity-100"
                  title="View Full Resolution"
                  aria-label="View Full Resolution"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Thumbnail Switcher with Smart Labels */}
              {allImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar items-center">
                  {allImages.map((img, i) => {
                    const isStaged = img.includes('luxury');
                    const label = isStaged ? '🏡 Room View' : i === 0 ? '✨ Product' : `🔍 Close-Up`;
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          setActiveImage(img);
                          setIsZoomed(false);
                        }}
                        className={`relative rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                          activeImage === img ? 'border-kumkum-700 ring-2 ring-kumkum-400 scale-102' : 'border-stone-200 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <div className="w-14 h-14 sm:w-16 sm:h-16">
                          <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                        </div>
                        <span className="absolute bottom-0 inset-x-0 bg-stone-900/85 text-[8px] sm:text-[9px] text-white text-center py-0.5 font-bold truncate block">
                          {label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Quick USP Highlights */}
              <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs text-stone-600 bg-amber-50/50 p-2.5 sm:p-3 rounded-xl border border-amber-100">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Washable & reusable</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Zero powder mess</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Stain-free for marble</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Safe for kids & pets</span>
                </div>
              </div>
            </div>

            {/* Right: Product Info & Customization Options */}
            <div className="md:col-span-6 space-y-4">
              
              <div className="space-y-2.5 sm:space-y-3">
                {product.marathiHindiTitle && (
                  <p className="text-xs font-bold text-kumkum-700 font-festive">
                    {product.marathiHindiTitle}
                  </p>
                )}

                <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 font-festive leading-tight">
                  {product.name}
                </h2>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Price & Stock */}
                <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] sm:text-xs text-stone-500 font-medium block">Price</span>
                    <span className="text-lg sm:text-xl font-extrabold text-stone-900">{product.estimatedPriceRange}</span>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-emerald-100 text-emerald-800">
                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> In Stock / Made to Order
                    </span>
                  </div>
                </div>

                {/* Specs */}
                <div className="space-y-1.5 sm:space-y-2 text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <Ruler className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-marigold-600 flex-shrink-0" />
                    <span><strong>Dimensions:</strong> {product.dimensions}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-marigold-600 flex-shrink-0" />
                    <span><strong>Material:</strong> {product.material}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-marigold-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Ideal Placement:</strong> {product.idealFor.join(' • ')}</span>
                  </div>
                </div>

                {/* Order Customization Fields */}
                <div className="pt-3 border-t border-stone-200 space-y-2.5 sm:space-y-3">
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    {/* Quantity Counter */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-stone-700 mb-1">
                        Quantity / Sets
                      </label>
                      <div className="flex items-center border border-stone-300 rounded-xl overflow-hidden bg-stone-50">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-2.5 sm:px-3 py-1.5 sm:py-2 text-stone-600 hover:bg-stone-200 font-bold"
                        >
                          -
                        </button>
                        <span className="flex-1 text-center font-bold text-xs sm:text-sm text-stone-800">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-2.5 sm:px-3 py-1.5 sm:py-2 text-stone-600 hover:bg-stone-200 font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Delivery Location */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-stone-700 mb-1">
                        Delivery Pincode / City
                      </label>
                      <div className="relative">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5 sm:top-3" />
                        <input
                          type="text"
                          placeholder="e.g. Mumbai 400067"
                          value={deliveryCity}
                          onChange={(e) => setDeliveryCity(e.target.value)}
                          className="w-full text-xs pl-7 sm:pl-8 pr-2.5 py-1.5 sm:py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-kumkum-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Custom Note */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-stone-700 mb-1">
                      Special Request / Custom Size (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Urgent delivery or custom colors"
                      value={customNote}
                      onChange={(e) => setCustomNote(e.target.value)}
                      className="w-full text-xs px-3 py-1.5 sm:py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-kumkum-500"
                    />
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Sticky Modal Bottom Action Bar */}
          <div className="p-3 sm:p-4 border-t border-stone-200 bg-white/95 backdrop-blur-md sticky bottom-0 z-10 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            <button
              onClick={handleOrderWhatsApp}
              className="w-full py-3 sm:py-3.5 px-5 sm:px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 active:from-emerald-700 active:to-emerald-800 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-98"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
              <span>Confirm & Order on WhatsApp</span>
            </button>

            <div className="flex items-center justify-between text-[10px] sm:text-xs text-stone-500 px-1 pt-1.5">
              <span>Direct response by Shilpa Narkar</span>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="font-bold text-stone-700 hover:text-kumkum-700 flex items-center gap-1"
              >
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Call {CONTACT_INFO.phone}
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Fullscreen High-Res Lightbox */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setFullscreenImage(null)}
        >
          <button 
            onClick={() => setFullscreenImage(null)}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center z-10 transition-colors"
            aria-label="Close Fullscreen"
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={fullscreenImage} 
            alt="Fullscreen Preview"
            className="max-w-full max-h-[92vh] object-contain rounded-2xl shadow-2xl" 
          />
        </div>
      )}
    </>
  );
};
