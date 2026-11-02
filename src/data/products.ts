import { Product, SpaceCategory, Review } from '../types';

export const CONTACT_INFO = {
  name: "Shilpa Narkar",
  brandName: "Shilpa Mat Rangoli",
  phone: "9167143237",
  whatsappNumber: "919167143237",
  tagline: "Tradition in Seconds. Zero Mess. Forever Reusable.",
  location: "Mumbai, Maharashtra (Delivering Across India)",
  brochureImage: "/images/shilpa-mat-rangoli-brochure.jpeg"
};

export const CATEGORIES: { id: SpaceCategory; label: string; icon: string; description: string }[] = [
  { id: 'all', label: 'All Designs', icon: 'Sparkles', description: 'Explore our complete handcrafted collection' },
  { id: 'entrance', label: 'Entrance & Threshold', icon: 'DoorClosed', description: 'Welcome guests and prosperity with auspicious doormats and torans' },
  { id: 'staircase', label: 'Staircase Steps', icon: 'Footprints', description: 'Line steps and railings with fan lotus motifs and glowing tea-lights' },
  { id: 'mandir-chowki', label: 'Mandir & Chowki', icon: 'Flame', description: 'Auspicious pooja seat covers, Swastik runners, and altar accents' },
  { id: 'living-center', label: 'Living Room Mandalas', icon: 'Flower2', description: 'Grand circular chakras and showstopper centerpieces' },
  { id: 'corridor-runner', label: 'Corridors & Runners', icon: 'Compass', description: 'Long floral vine creepers and hallway accent borders' }
];

export const PRODUCTS: Product[] = [
  {
    id: "smr-mor-01",
    code: "SMR-MOR-01",
    name: "Royal Peacock Diya Rangoli Mat",
    marathiHindiTitle: "शाही मोर दिया रंगोली मॅट",
    category: "living-center",
    categoryName: "Living Room Mandalas",
    image: "/images/peacock-diya-luxury.jpg",
    additionalImages: ["/images/rangoli-35.jpeg"],
    dimensions: "24 x 24 inches",
    material: "Hand-tufted soft acrylic wool on non-slip backing",
    tagline: "The Ultimate Festive Showstopper",
    description: "An artisan centerpiece portraying the sacred peacock with feathered eyelets and an auspicious Diya motif. Vibrant royal blue, marigold yellow, and crimson pink tufting.",
    idealFor: ["Living room centerpiece", "Main entrance foyer", "Diwali pooja setup", "Housewarming function"],
    features: [
      "Showstopper Peacock & Diya artisan artwork",
      "Thick plush tufted texture that lies flat",
      "Stain-resistant & vacuum/spot washable",
      "Ready to place in 10 seconds"
    ],
    badge: "Bestseller",
    estimatedPriceRange: "₹1,500",
    inStock: true
  },
  {
    id: "smr-mor-02",
    code: "SMR-MOR-02",
    name: "Peacock on Lotus Flower Mat",
    marathiHindiTitle: "कमल-विराजित मोर रंगोली",
    category: "living-center",
    categoryName: "Living Room Mandalas",
    image: "/images/rangoli-36.jpeg",
    dimensions: "20 x 20 inches",
    material: "Hand-tufted plush yarn on flexible anti-slip base",
    tagline: "Graceful Royal Peacock with Pink Lotus Petals",
    description: "Features a majestic blue peacock resting gracefully atop blooming lotus petals with intricate green tail feathers and golden rings.",
    idealFor: ["Center table decor", "Pooja hall center", "Festive welcoming", "Wedding gifts"],
    features: [
      "Layered petal design with 3D feel",
      "Rich colorfast yarn that never bleeds",
      "Rollable and lightweight for easy storage"
    ],
    badge: "New Design",
    estimatedPriceRange: "₹1,200",
    inStock: true
  },
  {
    id: "smr-stair-01",
    code: "SMR-STR-01",
    name: "Lotus Fan Staircase Step Decor (Set of 5 / 10)",
    marathiHindiTitle: "पायऱ्यांसाठी कमळ पंखा सेट (5 / 10 चा संच)",
    category: "staircase",
    categoryName: "Staircase Steps",
    image: "/images/staircase-luxury.jpg",
    additionalImages: ["/images/rangoli-40.jpeg", "/images/rangoli-12.jpeg", "/images/rangoli-03.jpeg"],
    dimensions: "12 x 10 inches per piece",
    material: "Fluffy tufted yarn with emerald green scroll base",
    tagline: "Turn Boring Staircases into a Festive Royal Walkway",
    description: "Designed specifically to sit elegantly on each step of your staircase or along corridor edges. Pair with battery tea-lights or brass diyas for breathtaking night-time ambiance.",
    idealFor: ["Duplex / bungalow stairs", "Apartment steps", "Corridor borders", "Pooja room sides"],
    features: [
      "Modular placement: use individually on stairs or combine on floors",
      "Flats tightly against steps without curling",
      "Leaves space for walking safely without slipping"
    ],
    badge: "Diwali Special",
    estimatedPriceRange: "₹250 per piece",
    inStock: true
  },
  {
    id: "smr-swastik-rug-01",
    code: "SMR-SWA-01",
    name: "Auspicious Swastik Scallop Entrance Rug",
    marathiHindiTitle: "शुभ स्वस्तिक मुख्यद्वार रग",
    category: "entrance",
    categoryName: "Entrance & Threshold",
    image: "/images/swastik-entrance-luxury.jpg",
    additionalImages: ["/images/rangoli-30.jpeg"],
    dimensions: "22 x 14 inches",
    material: "Heavy-duty woolen pile with wave-scalloped border",
    tagline: "Auspicious Welcome for Wealth and Prosperity",
    description: "A traditional rectangular door threshold mat displaying a sacred red Swastik emblem on ivory, framed by festive yellow and emerald green scalloped borders.",
    idealFor: ["Main door entrance", "Threshold welcoming", "Pooja room threshold"],
    features: [
      "Deep auspicious maroon/red Swastik symbol",
      "Scalloped wave borders create a grand doorstep",
      "Durable against indoor footfall"
    ],
    badge: "Bestseller",
    estimatedPriceRange: "₹850",
    inStock: true
  },
  {
    id: "smr-chowki-01",
    code: "SMR-CWK-01",
    name: "Royal Pooja Chowki 4-Piece Grand Set",
    marathiHindiTitle: "संपूर्ण पूजा चौकी ४-पीस सेट",
    category: "mandir-chowki",
    categoryName: "Mandir & Chowki",
    image: "/images/rangoli-28.jpeg",
    additionalImages: [],
    dimensions: "Chowki: 18x18 in | Runner: 18x8 in | Lotus: 10x10 in",
    material: "Tufted yarn with hanging floral fringe & golden beads",
    tagline: "Everything You Need for a Divine Mandir & Chowki",
    description: "A complete 4-piece ritual setup in auspicious pink & white: 1 square Swastik mat with draped hanging fringe, 1 matching threshold runner, and 2 golden-dome pink lotus flowers.",
    idealFor: ["Ganesh Sthapana", "Diwali Laxmi Pooja", "Navratri Chowki", "Satyanarayan Pooja"],
    features: [
      "Complete coordinated set for table/chowki draping",
      "Hanging fringe looks stunning on elevated tables",
      "Reusable for every festival across generations"
    ],
    badge: "Combo Set",
    estimatedPriceRange: "₹1,850",
    inStock: true
  },
  {
    id: "smr-mandala-01",
    code: "SMR-MAN-01",
    name: "Grand Multicolor Floral Mandala Chakra",
    marathiHindiTitle: "भव्य बहुगुणी रंगीबेरंगी चक्र रांगोळी",
    category: "living-center",
    categoryName: "Living Room Mandalas",
    image: "/images/mandala-living-luxury.jpg",
    additionalImages: ["/images/rangoli-02.jpeg", "/images/rangoli-07.jpeg"],
    dimensions: "24 inches diameter (24 x 24 in)",
    material: "High-density multi-color tufted yarn",
    tagline: "Vibrant Harmony of 8 Auspicious Colors",
    description: "A breathtaking circular mandala featuring nested concentric rings of yellow, red, sky blue, emerald green, and radiant pink outer petals.",
    idealFor: ["Hall center", "Doorway entrance", "Society festival gathering", "Temple hall"],
    features: [
      "Masterpiece craftsmanship taking over 12 hours of tufting",
      "Vivid festive colors that catch everyone's eyes",
      "Easy roll-up storage after celebrations"
    ],
    badge: "Bestseller",
    estimatedPriceRange: "₹1,200",
    inStock: true
  },
  {
    id: "smr-toran-01",
    code: "SMR-TRN-01",
    name: "Genda Phool & Mango Leaf Door Toran",
    marathiHindiTitle: "झेंडू फूल आणि आंबा पान तोरण (आरसा वर्क)",
    category: "entrance",
    categoryName: "Entrance & Threshold",
    image: "/images/rangoli-05-full.jpg",
    additionalImages: ["/images/rangoli-05-detail.jpg"],
    dimensions: "36 x 9 inches",
    material: "Tufted marigold flowers with mirror-work centers",
    tagline: "Traditional Toran That Never Withers or Dries",
    description: "Combines golden marigold (Genda) blooms and auspicious green mango leaves with sparkling central mirror elements. Perfect for door frames or doorstep thresholds.",
    idealFor: ["Main door hanging", "Threshold runner", "Mandir entrance", "Window valance"],
    features: [
      "Genuine mirror work embedded in center of flowers",
      "Never wilts or leaves dry leaf residue",
      "Quick loop tabs for easy hanging or floor placement"
    ],
    badge: "Diwali Special",
    estimatedPriceRange: "₹350",
    inStock: true
  },
  {
    id: "smr-suswagatam-01",
    code: "SMR-SUS-01",
    name: "Suswagatam Floral Door Threshold Runner",
    marathiHindiTitle: "सुस्वागतम शुभ उंबरा रांगोळी पट्टी",
    category: "entrance",
    categoryName: "Entrance & Threshold",
    image: "/images/rangoli-31-full.jpg",
    additionalImages: ["/images/rangoli-31-detail.jpg"],
    dimensions: "34 x 8 inches",
    material: "Durable tufted yarn with floral end caps",
    tagline: "Traditional Warmth in Golden Devanagari Script",
    description: "Bold 'सुस्वागतम' lettering woven in crisp white yarn over deep crimson red, framed by blooming golden yellow flowers and emerald foliage on both sides.",
    idealFor: ["Main apartment threshold", "Bungalow entrance", "Office entry", "Festival welcome"],
    features: [
      "Clear, elegant Devanagari calligraphy",
      "Flat low-profile edges prevent tripping",
      "Warm festive greeting for every visitor"
    ],
    badge: "Handmade",
    estimatedPriceRange: "₹650",
    inStock: true
  },
  {
    id: "smr-shubh-labh-01",
    code: "SMR-SHB-01",
    name: "Shubh Labh Swastik Wall & Floor Plaques (Pair)",
    marathiHindiTitle: "शुभ लाभ स्वस्तिक जोडी (गोल्डन लेस व मोत्यांसह)",
    category: "entrance",
    categoryName: "Entrance & Threshold",
    image: "/images/rangoli-25.jpeg",
    dimensions: "12 x 6 inches (Pair)",
    material: "Tufted marigold yarn, golden zari lace, and pearl accents",
    tagline: "Double the Blessings at Your Threshold",
    description: "A pair of auspicious plaques featuring 'शुभ' and 'लाभ' flanked by Swastik motifs, framed by golden metallic lace and pearl corner stones.",
    idealFor: ["Main door frames", "Pooja room sides", "Diwali entrance", "Office doors"],
    features: [
      "Exquisite zari lace border with pearl corner beads",
      "Can be mounted on doors or laid flat on floors",
      "Compact and lightweight for gifting"
    ],
    badge: "Handmade",
    estimatedPriceRange: "₹500 (Pair)",
    inStock: true
  },
  {
    id: "smr-kamal-01",
    code: "SMR-KML-01",
    name: "Sacred Pink Lotus (Kamal) Mat",
    marathiHindiTitle: "पवित्र गुलाबी कमळ रांगोळी मॅट",
    category: "mandir-chowki",
    categoryName: "Mandir & Chowki",
    image: "/images/rangoli-39.jpeg",
    dimensions: "20 x 15 inches",
    material: "Shimmer yarn tufted petals on felt base",
    tagline: "The Sacred Seat of Goddess Laxmi",
    description: "A blooming pink lotus flower with crimson tipped petals, radiant white center, and lush green leaves. Ideal for Laxmi Pooja and sacred rituals.",
    idealFor: ["Laxmi Pooja seat", "Pooja altar", "Ganesh idol base", "Table centerpiece"],
    features: [
      "Auspicious lotus design brings peace and prosperity",
      "Soft plush texture protects idols and chowkis",
      "Vibrant shades of pink and crimson"
    ],
    badge: "Diwali Special",
    estimatedPriceRange: "₹750",
    inStock: true
  },
  {
    id: "smr-vine-01",
    code: "SMR-VIN-01",
    name: "Swirling Floral Vine Runner (Set of 2)",
    marathiHindiTitle: "सदाबहार वेल रांगोळी (जोडी)",
    category: "corridor-runner",
    categoryName: "Corridors & Runners",
    image: "/images/rangoli-04.jpeg",
    dimensions: "36 x 9 inches (Pair)",
    material: "Tufted woolen yarn with flexible scroll spine",
    tagline: "Natural Floral Vines for Hallways and Passages",
    description: "Graceful winding vines adorned with pink and orange flower buds. Perfect for flanking narrow hallways, pooja room paths, or wedding aisles.",
    idealFor: ["Apartment corridors", "Entrance pathways", "Wedding aisles", "Door borders"],
    features: [
      "Can be placed straight or curved to match corridor bends",
      "Sold as a symmetrical pair (Left & Right)",
      "Instant transformation of long empty floors"
    ],
    badge: "Handmade",
    estimatedPriceRange: "₹700 (Pair)",
    inStock: true
  },
  {
    id: "smr-sunflower-01",
    code: "SMR-SUN-01",
    name: "Blooming Sunflower Modern Living Mat",
    marathiHindiTitle: "सूर्यफूल मॉडर्न फ्लोअर मॅट",
    category: "living-center",
    categoryName: "Living Room Mandalas",
    image: "/images/rangoli-29.jpeg",
    dimensions: "24 x 10 inches",
    material: "Plush tufted golden-yellow yarn with textured center",
    tagline: "Sunshine and Positive Energy in Any Room",
    description: "A lifelike golden sunflower with radiant yellow petals and a rich cocoa-brown tufted center. Beautiful as both traditional rangoli and year-round accent rug.",
    idealFor: ["Dressing mirror base", "Coffee table center", "Kids room", "Reading nook"],
    features: [
      "Contemporary modern aesthetic with traditional craftsmanship",
      "Extra soft high-pile yarn for bare feet",
      "Fits modern bohemian and traditional home decors"
    ],
    badge: "New Design",
    estimatedPriceRange: "₹600",
    inStock: true
  },
  {
    id: "smr-half-mandala-01",
    code: "SMR-HLF-01",
    name: "Semicircular Half Mandala Threshold Mat",
    marathiHindiTitle: "अर्ध-चक्र उंबरा मॅट",
    category: "entrance",
    categoryName: "Entrance & Threshold",
    image: "/images/rangoli-27.jpeg",
    dimensions: "24 x 12 inches",
    material: "Dense tufted yarn with flat flush edge",
    tagline: "Fits Flush Against Any Wall or Doorstep",
    description: "Half-circle design created specifically to place flush against door frames, pooja walls, or hallway edges without awkward gaps.",
    idealFor: ["Apartment thresholds", "Pooja room altar walls", "Main gate steps"],
    features: [
      "Flush flat back sits neatly against walls",
      "Multi-tier floral fan arch",
      "Zero tripping hazard"
    ],
    badge: "Handmade",
    estimatedPriceRange: "₹600",
    inStock: true
  },
  {
    id: "smr-geometric-01",
    code: "SMR-GEO-01",
    name: "8-Pointed Geometric Star Mandala (15x14)",
    marathiHindiTitle: "८-कोनी अष्टकोन स्टार रांगोळी",
    category: "living-center",
    categoryName: "Living Room Mandalas",
    image: "/images/rangoli-32.jpeg",
    dimensions: "15 x 14 inches",
    material: "Two-tone marigold & green tufted yarn",
    tagline: "Sacred Geometry in Compact Festive Size",
    description: "A beautifully proportioned 15x14 inch geometric star mandala featuring interlocking points in golden yellow, orange, and emerald green. Ideal for center tables, pooja rooms, and compact spaces.",
    idealFor: ["Center table decor", "Pooja room center", "Festival welcoming", "Apartment living room"],
    features: [
      "Compact 15 x 14 inch size fits any table or floor",
      "Crisp geometric symmetry hand-tufted to perfection",
      "Vivid marigold and emerald colorfast wool",
      "Reusable and washable for years"
    ],
    badge: "Handmade",
    estimatedPriceRange: "₹550",
    inStock: true
  },
  {
    id: "smr-geometric-02",
    code: "SMR-GEO-02",
    name: "Grand 8-Pointed Geometric Star Mandala (24x24)",
    marathiHindiTitle: "भव्य ८-कोनी अष्टकोन स्टार चक्र",
    category: "living-center",
    categoryName: "Living Room Mandalas",
    image: "/images/rangoli-20-studio.jpg",
    additionalImages: ["/images/rangoli-20.jpeg"],
    dimensions: "24 x 24 inches",
    material: "Plush multi-tier tufted yarn on anti-slip backing",
    tagline: "Grand 24-Inch Festive Centerpiece with Golden Star Points",
    description: "A grand 24x24 inch statement star mandala featuring elaborate interlocking geometric points in radiant golden yellow, orange, and emerald green. A majestic centerpiece for festive celebrations and living rooms.",
    idealFor: ["Living room centerpiece", "Main hall entrance", "Diwali pooja setup", "Housewarming function"],
    features: [
      "Grand 24 x 24 inch showstopper dimensions",
      "High-density plush tufting that lies completely flat",
      "Rich traditional color palette that never fades",
      "100% reusable, washable, and mess-free"
    ],
    badge: "Bestseller",
    estimatedPriceRange: "₹1,050",
    inStock: true
  },
  {
    id: "smr-welcome-01",
    code: "SMR-WEL-01",
    name: "Welcome Lotus Floral Door Runner",
    marathiHindiTitle: "वेलकम फ्लोअर मॅट",
    category: "entrance",
    categoryName: "Entrance & Threshold",
    image: "/images/rangoli-21.jpeg",
    dimensions: "30 x 12 inches",
    material: "Tufted yarn with dual lotus flower end ornaments",
    tagline: "A Warm, Colorful Welcome for Every Guest",
    description: "Features 'WELCOME' in bright white lettering over royal maroon, bordered by haldi-yellow and emerald green, topped with twin pink lotus petals.",
    idealFor: ["Doorstep", "Office reception", "Festival entry"],
    features: [
      "Eye-catching welcoming aesthetic",
      "Durable non-slip backing",
      "Washable and easy to maintain"
    ],
    badge: "Handmade",
    estimatedPriceRange: "₹600",
    inStock: true
  },
  {
    id: "smr-welcome-grand-01",
    code: "SMR-WEL-02",
    name: "Grand Festive Welcome Entrance Mat",
    marathiHindiTitle: "भव्य वेलकम मुख्यद्वार मॅट",
    category: "entrance",
    categoryName: "Entrance & Threshold",
    image: "/images/grand-welcome-entrance.jpg",
    additionalImages: ["/images/grand-welcome-entrance-angle.jpg"],
    dimensions: "39 x 24 inches",
    material: "Heavy-duty tufted acrylic yarn with scalloped borders",
    tagline: "Grand Auspicious Doorstep Welcome with Intricate Floral Borders",
    description: "A statement 39x24 inch entrance door threshold mat featuring bold 'WELCOME' lettering, temple crest triangles, twin blooming red flowers, and traditional auspicious scallop apron border.",
    idealFor: ["Main apartment entrance", "Bungalow threshold", "Office & showroom entry", "Festive welcoming"],
    features: [
      "Large 39 x 24 inch size covering full standard doorway width",
      "Rich hand-tufted plush pile that catches dust and feels luxurious",
      "Traditional festive color palette of auspicious yellow, red, green, and blue",
      "100% reusable, washable, and anti-slip"
    ],
    badge: "New Design",
    estimatedPriceRange: "₹1,500",
    inStock: true
  },
  {
    id: "smr-swastik-circle-01",
    code: "SMR-SWC-01",
    name: "Circular Auspicious Swastik Mats (Pair)",
    marathiHindiTitle: "गोलाकार स्वस्तिक जोडी (२ चा संच)",
    category: "mandir-chowki",
    categoryName: "Mandir & Chowki",
    image: "/images/rangoli-01-full.jpg",
    additionalImages: ["/images/rangoli-01.jpeg"],
    dimensions: "8 x 8 inches (Pair)",
    material: "Deep red and sunny yellow tufted yarn",
    tagline: "Sacred Swastik Symbols for Daily Auspicious Energy",
    description: "Compact circular mats with bold red Swastik motifs on yellow base. Ideal for placing kalash, diyas, or placing on both sides of the main door.",
    idealFor: ["Diya placement", "Pooja kalash base", "Doorframe flanking", "Gifting"],
    features: [
      "Compact size fits anywhere",
      "Protects floors from hot oil / diya marks",
      "Set of 2 identical auspicious pieces"
    ],
    badge: "Handmade",
    estimatedPriceRange: "₹350 (Pair)",
    inStock: true
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Pooja Deshmukh",
    location: "Kandivali, Mumbai",
    occasion: "Diwali Laxmi Pooja",
    rating: 5,
    comment: "Ordered the Royal Peacock Diya mat and Staircase set last Diwali. My guests couldn't stop asking if it was real flowers or powder! Set up the whole staircase in literally 2 minutes. Best investment ever!",
    productName: "Royal Peacock Diya Rangoli Mat"
  },
  {
    id: "rev-2",
    author: "Sneha Kulkarni",
    location: "Thane West",
    occasion: "Ganesh Chaturthi",
    rating: 5,
    comment: "Shilpa didi's finishing is unbelievable! Normally our dog runs over the powder rangoli and ruins it in seconds. With this mat, zero mess, zero color on his paws. Just rolled it and stored it safely for next year.",
    productName: "Lotus Fan Staircase Step Decor"
  },
  {
    id: "rev-3",
    author: "Ananya Iyer",
    location: "Bengaluru",
    occasion: "Housewarming (Griha Pravesh)",
    rating: 5,
    comment: "Ordered via WhatsApp and Shilpa ji was so sweet and responsive. Shipped to Bangalore within 3 days. The Suswagatam runner at our new flat entrance looked royal! 100% recommended.",
    productName: "Suswagatam Floral Door Threshold Runner"
  },
  {
    id: "rev-4",
    author: "Meera Patel",
    location: "Ahmedabad",
    occasion: "Navratri Special",
    rating: 5,
    comment: "The Pooja Chowki set is so divine! The hanging fringe gives that traditional temple look. No need to buy fresh marigolds every day of Navratri anymore.",
    productName: "Royal Pooja Chowki 4-Piece Grand Set"
  }
];

export function buildWhatsAppLink(product?: Product, customMessage?: string): string {
  let message = "";
  if (customMessage) {
    message = customMessage;
  } else if (product) {
    message = `Namaste Shilpa ji! 🙏\n\nI would like to order from *Shilpa Mat Rangoli*:\n• *Product:* ${product.name}\n• *Code:* ${product.code}\n• *Price:* ${product.estimatedPriceRange}\n\nPlease share availability, final price with shipping, and payment details.\n\nThank you!`;
  } else {
    message = `Namaste Shilpa ji! 🙏\n\nI am interested in your *Shilpa Mat Rangoli* collection. Could you please share your latest catalog and prices?\n\nThank you!`;
  }
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
