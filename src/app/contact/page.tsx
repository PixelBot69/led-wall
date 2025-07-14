'use client'

import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Clock, Building, MessageCircle } from 'lucide-react';

export default function GMAutomationContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceInterest: '',
    projectDetails: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactCards = [
    {
      id: 'email',
      icon: Mail,
      title: 'Email Us',
      content: 'Info@gmautomation.co.in',
      href: 'mailto:Info@gmautomation.co.in',
      description: 'Get in touch via email'
    },
    {
      id: 'phone',
      icon: Phone,
      title: 'Call Us',
      content: '+91 97827 30455',
      href: 'tel:+919782730455',
      description: 'Speak with our experts'
    },
    {
      id: 'whatsapp',
      icon: MessageCircle,
      title: 'WhatsApp',
      content: 'Chat with us',
      href: 'https://wa.me/919782730455',
      description: 'Quick support & demos'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mb-6 shadow-2xl">
            <Send className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space with cutting-edge automation technology? 
            <br />
            <span className="text-cyan-400 font-medium">GM AUTOMATION & SOLUTION - Building Tomorrow.</span>
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className={`transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className={`
                  bg-gray-800/50 backdrop-blur-sm border-gray-700/50 
                  transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/70
                  ${hoveredCard === card.id ? 'shadow-2xl shadow-cyan-500/20' : 'shadow-xl'}
                  group cursor-pointer
                `}>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-white flex items-center group-hover:text-cyan-400 transition-colors duration-300">
                      <div className={`
                        p-3 rounded-full mr-4 transition-all duration-300
                        ${hoveredCard === card.id 
                          ? 'bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/30' 
                          : 'bg-gray-700/50'
                        }
                      `}>
                        <IconComponent className={`h-6 w-6 transition-colors duration-300 ${
                          hoveredCard === card.id ? 'text-white' : 'text-cyan-400'
                        }`} />
                      </div>
                      {card.title}
                    </CardTitle>
                    <p className="text-gray-400 text-sm">{card.description}</p>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href={card.href} 
                      className="text-cyan-400 hover:text-cyan-300 text-lg font-medium transition-colors duration-300 block group-hover:underline"
                    >
                      {card.content}
                    </a>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Form Section */}
        <div className={`mb-20 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl text-white flex items-center justify-center">
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-3 rounded-full mr-4 shadow-lg">
                  <Send className="h-6 w-6 text-white" />
                </div>
                Start Your Project
              </CardTitle>
              <p className="text-gray-400 text-center">Fill out the form below and our team will get back to you within 24 hours to discuss your automation needs.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Service Interest</label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="home-automation">Home Automation</option>
                    <option value="elv-systems">ELV Systems</option>
                    <option value="home-cinema">Home Cinema</option>
                    <option value="ict-solutions">ICT Solutions</option>
                    <option value="building-management">Building Management Systems</option>
                    <option value="general-consultation">General Consultation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Project Details</label>
                  <textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Address & Hours Section */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          {/* Address Card */}
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-full mr-4 shadow-lg">
                  <Building className="h-6 w-6 text-white" />
                </div>
                Visit Our Office
              </CardTitle>
              <p className="text-gray-400">Our Location</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gray-700/30 rounded-lg">
                <h4 className="text-cyan-400 font-semibold mb-2">Main Office</h4>
                <p className="text-gray-300 leading-relaxed">
                  Prince Palace, Kanha Vihar,<br />
                  Ayodhya Nagar, Plot No.154,<br />
                  Bhura Patel Marg, Vaishali Nagar,<br />
                  Jaipur, Rajasthan 302021
                </p>
              </div>
              <a 
                href="#map"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Get Directions
              </a>
            </CardContent>
          </Card>

          {/* Hours Card */}
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-full mr-4 shadow-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-green-400 font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-green-400 font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-red-400 font-medium">Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '1000ms' }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Find Us on the Map</h2>
            <p className="text-gray-400">Located in the heart of Jaipur's tech district</p>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-700/50">
              <iframe
                id="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0268054523494!2d75.72152617543911!3d26.902644376653182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5cfbb7dfcab%3A0x38828eb08adcfe17!2sPrince%20Palace!5e0!3m2!1sen!2sin!4v1746715849791!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl w-full shadow-2xl transition-all duration-300 hover:shadow-3xl filter brightness-90 hover:brightness-100"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6">Join thousands of satisfied customers who've transformed their spaces with GM AUTOMATION & SOLUTION.</p>
            <a 
              href="mailto:Info@gmautomation.co.in"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="h-5 w-5 mr-2" />
              Send us a Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}