'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '#', hasDropdown: true },
    { name: 'Contact', href: '/contact' },
  ];

  const productDropdownItems = [
    { title: 'Outdoor LED Billboard', href: '/outdoor-led-billboard' },
    { title: 'Rental LED Display', href: '/rental-led-display' },
    { title: 'Fine Pitch LED Displays', href: '/fine-pitch-led' },
    { title: 'LED Mesh Screen', href: '/led-mesh-screen' },
    { title: 'Transparent LED Film', href: '/transparent-led-film' },
    { title: 'Flexible LED Screen', href: '/flexible-led-screen' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black backdrop-blur-md border-b border-gray-800/50' 
          : 'bg-black backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-white text-xl font-bold tracking-tight">
                SAWARIYA INFRA TECH SOLUTION
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      )}
                    </a>
                    {item.hasDropdown && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-700/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                        <div className="py-2">
                          {productDropdownItems.map((product) => (
                            <a
                              key={product.title}
                              href={product.href}
                              className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
                            >
                              {product.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.name} className="px-3 py-2">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex justify-between w-full text-gray-300 hover:text-white text-base font-medium"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isDropdownOpen && (
                    <div className="mt-2 space-y-1">
                      {productDropdownItems.map((product) => (
                        <a
                          key={product.title}
                          href={product.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
                        >
                          {product.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-800/50 transition-colors"
                >
                  {item.name}
                </a>
              )
            )}
            <div className="pt-4 pb-2">
              <button className="w-full bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
