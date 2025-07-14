"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// Type definitions
interface Feature {
  title: string;
  description: string;
}

interface LEDContentProps {
  title: string;
  description: string;
  features: Feature[];
}

interface CardData {
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
}

export function LEDWallCarouselDemo() {
  const cards = data.map((card: CardData, index: number) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white dark:text-neutral-200 font-sans">
        Transform Your Space with LED Wall Solutions
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const LEDContent: React.FC<LEDContentProps> = ({ title, description, features }) => {
  return (
    <>
      {[...new Array(2).fill(1)].map((_, index: number) => {
        return (
          <div
            key={"led-content" + index}
            className="bg-gradient-to-br from-gray-900 to-black dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 mb-6 border border-gray-700/30">
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-white dark:text-neutral-200 text-xl md:text-2xl block mb-4 text-shadow-lg">
                  {title}
                </span>
                <span className="text-gray-600">
                  {description}
                </span>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {features.map((feature: Feature, idx: number) => (
                <div key={idx} className="bg-black/60 backdrop-blur-sm p-4 rounded-lg border border-gray-600/50 shadow-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-lg shadow-blue-500/50"></div>
                    <span className="text-blue-300 font-semibold">{feature.title}</span>
                  </div>
                  <p className="text-gray-200 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

const data: CardData[] = [
  {
    category: "Transportation",
    title: "Airport LED Display Solutions",
    src: "/solution/led-airport.webp",
    content: (
      <LEDContent
        title="Next-Generation Airport Displays"
        description="Transform passenger experience with crystal-clear LED displays for flight information, wayfinding, and dynamic advertising throughout terminals."
        features={[
          {
            title: "Flight Information Systems",
            description: "Real-time departure and arrival displays with high visibility"
          },
          {
            title: "Wayfinding Solutions",
            description: "Interactive directional displays for seamless navigation"
          },
          {
            title: "Digital Advertising",
            description: "Revenue-generating displays for brand partnerships"
          },
          {
            title: "24/7 Operation",
            description: "Reliable performance with minimal maintenance requirements"
          }
        ]}
      />
    ),
  },
  {
    category: "Retail",
    title: "Shopping Mall LED Experiences",
    src: "/solution/led-mall.jpg",
    content: (
      <LEDContent
        title="Immersive Retail Environments"
        description="Create captivating shopping experiences with dynamic LED displays that drive foot traffic and enhance brand engagement."
        features={[
          {
            title: "Brand Showcases",
            description: "High-impact displays for store promotions and brand stories"
          },
          {
            title: "Interactive Directories",
            description: "Touch-enabled wayfinding and store locator systems"
          },
          {
            title: "Event Displays",
            description: "Flexible screens for seasonal campaigns and special events"
          },
          {
            title: "Social Integration",
            description: "Real-time social media feeds and user-generated content"
          }
        ]}
      />
    ),
  },
  {
    category: "Education",
    title: "Educational LED Technology",
    src: "/solution/led-education.webp",
    content: (
      <LEDContent
        title="Interactive Learning Environments"
        description="Enhance educational experiences with high-resolution LED displays that make learning more engaging and accessible for all students."
        features={[
          {
            title: "Interactive Classrooms",
            description: "Touch-enabled displays for collaborative learning"
          },
          {
            title: "Auditorium Systems",
            description: "Large-format displays for presentations and events"
          },
          {
            title: "Digital Signage",
            description: "Campus-wide information and announcement systems"
          },
          {
            title: "Accessibility Features",
            description: "High contrast and adjustable brightness for all learners"
          }
        ]}
      />
    ),
  },
  {
    category: "Entertainment",
    title: "Stage & Event LED Walls",
    src: "/solution/led-stage.webp",
    content: (
      <LEDContent
        title="Spectacular Event Experiences"
        description="Create unforgettable moments with premium LED walls designed for concerts, theaters, and live events with stunning visual impact."
        features={[
          {
            title: "4K+ Resolution",
            description: "Ultra-high definition visuals for premium viewing experience"
          },
          {
            title: "Curved Configurations",
            description: "Flexible panel arrangements for creative stage designs"
          },
          {
            title: "Real-time Processing",
            description: "Low-latency video processing for live performance integration"
          },
          {
            title: "Weather Resistant",
            description: "IP65 rated panels for outdoor concerts and festivals"
          }
        ]}
      />
    ),
  },
  {
    category: "Worship",
    title: "Church LED Display Systems",
    src: "/solution/led-church.webp",
    content: (
      <LEDContent
        title="Inspiring Worship Experiences"
        description="Enhance spiritual gatherings with thoughtfully designed LED displays that support worship, teaching, and community connection."
        features={[
          {
            title: "Sanctuary Displays",
            description: "Large-format screens for lyrics, scriptures, and presentations"
          },
          {
            title: "Multi-site Streaming",
            description: "HD displays for live streaming to remote locations"
          },
          {
            title: "Quiet Operation",
            description: "Silent cooling systems that won't disrupt services"
          },
          {
            title: "Easy Content Management",
            description: "User-friendly software for volunteer-operated systems"
          }
        ]}
      />
    ),
  },
  {
    category: "Smart City",
    title: "Smart City LED Infrastructure",
    src: "/solution/led-smartcity.png",
    content: (
      <LEDContent
        title="Connected Urban Solutions"
        description="Build smarter cities with intelligent LED display networks that provide real-time information, emergency alerts, and community engagement."
        features={[
          {
            title: "Traffic Management",
            description: "Dynamic traffic signs and real-time route optimization"
          },
          {
            title: "Emergency Alerts",
            description: "City-wide notification system for public safety"
          },
          {
            title: "Public Information",
            description: "Weather, transit, and community event displays"
          },
          {
            title: "Energy Efficient",
            description: "Solar-powered options and smart brightness control"
          }
        ]}
      />
    ),
  },
];