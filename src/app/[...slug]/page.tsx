import { notFound } from 'next/navigation';
import { getServiceBySlug, services } from '@/content/service';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next'

import { 
  CheckCircle, 
  ArrowRight, 
  ChevronRight, 
  Star, 
  ArrowRightCircle,
  Users,
  Activity,
  Briefcase,
  Phone,
  Mail,
  Package,
  Wrench,
  Settings,
  Zap,
  Lightbulb,
  Monitor,
  Cpu,
  Shield,
  Clock
} from 'lucide-react';

// Updated interface to match Next.js expectations
export interface ServicePageProps {
  params: { slug: string[] }
  searchParams?: { [key: string]: string | string[] | undefined }
}

// Service data interface
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

export default async function ServicePage({ params, searchParams }: ServicePageProps) {
  // Ensure params.slug is properly handled
  const slugArray = Array.isArray(params.slug) ? params.slug : [params.slug];
  const service = await getServiceBySlug(slugArray);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900">

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-16">
        {/* Service Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-thin text-white mb-4 tracking-wider">
            {service.title}
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>

        {/* Main Service Content */}
        <div className="max-w-6xl mx-auto">
          <div className="relative group mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-500">
              
              {/* Service Image */}
              {service.image && (
                <div className="aspect-[21/9] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 100vw"
                  />
                </div>
              )}
              
              {/* Service Content */}
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl mr-4 flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-light text-white">{service.title}</h2>
                </div>
                
                {/* Service Description */}
                <div className="mb-8">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {service.content}
                  </p>
                </div>

                {/* Service Features */}
                {service.features && service.features.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-xl font-light text-white mb-6 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-blue-400" />
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.features.map((feature, index) => {
                        const [title, description] = feature.includes(':') 
                          ? [feature.split(':')[0], feature.split(':')[1]] 
                          : [feature, ''];
                        
                        return (
                          <div key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium text-white mb-1">{title}</h4>
                              {description && <p className="text-sm text-gray-400 leading-relaxed">{description.trim()}</p>}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Service Process */}
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
                  <h4 className="font-medium text-white mb-6 flex items-center text-xl">
                    <Settings className="w-5 h-5 mr-2 text-blue-400" />
                    Our Service Process
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-700 rounded-xl mx-auto mb-4 flex items-center justify-center border border-gray-600">
                        <Package className="w-8 h-8 text-blue-400" />
                      </div>
                      <h5 className="text-white font-medium mb-2">CONSULTATION</h5>
                      <p className="text-sm text-gray-400">Free assessment and solution design</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-700 rounded-xl mx-auto mb-4 flex items-center justify-center border border-gray-600">
                        <Wrench className="w-8 h-8 text-blue-400" />
                      </div>
                      <h5 className="text-white font-medium mb-2">INSTALLATION</h5>
                      <p className="text-sm text-gray-400">Professional setup and integration</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-700 rounded-xl mx-auto mb-4 flex items-center justify-center border border-gray-600">
                        <Shield className="w-8 h-8 text-blue-400" />
                      </div>
                      <h5 className="text-white font-medium mb-2">SUPPORT</h5>
                      <p className="text-sm text-gray-400">Ongoing maintenance and warranty</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Services */}
          {service.relatedServices && service.relatedServices.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-light text-white mb-8 text-center">
                Related Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.relatedServices.map((relatedServiceSlug, index) => {
                  // Get the service data for the related service
                  const relatedServiceData = services[relatedServiceSlug];
                  
                  if (!relatedServiceData) return null;
                  
                  return (
                    <div key={index} className="group relative bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                      {/* Service Image */}
                      {relatedServiceData.image && (
                        <div className="aspect-[16/9] relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                          <Image
                            src={relatedServiceData.image}
                            alt={relatedServiceData.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      )}
                      
                      {/* Service Content */}
                      <div className="p-6">
                        <h4 className="text-white font-medium mb-2 text-lg">{relatedServiceData.title}</h4>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{relatedServiceData.description}</p>
                        <a 
                          href={`/${relatedServiceSlug}`}
                          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-xl font-light text-white">Service Guarantee</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Professional installation and comprehensive support ensure your investment delivers maximum performance and reliability.
              </p>
              <div className="space-y-3">
                {[
                  "Professional installation service",
                  "Comprehensive warranty coverage",
                  "24/7 technical support available",
                  "Performance optimization included"
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-8">
              <div className="flex items-center mb-6">
                <Phone className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-light text-white">Get In Touch</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Connect with our specialists for personalized consultation and custom solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                  <span>+91 978-273-0455</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                  <span>info@company.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Clock className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                  <span>Free consultation available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-4 rounded-xl font-light tracking-wider mr-6">
              <Zap className="w-5 h-5 mr-2" />
              Get Quote
            </Button>
            <Button 
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 px-12 py-4 rounded-xl font-light tracking-wider bg-gray-800"
            >
              <Activity className="w-5 h-5 mr-2" />
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static routes for all known services
export async function generateStaticParams() {
  const serviceData = await import('@/content/service');
  return serviceData.getAllServiceSlugs().map(slug => ({ slug }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const slugArray = Array.isArray(params.slug) ? params.slug : [params.slug];
  const service = await getServiceBySlug(slugArray);

  if (!service) {
    notFound();
  }

  return {
    title: `${service.title} | Professional Services`,
    description: service.metaDescription || service.description,
  };
}