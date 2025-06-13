import React from 'react';


import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';
import ServicesSection from '@/components/ServiceSection';

import  { WorldMapDemo } from '@/components/StatsSection';


import TestimonialsSection from '@/components/TestimonialsSection';
import AssociatesSection from '@/components/AssociatesSection';

import AboutSection from '@/components/FeaturedProjectsSection';

import { BentoGridDemo } from '@/components/BentoGrid';
import CertificationSection from '@/components/Verified';
import { VortexDemoSecond } from '@/components/Benifits';

import { TracingBeam } from '@/components/ui/tracing-beam';
import { AuroraBackgroundDemo } from '@/components/HeroSection';
import { LEDWallCarouselDemo } from '@/components/NewsletterSection';

export default function Home() {
  return (

    <main>
      <AuroraBackgroundDemo/>
      
      <ServicesSection />
      <LEDWallCarouselDemo/>
      <CertificationSection/>
     

      
      <WorldMapDemo />
       <VortexDemoSecond/>

   
    </main>
  
  );
}