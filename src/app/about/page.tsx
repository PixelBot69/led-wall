// src/app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Shield,
  Users,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Sawariya Indra Tech Solution",
  description:
    "Learn about Sawariya Indra Tech Solution's mission to drive innovation in LED lighting and automation technologies.",
};

const teamMembers = [
  {
    name: "Rajeev Kumar",
    role: "Founder & CEO",
    bio: "With a passion for lighting innovation, Rajeev leads Sawariya Indra Tech to deliver high-performance LED solutions globally.",
    img1: "/img1.webp",
  },
  {
    name: "Pooja Singh",
    role: "Head of Engineering",
    bio: "Expert in LED circuit design and smart automation, Pooja drives our product development and innovation.",
    img1: "/img1.webp",
  },
  {
    name: "Ankit Sharma",
    role: "Marketing Director",
    bio: "Ankit focuses on market growth and customer outreach, ensuring our LED products reach every corner of India and beyond.",
    img1: "/img1.webp",
  },
  {
    name: "Ritika Verma",
    role: "Customer Success Head",
    bio: "Committed to client satisfaction, Ritika helps partners implement our solutions with excellence.",
    img1: "/img1.webp",
  },
];

const milestones = [
  {
    year: "2016",
    title: "Company Founded",
    description:
      "Sawariya Indra Tech Solution was founded to revolutionize lighting with energy-efficient LED technologies.",
  },
  {
    year: "2017",
    title: "First Manufacturing Unit",
    description:
      "Launched our in-house LED manufacturing plant with advanced automation tools.",
  },
  {
    year: "2020",
    title: "Smart Lighting Solutions",
    description:
      "Expanded our offerings to include IoT-enabled LED systems and industrial automation.",
  },
  {
    year: "2023",
    title: "PAN India Presence",
    description:
      "Established distributor networks across major cities, serving over 5,000 clients nationwide.",
  },
  {
    year: "2024",
    title: "Green Tech Recognition",
    description:
      "Awarded for sustainable innovation in lighting by the National Energy Board.",
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "We strive to build futuristic lighting solutions, integrating smart controls and sustainable materials.",
    icon: <Lightbulb className="h-8 w-8" />,
    color: "bg-blue-500/20 text-blue-400",
  },
  {
    title: "Collaboration",
    description:
      "We partner with architects, builders, and engineers to craft custom lighting experiences.",
    icon: <Users className="h-8 w-8" />,
    color: "bg-purple-500/20 text-purple-400",
  },
  {
    title: "Trust",
    description:
      "We stand for reliability and long-lasting performance, offering unmatched service and product warranties.",
    icon: <Shield className="h-8 w-8" />,
    color: "bg-blue-500/20 text-blue-400",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-28 md:py-40">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-500 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-purple-500 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h1 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter mb-4 uppercase">
              OUR{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                VISION
              </span>
            </h1>
          </div>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300">
            We aim to light up the future with eco-friendly, smart, and affordable LED
            technologies across India and beyond.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/img1.webp"
              alt="Factory team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>

          <div>
            <Badge
              variant="outline"
              className="mb-6 text-blue-400 border-blue-400 py-1.5 px-4 text-sm uppercase tracking-wider"
            >
              Our Foundation
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Story
              </span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Established in 2016, Sawariya Indra Tech Solution set out to redefine
                lighting standards in India with top-quality LED products.
              </p>
              <p>
                Our founder, Rajeev Kumar, envisioned a company that blends innovation
                with affordability to meet both industrial and residential lighting
                demands.
              </p>
              <p>
                Today, we continue to grow as a trusted name in LED lighting and smart
                tech, creating value for partners through design, durability, and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative text-center">
          <Badge
            variant="outline"
            className="mb-6 text-purple-400 border-purple-400 py-1.5 px-4 text-sm uppercase tracking-wider"
          >
            What Drives Us
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Values
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-16">
            Our philosophy is grounded in excellence, service, and future-forward thinking.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <Card
                key={i}
                className="bg-gray-900/60 backdrop-blur-sm border-gray-800 hover:border-blue-500 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div
                    className={`h-16 w-16 rounded-lg ${value.color} flex items-center justify-center mb-6`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-400 text-lg">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge
            variant="outline"
            className="mb-6 text-blue-400 border-blue-400 py-1.5 px-4 text-sm uppercase tracking-wider"
          >
            Since 2016
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Journey
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-16">
            From concept to execution, we’ve illuminated thousands of spaces with smart LED solutions.
          </p>

          <div className="space-y-16 relative">
            <div className="absolute top-0 left-1/2 w-px h-full bg-gray-700 -translate-x-1/2 hidden md:block" />
            {milestones.map((milestone, index) => (
              <div key={index} className={`md:flex ${index % 2 !== 0 && "md:flex-row-reverse"}`}>
                <div className="md:w-1/2 relative z-10">
                  <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800 hover:border-blue-500 mx-4 md:mx-10">
                    <CardContent className="p-8">
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 mb-4">
                        {milestone.year}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                      <p className="text-gray-400 text-lg">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge
            variant="outline"
            className="mb-6 text-purple-400 border-purple-400 py-1.5 px-4 text-sm uppercase tracking-wider"
          >
            Our Team
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Meet the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Leaders
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-16">
            Get to know the people powering our vision for a brighter, energy-smart world.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <Card
                key={i}
                className="bg-gray-900/60 backdrop-blur-sm border-gray-800 hover:border-blue-500 transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.img1}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-none mb-2">
                    {member.role}
                  </Badge>
                  <p className="text-gray-400">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-center">
        <Badge
          variant="outline"
          className="mb-6 text-blue-400 border-blue-400 py-1.5 px-4 text-sm uppercase tracking-wider"
        >
          Contact Us
        </Badge>
        <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
          Let’s Brighten the{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Future
          </span>
        </h2>
        <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-10">
          Partner with Sawariya Indra Tech Solution for cutting-edge LED systems
          tailored to your needs.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg">
          <Link href="/contact">
            Reach Out <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
    </main>
  );
}
