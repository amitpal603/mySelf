import React, { useEffect, useState } from "react";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import photo  from '/src/assets/photo.jpg'

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTech, setCurrentTech] = useState(0);
  
  const technologies = [
    "HTML", "CSS", "JavaScript", "React JS", "Node.js", 
    "MongoDB", "Express JS", "Tailwind CSS", "MySQL"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentTech(prev => (prev + 1) % technologies.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-teal-400 flex justify-center items-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className={`relative z-10 w-full max-w-7xl mx-auto transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Desktop and Tablet Layout */}
        <div className="hidden md:flex bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl shadow-teal-400/20 border border-gray-700/50 min-h-[500px] overflow-hidden">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center space-y-6">
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <h1 className="text-2xl lg:text-3xl text-white font-bold">
                Hello, I'm{" "}
                <span className="block text-4xl lg:text-5xl text-teal-400 mt-2 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Amit Pal
                </span>
              </h1>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <h2 className="text-lg lg:text-xl text-white font-medium">
                I am a Full Stack Developer{" "}
                <span className="block mt-2 text-teal-400 font-bold text-xl lg:text-2xl min-h-[2rem]">
                  <span className="inline-block animate-bounce">
                    {technologies[currentTech]}
                  </span>
                  <span className="animate-pulse ml-1">_</span>
                </span>
              </h2>
            </div>

            {/* Social Links */}
            <div className={`flex gap-4 pt-4 transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              {[
                { href: "https://www.instagram.com/simple_smile_heart/", icon: Instagram, label: "Instagram" },
                { href: "https://x.com/PalAmit92585", icon: Twitter, label: "Twitter" },
                { href: "https://www.linkedin.com/in/amit-pal-82b1a8271/", icon: Linkedin, label: "LinkedIn" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 flex items-center justify-center border-2 border-teal-400 rounded-full text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon size={20} />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="hidden md:flex w-1/2 items-center justify-center p-8">
            <div className={`relative transform transition-all duration-1000 delay-900 ${
              isVisible ? 'translate-x-0 opacity-100 rotate-12' : 'translate-x-10 opacity-0 rotate-0'
            }`}>
              <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl shadow-2xl shadow-teal-400/30 transform rotate-12 hover:rotate-6 transition-transform duration-500 overflow-hidden group">
                <div className="w-full h-full bg-gray-300 rounded-2xl transform -rotate-12 scale-105 flex items-center justify-center text-gray-600 group-hover:scale-110 transition-transform duration-500">
                  {/* Placeholder for profile image */}
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-400 rounded-full mx-auto mb-4 flex justify-center items-center">
                      <img 
                      className="object-cover h-30 w-30 rounded-full"
                      src={photo} alt="Profile Photo" />
                    </div>
                    <p className="text-sm"></p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-400 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-1500"></div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-2xl shadow-teal-400/20 border border-gray-700/50 p-6 space-y-8">
          
          {/* Profile Image - Mobile */}
          <div className="flex justify-center">
            <div className={`relative transform transition-all duration-1000 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
              <div className="w-48 h-48 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl shadow-xl shadow-teal-400/30 transform rotate-6 hover:rotate-3 transition-transform duration-500 overflow-hidden">
                <div className="w-full h-full bg-gray-300 rounded-2xl transform -rotate-6 scale-105 flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gray-400 rounded-full mx-auto mb-2">
                    <img 
                      className="object-cover h-30 w-30 rounded-full"
                      src={photo} alt="Profile Photo" />
                    </div>
                    <p className="text-xs"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Mobile */}
          <div className="text-center space-y-6">
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              <h1 className="text-xl text-white font-bold">
                Hello, I'm{" "}
                <span className="block text-3xl text-teal-400 mt-2 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  Amit Pal
                </span>
              </h1>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              <h2 className="text-base text-white font-medium">
                I am a Full Stack Developer
                <span className="block mt-3 text-teal-400 font-bold text-lg min-h-[1.5rem]">
                  <span className="inline-block animate-bounce">
                    {technologies[currentTech]}
                  </span>
                  <span className="animate-pulse ml-1">_</span>
                </span>
              </h2>
            </div>

            {/* Social Links - Mobile */}
            <div className={`flex justify-center gap-6 pt-4 transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              {[
                { href: "https://www.instagram.com/simple_smile_heart/", icon: Instagram },
                { href: "https://x.com/PalAmit92585", icon: Twitter },
                { href: "https://www.linkedin.com/in/amit-pal-82b1a8271/", icon: Linkedin }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border-2 border-teal-400 rounded-full text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;