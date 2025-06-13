import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Award, Globe } from 'lucide-react';

const CertificationSection = () => {
  const certifications = [
    {
      name: "CE Marking",
      description: "European Conformity",
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      region: "EU"
    },
    {
      name: "EMC Compliance",
      description: "Electromagnetic Compatibility",
      icon: <Award className="w-8 h-8 text-green-400" />,
      region: "US/EU"
    },
    {
      name: "FCC Certified",
      description: "Federal Communications Commission",
      icon: <CheckCircle className="w-8 h-8 text-purple-400" />,
      region: "US"
    }
  ];

  // Company logos data - you can replace these with actual company names/logos
  const verifiedCompanies = [
    { name: "TechCorp", verified: true },
    { name: "GlobalTech", verified: true },
    { name: "InnovateX", verified: true },
    { name: "DigitalPro", verified: true },
    { name: "SmartSys", verified: true },
    { name: "FutureTech", verified: true },
    { name: "EliteDisplay", verified: true },
    { name: "ProVision", verified: true }
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full border border-zinc-800 mb-6">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm text-zinc-300">Certified Quality</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Our Products Are
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"> Certified</span>
          </h2>
          
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed mb-8">
            CE and EMC standards compliance for our Indoor and Outdoor LED screens, 
            ensuring quality and safety for US and EU markets.
          </p>

          {/* Certification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {cert.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                  <p className="text-zinc-400 text-sm mb-3">{cert.description}</p>
                  <Badge 
                    variant="outline" 
                    className="border-zinc-700 text-zinc-300 bg-zinc-800/50"
                  >
                    {cert.region} Market
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-zinc-900/30 border-zinc-800 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Indoor LED Screens</h3>
                  <p className="text-zinc-400">High-resolution displays for interior environments</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-500/10 text-green-400 border-green-500/20">CE Certified</Badge>
                <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">EMC Compliant</Badge>
                <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">FCC Approved</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/30 border-zinc-800 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Outdoor LED Screens</h3>
                  <p className="text-zinc-400">Weather-resistant displays for external installations</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-500/10 text-green-400 border-green-500/20">CE Certified</Badge>
                <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">EMC Compliant</Badge>
                <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20">IP65 Rated</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Verified Companies Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Trusted by Industry Leaders</h3>
          <p className="text-zinc-400 mb-12">Companies that have verified our certification standards</p>
          
          {/* Company Logos Grid */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[1, 2, 3, 4].map((index) => (
      <div
        key={index}
        className="group relative p-6 bg-zinc-900/30 border border-zinc-800 rounded-lg hover:bg-zinc-900/50 transition-all duration-300 hover:scale-105"
      >
        <div className="w-20 h-20 mx-auto mb-3">
          <img
            src={`/tested/img${index}.webp`}
            alt={`Verified company ${index}`}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        {/* Verification Badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-black">
          <CheckCircle className="w-3 h-3 text-white" />
        </div>
      </div>
    ))}
  </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-zinc-400">Compliance Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                25+
              </div>
              <p className="text-zinc-400">Countries Approved</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <p className="text-zinc-400">Verified Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;