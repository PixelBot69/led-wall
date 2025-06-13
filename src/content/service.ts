// data/services.ts

export interface ServiceData {
  title: string;
  description: string;
  content: string; // HTML string with detailed content
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
    description:
      "High-brightness, weather-resistant outdoor LED billboards for impactful advertising all day long.",
    content: `
      <div class="service-content">
        <h2>Outdoor LED Billboards</h2>
        <p>Our outdoor LED billboards are engineered for superior brightness and durability, ensuring your message is visible even under direct sunlight and harsh weather.</p>
        <h3>Features</h3>
        <ul>
          <li>Brightness up to 10,000 nits for clear visibility</li>
          <li>IP65-rated weatherproof design</li>
          <li>Energy-efficient LED modules</li>
          <li>Easy front and rear maintenance</li>
        </ul>
        <h3>Applications</h3>
        <p>Ideal for highway advertising, shopping malls, stadiums, and urban centers.</p>
      </div>
    `,
    image: "/service/outdoor-billboard-main.jpg",
    features: [
      "Ultra high brightness for outdoor visibility",
      "Weatherproof and dust-resistant design",
      "Energy-saving LED technology",
      "Modular panels for easy installation",
    ],
    metaDescription:
      "Get vibrant and durable outdoor LED billboards suitable for all weather conditions with high brightness for clear outdoor advertising.",
    relatedServices: ["rental-led-display", "fine-pitch-led"],
    heroBackground: "/service/outdoor-led-billboard-main.jpg",
    brandLogos: [
      { name: "Brand A", logo: "/logos/brand-a.png" },
      { name: "Brand B", logo: "/logos/brand-b.png" },
    ],
  },

  "rental-led-display": {
    title: "Rental LED Display",
    description:
      "Portable, easy-to-install LED rental displays perfect for events, exhibitions, and temporary installations.",
    content: `
      <div class="service-content">
        <h2>Rental LED Displays</h2>
        <p>Our rental LED displays offer high resolution and brightness with quick setup and teardown, making them ideal for concerts, conferences, and trade shows.</p>
        <h3>Features</h3>
        <ul>
          <li>Lightweight modular panels</li>
          <li>Fast installation and dismantling</li>
          <li>High refresh rate and low latency</li>
          <li>Indoor and outdoor options</li>
        </ul>
        <h3>Applications</h3>
        <p>Perfect for live events, exhibitions, and promotional campaigns.</p>
      </div>
    `,
    image: "/service/rental-display-main.jpg",
    features: [
      "Quick and easy installation",
      "Durable and portable design",
      "Vibrant image quality",
      "Flexible screen sizes and shapes",
    ],
    metaDescription:
      "Flexible LED rental displays for temporary events with quick setup and vibrant visuals.",
    relatedServices: ["outdoor-led-billboard", "led-mesh-screen"],
  },

  "fine-pitch-led": {
    title: "Fine Pitch LED Displays",
    description:
      "High-definition fine pitch LED displays offering exceptional clarity for close viewing environments.",
    content: `
      <div class="service-content">
        <h2>Fine Pitch LED Displays</h2>
        <p>Our fine pitch LED displays provide razor-sharp image clarity, perfect for retail stores, control rooms, studios, and conference rooms.</p>
        <h3>Features</h3>
        <ul>
          <li>Pixel pitch starting at 0.9mm</li>
          <li>High color accuracy and contrast</li>
          <li>Seamless and bezel-less design</li>
          <li>High refresh rates for flicker-free video</li>
        </ul>
        <h3>Applications</h3>
        <p>Ideal for close-range viewing and detailed content display.</p>
      </div>
    `,
    image: "/service/fine-pitch-hero.webp",
    features: [
      "Ultra fine pixel pitch for sharp images",
      "Accurate color rendering",
      "Seamless multi-panel assembly",
      "Flicker-free video display",
    ],
    metaDescription:
      "Fine pitch LED displays with ultra-high resolution for close-range viewing and detailed visuals.",
    relatedServices: ["outdoor-led-billboard", "transparent-led-film"],
  },

  "led-mesh-screen": {
    title: "LED Mesh Screen",
    description:
      "Lightweight, transparent LED mesh screens for creative architectural and stage displays.",
    content: `
      <div class="service-content">
        <h2>LED Mesh Screens</h2>
        <p>Our LED mesh screens combine transparency with brilliant LED visuals, perfect for building facades, concerts, and creative stage design.</p>
        <h3>Features</h3>
        <ul>
          <li>Up to 80% transparency</li>
          <li>Lightweight and easy to install</li>
          <li>Excellent ventilation and airflow</li>
          <li>Flexible configurations and sizes</li>
        </ul>
        <h3>Applications</h3>
        <p>Ideal for outdoor architecture, stage backdrops, and retail windows.</p>
      </div>
    `,
    image: "/service/mesh-screen-hero.jpg",
    features: [
      "High transparency for see-through effects",
      "Lightweight construction",
      "Excellent airflow prevents overheating",
      "Flexible design for various installation needs",
    ],
    metaDescription:
      "Innovative LED mesh screens offering transparency and high-impact visuals for architectural and stage use.",
    relatedServices: ["rental-led-display", "flexible-led-screen"],
  },

  "transparent-led-film": {
    title: "Transparent LED Film",
    description:
      "Ultra-thin, transparent LED film that can be applied on glass surfaces for dynamic advertising without blocking natural light.",
    content: `
      <div class="service-content">
        <h2>Transparent LED Film</h2>
        <p>Our transparent LED films deliver eye-catching visuals while maintaining transparency and natural lighting, perfect for storefronts, offices, and museums.</p>
        <h3>Features</h3>
        <ul>
          <li>Maintains up to 85% natural light transmission</li>
          <li>Thin and flexible for easy installation</li>
          <li>Weatherproof for indoor and outdoor use</li>
          <li>Vibrant, high-resolution display</li>
        </ul>
        <h3>Applications</h3>
        <p>Perfect for retail glass facades, corporate offices, and exhibitions.</p>
      </div>
    `,
    image: "/service/transparent-film-hero.png",
    features: [
      "High light transmission preserving glass transparency",
      "Thin, flexible film for easy mounting",
      "Weather-resistant coating",
      "Sharp and bright visuals",
    ],
    metaDescription:
      "Transparent LED film for glass surfaces that combines advertising with natural light.",
    relatedServices: ["fine-pitch-led", "led-mesh-screen"],
  },

  "flexible-led-screen": {
    title: "Flexible LED Screen",
    description:
      "Curvable and bendable LED screens for creative installations on curved surfaces and unique shapes.",
    content: `
      <div class="service-content">
        <h2>Flexible LED Screens</h2>
        <p>Our flexible LED displays adapt to curved and irregular surfaces, enabling innovative designs and immersive viewer experiences.</p>
        <h3>Features</h3>
        <ul>
          <li>Supports concave and convex curves</li>
          <li>Lightweight and ultra-thin panels</li>
          <li>Seamless image quality even on bends</li>
          <li>Robust and durable design</li>
        </ul>
        <h3>Applications</h3>
        <p>Ideal for creative advertising, exhibitions, and stage design.</p>
      </div>
    `,
    image: "/service/flexible-screen-hero.jpg",
    features: [
      "Bendable for concave and convex curves",
      "Lightweight and thin construction",
      "High resolution with seamless panels",
      "Durable for long-term use",
    ],
    metaDescription:
      "Flexible LED screens designed for curved and creative display applications.",
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