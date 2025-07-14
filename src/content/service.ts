// data/services.ts

export interface ServiceData {
  title: string;
  description: string;
  content: string;
  image?: string;
  features?: string[];
  metaDescription?: string;
  relatedServices?: string[];
  heroBackground?: string;
  brandLogos?: {
    name: string;
    logo: string;
  }[];
}

export type ServicesData = Record<string, ServiceData>;

export const services: ServicesData = {
  "outdoor-led-billboard": {
    title: "Outdoor LED Billboard",
    description: "High-brightness, weather-resistant outdoor LED billboards for impactful advertising all day long.",
    content: `
      Outdoor LED Billboards
      
      Our outdoor LED billboards are engineered for superior brightness and durability, ensuring your message is visible even under direct sunlight and harsh weather.
      
      Features:
      - Brightness up to 10,000 nits for clear visibility
      - IP65-rated weatherproof design
      - Energy-efficient LED modules
      - Easy front and rear maintenance
      
      Applications:
      Ideal for highway advertising, shopping malls, stadiums, and urban centers.
    `,
    image: "/service/outdoor-billboard-main.jpg",
    features: [
      "Ultra high brightness for outdoor visibility",
      "Weatherproof and dust-resistant design",
      "Energy-saving LED technology",
      "Modular panels for easy installation",
    ],
    metaDescription: "Get vibrant and durable outdoor LED billboards suitable for all weather conditions with high brightness for clear outdoor advertising.",
    relatedServices: ["rental-led-display", "fine-pitch-led"],
    heroBackground: "/service/outdoor-led-billboard-main.jpg",
    brandLogos: [
      { name: "Novastar", logo: "/logos/novastar.png" },
      { name: "Linsn", logo: "/logos/linsn.png" },
    ],
  },

  "rental-led-display": {
    title: "Rental LED Display",
    description: "Portable, easy-to-install LED rental displays perfect for events, exhibitions, and temporary installations.",
    content: `
      Rental LED Displays
      
      Our rental LED displays offer high resolution and brightness with quick setup and teardown, making them ideal for concerts, conferences, and trade shows.
      
      Features:
      - Lightweight modular panels
      - Fast installation and dismantling
      - High refresh rate and low latency
      - Indoor and outdoor options
      
      Applications:
      Perfect for live events, exhibitions, and promotional campaigns.
    `,
    image: "/service/rental-display-main.jpg",
    features: [
      "Quick and easy installation",
      "Durable and portable design",
      "Vibrant image quality",
      "Flexible screen sizes and shapes",
    ],
    metaDescription: "Flexible LED rental displays for temporary events with quick setup and vibrant visuals.",
    relatedServices: ["outdoor-led-billboard", "led-mesh-screen"],
  },

  "fine-pitch-led": {
    title: "Fine Pitch LED Displays",
    description: "High-definition fine pitch LED displays offering exceptional clarity for close viewing environments.",
    content: `
      Fine Pitch LED Displays
      
      Our fine pitch LED displays provide razor-sharp image clarity, perfect for retail stores, control rooms, studios, and conference rooms.
      
      Features:
      - Pixel pitch starting at 0.9mm
      - High color accuracy and contrast
      - Seamless and bezel-less design
      - High refresh rates for flicker-free video
      
      Applications:
      Ideal for close-range viewing and detailed content display.
    `,
    image: "/service/fine-pitch-hero.webp",
    features: [
      "Ultra fine pixel pitch for sharp images",
      "Accurate color rendering",
      "Seamless multi-panel assembly",
      "Flicker-free video display",
    ],
    metaDescription: "Fine pitch LED displays with ultra-high resolution for close-range viewing and detailed visuals.",
    relatedServices: ["outdoor-led-billboard", "transparent-led-film"],
  },

  "led-mesh-screen": {
    title: "LED Mesh Screen",
    description: "Lightweight, transparent LED mesh screens for creative architectural and stage displays.",
    content: `
      LED Mesh Screens
      
      Our LED mesh screens combine transparency with brilliant LED visuals, perfect for building facades, concerts, and creative stage design.
      
      Features:
      - Up to 80% transparency
      - Lightweight and easy to install
      - Excellent ventilation and airflow
      - Flexible configurations and sizes
      
      Applications:
      Ideal for outdoor architecture, stage backdrops, and retail windows.
    `,
    image: "/service/mesh-screen-hero.jpg",
    features: [
      "High transparency for see-through effects",
      "Lightweight construction",
      "Excellent airflow prevents overheating",
      "Flexible design for various installation needs",
    ],
    metaDescription: "Innovative LED mesh screens offering transparency and high-impact visuals for architectural and stage use.",
    relatedServices: ["rental-led-display", "flexible-led-screen"],
  },

  "transparent-led-film": {
    title: "Transparent LED Film",
    description: "Ultra-thin, transparent LED film that can be applied on glass surfaces for dynamic advertising without blocking natural light.",
    content: `
      Transparent LED Film
      
      Our transparent LED films deliver eye-catching visuals while maintaining transparency and natural lighting, perfect for storefronts, offices, and museums.
      
      Features:
      - Maintains up to 85% natural light transmission
      - Thin and flexible for easy installation
      - Weatherproof for indoor and outdoor use
      - Vibrant, high-resolution display
      
      Applications:
      Perfect for retail glass facades, corporate offices, and exhibitions.
    `,
    image: "/service/transparent-film-hero.png",
    features: [
      "High light transmission preserving glass transparency",
      "Thin, flexible film for easy mounting",
      "Weather-resistant coating",
      "Sharp and bright visuals",
    ],
    metaDescription: "Transparent LED film for glass surfaces that combines advertising with natural light.",
    relatedServices: ["fine-pitch-led", "led-mesh-screen"],
  },

  "flexible-led-screen": {
    title: "Flexible LED Screen",
    description: "Curvable and bendable LED screens for creative installations on curved surfaces and unique shapes.",
    content: `
      Flexible LED Screens
      
      Our flexible LED displays adapt to curved and irregular surfaces, enabling innovative designs and immersive viewer experiences.
      
      Features:
      - Supports concave and convex curves
      - Lightweight and ultra-thin panels
      - Seamless image quality even on bends
      - Robust and durable design
      
      Applications:
      Ideal for creative advertising, exhibitions, and stage design.
    `,
    image: "/service/flexible-screen-hero.jpg",
    features: [
      "Bendable for concave and convex curves",
      "Lightweight and thin construction",
      "High resolution with seamless panels",
      "Durable for long-term use",
    ],
    metaDescription: "Flexible LED screens designed for curved and creative display applications.",
    relatedServices: ["led-mesh-screen", "rental-led-display"],
  },
};

export function getServiceBySlug(slug: string[]): ServiceData | null {
    const path = slug.join('/');
    return services[path] || null;
}
  
// Helper function to get all service slugs (useful for static generation)
export function getAllServiceSlugs(): string[][] {
    return Object.keys(services).map(slug => slug.split('/'));
}