import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skill', label: 'Skills' },
    { to: '/project', label: 'Projects' },
    { to: '/contact', label: 'Contact' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-teal-400/10 border-b border-gray-800' 
            : 'bg-black shadow-md'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 group">
              <Link to="/" className="text-white text-xl sm:text-2xl font-bold cursor-pointer transform transition-all duration-300 hover:scale-105 inline-block">
                PORT{" "}
                <span className="text-teal-400 inline-block transform transition-all duration-300 group-hover:rotate-12">
                  folio
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <ul className="flex items-center space-x-8">
                {navLinks.map((link, index) => (
                  <li key={index} className="relative group">
                    <Link
                      to={link.to}
                      className={`relative px-3 py-2 text-base font-medium transition-all duration-300 transform hover:scale-105 inline-block ${
                        location.pathname === link.to
                          ? 'text-teal-400 font-bold'
                          : 'text-white hover:text-teal-400'
                      }`}
                    >
                      {link.label}
                      
                      {/* Animated underline */}
                      <span 
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-blue-400 transform origin-left transition-all duration-300 ${
                          location.pathname === link.to ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                      
                      {/* Hover glow effect */}
                      <span 
                        className={`absolute inset-0 rounded-lg bg-teal-400/10 transform transition-all duration-300 ${
                          location.pathname === link.to ? 'scale-100 opacity-100' : 'scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100'
                        }`}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(!isOpen);
                }}
                className="relative inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-teal-400 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 active:scale-95"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-6">
                  <Menu 
                    className={`absolute inset-0 w-6 h-6 transform transition-all duration-300 ${
                      isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                    }`}
                  />
                  <X 
                    className={`absolute inset-0 w-6 h-6 transform transition-all duration-300 ${
                      isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1 bg-black/98 backdrop-blur-md border-t border-gray-800">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                onClick={handleLinkClick}
                className={`group relative w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-95 block ${
                  location.pathname === link.to
                    ? 'text-teal-400 font-bold bg-teal-400/10'
                    : 'text-white hover:text-teal-400 hover:bg-gray-800/50'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                }}
              >
                <span className="relative z-10">{link.label}</span>
                
                {/* Active indicator */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-blue-400 rounded-r-full transform transition-all duration-300 ${
                    location.pathname === link.to ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-50'
                  }`}
                />
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/5 to-blue-400/5 rounded-lg transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
              </Link>
            ))}
            
            {/* Mobile menu decoration */}
            <div className="flex justify-center pt-4">
              <div className="w-12 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full opacity-30" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Add keyframes for mobile menu animation */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;