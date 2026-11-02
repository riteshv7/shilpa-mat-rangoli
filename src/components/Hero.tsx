import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, HeartHandshake, RotateCcw, Clock } from 'lucide-react';
import { buildWhatsAppLink } from '../data/products';

const HERO_SLIDES = [
  {
    image: "/images/peacock-diya-luxury.jpg",
    title: "Royal Peacock Diya Rangoli",
    tag: "Festive Showstopper",
    highlight: "Handcrafted 3D tufting with vibrant peacock feathers & Diya"
  },
  {
    image: "/images/grand-welcome-entrance.jpg",
    title: "Grand Festive Welcome Mat",
    tag: "Doorway Statement",
    highlight: "Grand 39x24 inch handcrafted entrance mat with floral borders"
  },
  {
    image: "/images/staircase-luxury.jpg",
    title: "Lotus Staircase Glowing Setup",
    tag: "Staircase Special",
    highlight: "Transform steps into a royal walkway with glowing tea lights"
  },
  {
    image: "/images/mandala-living-luxury.jpg",
    title: "Grand Floral Mandala Chakra",
    tag: "Living Room Centerpiece",
    highlight: "Concentric rings of 8 auspicious festive colors"
  },
  {
    image: "/images/swastik-entrance-luxury.jpg",
    title: "Auspicious Swastik Scallop Rug",
    tag: "Entrance Threshold",
    highlight: "Sacred welcome for wealth, health & positive vibes"
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF5E8] to-[#FCF9F2] pt-4 pb-8 sm:pt-8 sm:pb-16 lg:py-20 border-b border-festive-border">
      {/* Decorative Traditional Motifs Background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-gradient-to-br from-marigold-200/40 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-gradient-to-tr from-kumkum-200/30 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Taglines */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4 sm:space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kumkum-50 border border-kumkum-200 text-kumkum-800 text-[10px] sm:text-xs font-bold tracking-wide shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-kumkum-600 animate-pulse" />
              <span>HANDMADE WITH LOVE BY SHILPA NARKAR</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[27px] sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.2]">
              Tradition in Seconds. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kumkum-700 via-marigold-600 to-kumkum-800">
                Zero Mess.
              </span>{' '}
              Forever Reusable.
            </h1>

            {/* Sub-headline */}
            <p className="text-xs sm:text-base lg:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Say goodbye to powder rangoli that blows away or stains marble floors. 
              Bring instant sacred beauty to your <strong className="text-stone-800">Doorway, Stairs & Mandir</strong> with 
              hand-tufted washable festive mats.
            </p>

            {/* Hindi cultural hook */}
            <div className="p-2.5 sm:p-3 bg-amber-50/80 rounded-xl border border-amber-200/60 max-w-xl mx-auto lg:mx-0 text-amber-900 text-xs sm:text-sm font-medium flex items-center gap-2">
              <span className="text-lg sm:text-xl flex-shrink-0">🪔</span>
              <span className="text-left">
                <strong>त्योहारों की शान, बिना झंझट!</strong> बस बिछाएं और उत्सव मनाएं।
              </span>
            </div>

            {/* Call to Actions */}
            <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4">
              <a
                href="#collections"
                className="w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-gradient-to-r from-kumkum-700 to-kumkum-800 hover:from-kumkum-600 hover:to-kumkum-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Festive Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={buildWhatsAppLink(undefined, "Namaste Shilpa ji! 🙏 I'm visiting your website and would like to see your available festive rangoli mats and pricing.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order on WhatsApp (Fast Reply)</span>
              </a>
            </div>

            {/* Key Value Badges (4 Pillars) */}
            <div className="pt-3 sm:pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 border-t border-stone-200/70 text-left">
              <div className="flex items-center gap-1.5 sm:gap-2 text-stone-700">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-marigold-600 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold">30s Instant Setup</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-stone-700">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold">Zero Floor Stains</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-stone-700">
                <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold">Reusable for Years</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-stone-700">
                <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kumkum-600 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold">100% Handcrafted</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase Card with Live Switcher */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Golden Festive Card Frame */}
              <div className="relative bg-white rounded-2xl p-2.5 sm:p-4 shadow-xl border-2 border-festive-gold/40">
                
                {/* Image Container */}
                <div className="relative aspect-[16/11] sm:aspect-[4/5] rounded-xl overflow-hidden bg-stone-100 shadow-inner group">
                  <img
                    src={HERO_SLIDES[currentSlide].image}
                    alt={HERO_SLIDES[currentSlide].title}
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-kumkum-900 shadow-md">
                    {HERO_SLIDES[currentSlide].tag}
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold text-marigold-300 uppercase tracking-wider">
                      Handcrafted Masterpiece
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold font-festive leading-tight">
                      {HERO_SLIDES[currentSlide].title}
                    </h3>
                    <p className="text-xs text-stone-200 mt-1 line-clamp-2">
                      {HERO_SLIDES[currentSlide].highlight}
                    </p>
                  </div>
                </div>

                {/* Slider Indicators */}
                <div className="flex items-center justify-between mt-3 px-1">
                  <div className="flex gap-1.5">
                    {HERO_SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all ${
                          currentSlide === idx ? 'w-6 bg-kumkum-700' : 'w-2 bg-stone-300 hover:bg-stone-400'
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <a
                    href="#collections"
                    className="text-xs font-bold text-kumkum-800 hover:text-kumkum-900 inline-flex items-center gap-1"
                  >
                    <span>View all designs</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

              </div>

              {/* Floating Real Customer Review Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-festive-border max-w-[240px] hidden sm:block">
                <div className="flex items-center gap-1 text-marigold-500 mb-1">
                  {"★".repeat(5)}
                </div>
                <p className="text-xs text-stone-700 font-medium leading-snug">
                  "Saved me 2 hours on Diwali morning. My stairs looked magical!"
                </p>
                <p className="text-[10px] text-stone-500 font-semibold mt-1">
                  — Pooja D., Kandivali Mumbai
                </p>
              </div>

              {/* Floating Diya Badge */}
              <div className="absolute -top-4 -right-3 bg-gradient-to-r from-amber-500 to-marigold-500 text-white rounded-full px-3 py-1 text-xs font-bold shadow-lg flex items-center gap-1.5 diya-glow">
                <span>🪔</span>
                <span>Diwali Ready</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
