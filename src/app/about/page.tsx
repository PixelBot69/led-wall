// src/app/about/page.tsx
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
  Settings,
  Zap,
  Home,
  Monitor,
  Wifi,
  Camera,
  Building,
  Headphones,
  Clock,
  Award,
  CheckCircle,
  Star
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | GM Automation & Solution",
  description:
    "Learn about GM Automation & Solution's mission to provide cutting-edge technology solutions for homes and businesses since 2010.",
};

const services = [
  {
    title: "Home Automation",
    description: "Smart home solutions with centralized control systems",
    icon: <Home className="h-8 w-8" />,
    color: "bg-blue-500/20 text-blue-400",
  },
  {
    title: "ELV Systems",
    description: "Structured cabling, CCTV, and access control solutions",
    icon: <Camera className="h-8 w-8" />,
    color: "bg-purple-500/20 text-purple-400",
  },
  {
    title: "Home Cinema",
    description: "Premium audio-visual and entertainment systems",
    icon: <Monitor className="h-8 w-8" />,
    color: "bg-cyan-500/20 text-cyan-400",
  },
  {
    title: "ICT Solutions",
    description: "Wi-Fi, IT infrastructure, and communication systems",
    icon: <Wifi className="h-8 w-8" />,
    color: "bg-green-500/20 text-green-400",
  },
  {
    title: "Smart Systems",
    description: "Building management and automation solutions",
    icon: <Building className="h-8 w-8" />,
    color: "bg-orange-500/20 text-orange-400",
  },
  {
    title: "Support & AMC",
    description: "Comprehensive maintenance and support services",
    icon: <Headphones className="h-8 w-8" />,
    color: "bg-red-500/20 text-red-400",
  },
];

const milestones = [
  {
    year: "2010",
    title: "Company Founded",
    description:
      "GM Automation & Solution was established to revolutionize home and business automation with cutting-edge technology.",
  },
  {
    year: "2012",
    title: "First Major Projects",
    description:
      "Successfully completed our first large-scale home automation and ELV system installations.",
  },
  {
    year: "2015",
    title: "Smart Home Solutions",
    description:
      "Expanded our offerings to include IoT-enabled smart home systems and advanced security solutions.",
  },
  {
    year: "2018",
    title: "1000+ Satisfied Clients",
    description:
      "Reached the milestone of serving over 1000 satisfied customers across residential and commercial sectors.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description:
      "Embraced digital solutions and remote monitoring capabilities for enhanced customer experience.",
  },
  {
    year: "2023",
    title: "Excellence Recognition",
    description:
      "Recognized as a leading automation solution provider with 1500+ successful projects completed.",
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "We embrace cutting-edge technology to deliver smart, efficient, and future-ready automation solutions.",
    icon: <Lightbulb className="h-8 w-8" />,
    color: "bg-blue-500/20 text-blue-400",
  },
  {
    title: "Quality",
    description:
      "We ensure the highest standards in every project, from planning to execution and ongoing support.",
    icon: <Award className="h-8 w-8" />,
    color: "bg-purple-500/20 text-purple-400",
  },
  {
    title: "Trust",
    description:
      "We build lasting relationships through reliability, transparency, and exceptional customer service.",
    icon: <Shield className="h-8 w-8" />,
    color: "bg-cyan-500/20 text-cyan-400",
  },
];

const stats = [
  {
    number: "1500+",
    label: "Trusted Clients",
    description: "Happy customers across residential and commercial sectors"
  },
  {
    number: "12+",
    label: "Years Experience",
    description: "Providing cutting-edge automation solutions since 2010"
  },
  {
    number: "500+",
    label: "Projects Completed",
    description: "Successfully delivered automation projects of all scales"
  },
  {
    number: "24/7",
    label: "Support Available",
    description: "Round-the-clock technical support and maintenance"
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
              GM{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                AUTOMATION
              </span>
            </h1>
          </div>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300">
            Providing cutting-edge technology solutions for homes and businesses since 2010. 
            We're dedicated to creating smarter, more efficient spaces through innovative technology.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <Card
                key={i}
                className="bg-gray-900/60 backdrop-blur-sm border-gray-800 hover:border-blue-500 transition-all duration-300 text-center"
              >
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
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
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-lg text-gray-300">
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-semibold text-white">The Beginning</h3>
                </div>
                <p className="leading-relaxed">
                  Established in 2010, GM Automation & Solution began with a vision to transform how people interact with technology in their daily lives. Our founder recognized the growing need for intelligent, integrated solutions that could make homes and businesses more efficient, secure, and comfortable.
                </p>
              </div>

              <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
                </div>
                <p className="leading-relaxed">
                  We are dedicated to creating smarter, more efficient spaces through innovative technology. Our comprehensive range of services includes Home Automation, ELV Systems, Home Cinema, ICT Solutions, and Smart Building Management Systems, all designed to enhance the quality of life and work.
                </p>
              </div>

              <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-semibold text-white">Today & Beyond</h3>
                </div>
                <p className="leading-relaxed">
                  Today, we continue to grow as a trusted name in automation and smart technology solutions. With over 1500 satisfied clients and 12+ years of excellence, we remain committed to innovation, quality, and customer satisfaction as we build the future of intelligent living and working spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative text-center">
          <Badge
            variant="outline"
            className="mb-6 text-purple-400 border-purple-400 py-1.5 px-4 text-sm uppercase tracking-wider"
          >
            What We Do
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Services
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-16">
            Comprehensive automation solutions designed to transform your space into a smart, efficient environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card
                key={i}
                className="bg-gray-900/60 backdrop-blur-sm border-gray-800 hover:border-blue-500 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div
                    className={`h-16 w-16 rounded-lg ${service.color} flex items-center justify-center mb-6 mx-auto`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 text-lg">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 relative text-center">
          <Badge
            variant="outline"
            className="mb-6 text-cyan-400 border-cyan-400 py-1.5 px-4 text-sm uppercase tracking-wider"
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
            Our philosophy is grounded in excellence, innovation, and customer satisfaction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <Card
                key={i}
                className="bg-gray-900/60 backdrop-blur-sm border-gray-800 hover:border-blue-500 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div
                    className={`h-16 w-16 rounded-lg ${value.color} flex items-center justify-center mb-6 mx-auto`}
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
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge
            variant="outline"
            className="mb-6 text-blue-400 border-blue-400 py-1.5 px-4 text-sm uppercase tracking-wider"
          >
            Since 2010
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Journey
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-16">
            From concept to execution, we've transformed thousands of spaces with smart automation solutions.
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

      {/* Why Choose Us */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge
            variant="outline"
            className="mb-6 text-purple-400 border-purple-400 py-1.5 px-4 text-sm uppercase tracking-wider"
          >
            Why Choose Us
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            The{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              GM Advantage
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-16">
            Experience the difference with our comprehensive approach to automation and smart technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Skilled professionals with years of experience in automation technology",
                icon: <Users className="h-6 w-6" />
              },
              {
                title: "Quality Assurance",
                description: "Rigorous testing and quality control for all installations and services",
                icon: <CheckCircle className="h-6 w-6" />
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock technical support and maintenance services",
                icon: <Clock className="h-6 w-6" />
              },
              {
                title: "Proven Track Record",
                description: "1500+ satisfied clients and 12+ years of excellence in automation",
                icon: <Star className="h-6 w-6" />
              }
            ].map((advantage, i) => (
              <Card
                key={i}
                className="bg-gray-900/60 backdrop-blur-sm border-gray-800 hover:border-blue-500 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4 mx-auto">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-gray-400">{advantage.description}</p>
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
          Ready to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Automate?
          </span>
        </h2>
        <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-10">
          Partner with GM Automation & Solution for cutting-edge automation systems
          tailored to your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg">
            <Link href="/contact">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 px-8 py-6 text-lg">
            <Link href="/services">
              View Services <Zap className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}