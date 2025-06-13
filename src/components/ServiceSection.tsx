'use client'

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Monitor,
  Video,
  Layers,
  Grid,
  Eye,
  Aperture,
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Outdoor LED Billboard",
      description:
        "Can be used in all weather conditions with IP65 and 6500~8000 nits brightness, ideal for commercial and sports applications.",
      image: "/img1.webp",
      icon: <Monitor className="w-6 h-6" />,
      features: ["IP65 Rated", "High Brightness", "Weather Resistant"],
      gradient: "from-blue-600 via-cyan-500 to-teal-400"
    },
    {
      id: 2,
      title: "Rental LED Display",
      description:
        "Widely used for event shows, TV shows, XR LED wall virtual productions, and concerts.",
      image: "/img2.webp",
      icon: <Video className="w-6 h-6" />,
      features: ["Event Ready", "High Flexibility", "XR Compatible"],
      gradient: "from-purple-600 via-pink-500 to-rose-400"
    },
    {
      id: 3,
      title: "Fine Pitch LED Displays",
      description:
        "Ultra-high CNC precision die-cast aluminum housing; suitable for wall mounting or ground stacking.",
      image: "/img3.webp",
      icon: <Layers className="w-6 h-6" />,
      features: ["CNC Precision", "Wall/Ground Mount", "High Resolution"],
      gradient: "from-emerald-600 via-green-500 to-lime-400"
    },
    {
      id: 4,
      title: "LED Mesh Screen",
      description:
        "Lightweight and flexible mesh screen, ideal for irregularly shaped building facades and creative surfaces.",
      image: "/img4.webp",
      icon: <Grid className="w-6 h-6" />,
      features: ["Flexible Design", "Lightweight", "Customizable Shape"],
      gradient: "from-amber-600 via-orange-500 to-red-400"
    },
    {
      id: 5,
      title: "Transparent LED Film",
      description:
        "Turn any glass surface into a digital billboard. Ideal for product/service advertising on windows.",
      image: "/img5.webp",
      icon: <Eye className="w-6 h-6" />,
      features: ["Glass Compatible", "Highly Transparent", "Ad-Ready"],
      gradient: "from-indigo-600 via-purple-500 to-pink-400"
    },
    {
      id: 6,
      title: "Flexible LED Screen",
      description:
        "Perfect for cylinders, spheres, and creative studio applications where curved screens are needed.",
      image: "/img6.webp",
      icon: <Aperture className="w-6 h-6" />,
      features: ["Curved Surface Support", "Studio Ready", "Creative Displays"],
      gradient: "from-teal-600 via-blue-500 to-indigo-400"
    },
  ];

  return (
    <section className="py-20 px-4 bg-black min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full border border-zinc-800 mb-6">
            <Monitor className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-zinc-300">Our LED Products</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              LED Innovations
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Discover state-of-the-art LED displays crafted for performance, reliability, and stunning visuals across diverse industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="relative bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:shadow-lg transition-all duration-300 group"
            >
              <CardHeader className="pb-4 relative">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 p-2 bg-black/40 rounded-lg border border-zinc-700">
                    <div className="text-purple-400">{service.icon}</div>
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pb-4">
                <CardDescription className="text-zinc-400 leading-relaxed mb-4">
                  {service.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-zinc-200 font-semibold px-8 py-3 transition-all duration-300"
            >
              Get a Free Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-zinc-700 text-black hover:bg-zinc-800 px-8 py-3 transition-all duration-300"
            >
              View Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
