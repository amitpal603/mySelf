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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-3 bg-black/40 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-teal-500/10' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link to="/" className="group flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-teal-500/20">
                <span className="text-black font-black text-xl">A</span>
              </div>
              <span className="text-white text-2xl font-bold tracking-tight">
                PORT<span className="text-teal-400">folio</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative group ${
                    location.pathname === link.to 
                      ? 'text-teal-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {location.pathname === link.to && (
                    <div className="absolute inset-0 bg-teal-400/10 rounded-full blur-[2px] border border-teal-400/20" />
                  )}
                  <div className={`absolute bottom-1 left-1.2 right-1.2 h-[2px] bg-teal-400 transition-all duration-300 origin-left ${
                    location.pathname === link.to ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-50'
                  }`} />
                </Link>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-teal-400 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed inset-x-0 top-[72px] p-6 transition-all duration-500 transform ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
          }`}
        >
          <div className="glass-teal rounded-3xl p-4 space-y-2 border border-teal-400/10 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-4 rounded-2xl text-lg font-medium transition-all ${
                  location.pathname === link.to 
                    ? 'bg-gradient-to-r from-teal-400/20 to-blue-400/20 text-teal-400 border border-teal-400/20' 
                    : 'text-gray-300 hover:bg-white/5 active:scale-95'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;