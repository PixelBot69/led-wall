'use client';

import Link from 'next/link';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "Outdoor LED Billboard",
      href: "/outdoor-led-billboard",
    },
    {
      title: "Rental LED Display",
      href: "/rental-led-display",
    },
    {
      title: "Fine Pitch LED Displays",
      href: "/fine-pitch-led",
    },
    {
      title: "LED Mesh Screen",
      href: "/led-mesh-screen",
    },
    {
      title: "Transparent LED Film",
      href: "/transparent-led-film",
    },
    {
      title: "Flexible LED Screen",
      href: "/flexible-led-screen",
    },
    { 
      title: "Contact Us", 
      href: "/contact",
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      {/* Main Footer with gradient background */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-400 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            {/* Logo and Company Info */}
            <div className="max-w-md">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">GM</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
                </div>
                <div className="ml-4">
                  <h2 className="text-white text-xl font-bold">GM SMART LED</h2>
                  <p className="text-gray-400 text-sm">Providing cutting-edge technology solutions</p>
                </div>
              </div>
              
              {/* Company Description */}
              <div className="mb-6">
                <div className="bg-gray-800/50 backdrop-blur-xl rounded-lg p-4 border border-gray-700">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Providing cutting-edge technology solutions for homes and businesses since 2010. We're dedicated to creating smarter, more efficient spaces through innovative technology.
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className="text-cyan-400 text-sm font-semibold">Trusted by 1500+ Clients</p>
                    <p className="text-cyan-400 text-sm font-semibold">12+ Years of Excellence</p>
                  </div>
                </div>
              </div>
              
              {/* Our Location */}
              <div>
                <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Our Location
                </h3>
                <div className="bg-gray-800/50 backdrop-blur-xl rounded-lg p-4 border border-gray-700">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Prince Palace, Kanha Vihar, Ayodhya Nagar,<br />
                    Plot No.154, Bhura Patel Marg,<br />
                    near Gandhi Path West, Vaishali Nagar,<br />
                    Jaipur, Rajasthan 302021
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="min-w-[280px]">
              <h3 className="text-cyan-400 font-semibold mb-4 text-lg">Get In Touch</h3>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-gray-700">
                <div className="space-y-4">
                  <div className="flex items-center group hover:bg-gray-700/50 p-3 rounded-lg transition-all duration-300">
                    <div className="bg-blue-500/20 p-2 rounded-lg mr-4 group-hover:bg-blue-500/30 transition-colors">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm block">Call Us</span>
                      <span className="text-white font-medium">+91 97827 30455</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center group hover:bg-gray-700/50 p-3 rounded-lg transition-all duration-300">
                    <div className="bg-purple-500/20 p-2 rounded-lg mr-4 group-hover:bg-purple-500/30 transition-colors">
                      <Mail className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm block">Email Us</span>
                      <span className="text-white font-medium">Info@gmautomation.co.in</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div className="min-w-[250px]">
              <h3 className="text-cyan-400 font-semibold mb-4 text-lg">Our LED Solutions</h3>
              <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700">
                <ul className="space-y-3">
                  {serviceCategories.map((category, index) => (
                    <li key={index}>
                      <Link 
                        href={category.href}
                        className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm flex items-center group"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300"></div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {category.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link 
                href="https://facebook.com" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-full text-white hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </Link>
              
              <Link 
                href="https://twitter.com" 
                className="bg-gradient-to-r from-sky-500 to-sky-600 p-3 rounded-full text-white hover:from-sky-400 hover:to-sky-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-sky-500/25"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </Link>
              
              <Link 
                href="https://youtube.com" 
                className="bg-gradient-to-r from-red-600 to-red-700 p-3 rounded-full text-white hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.013 1.103-.074 2.015l-.007.102-.01.103-.02.242-.01.104a6.32 6.32 0 0 1-.218 1.4 2.013 2.013 0 0 1-1.412 1.412c-1.136.31-5.258.332-6.104.335h-.089c-.822-.002-4.987-.033-6.11-.335a2.015 2.015 0 0 1-1.414-1.412 6.59 6.59 0 0 1-.222-1.4l-.007-.103-.007-.104-.02-.242-.01-.104c-.06-.91-.07-1.769-.072-1.955v-.076c.002-.193.014-1.103.072-2.013l.006-.103.008-.105.02-.241.01-.103a6.357 6.357 0 0 1 .22-1.4 2.014 2.014 0 0 1 1.412-1.42c1.124-.3 5.29-.333 6.11-.336zm-.035 3.507v4.2l3.645-2.1-3.646-2.1z"/>
                </svg>
              </Link>
              
              <Link 
                href="https://linkedin.com" 
                className="bg-gradient-to-r from-blue-700 to-blue-800 p-3 rounded-full text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button 
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-110 hover:shadow-cyan-500/25 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Policy Links */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {[
                { name: "About Us", href: "/about-us" },
                { name: "Our Projects", href: "/our-projects" },
                { name: "Contact", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms-of-service" },
                { name: "Sitemap", href: "/sitemap" }
              ].map((link, index) => (
                <div key={index} className="flex items-center">
                  <Link 
                    href={link.href} 
                    className="text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                  {index < 5 && <span className="text-gray-600 mx-2">|</span>}
                </div>
              ))}
            </div>

            {/* Update & Visitors */}
           
          </div>

          {/* Copyright Text */}
          <div className="mt-6 pt-4 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              © {currentYear} GM Automation & Solution. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;