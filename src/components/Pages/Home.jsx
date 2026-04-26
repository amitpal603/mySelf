import React, { useEffect, useState } from "react";
import { Instagram, Twitter, Linkedin, Github, ArrowRight } from "lucide-react";
import photo from '/src/assets/photo.jpg';
import Aboutme from "./Aboutme";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTech, setCurrentTech] = useState(0);
  
  const technologies = [
    "HTML5", "CSS3", "JavaScript", "React JS", "Node.js", 
    "MongoDB", "Express", "TailwindCSS", "Next.js"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTech(prev => (prev + 1) % technologies.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <div className="min-h-screen w-full bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] w-full flex items-center justify-center overflow-hidden px-6 pt-20">
        
        {/* Advanced Mesh Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-500/20 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[120px] animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[150px] animate-pulse delay-1000" />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/10 border border-teal-400/20 text-teal-400 text-xs font-semibold tracking-wider uppercase animate-bounce">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                </span>
                Available for projects
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                Crafting <span className="text-teal-gradient">Digital</span><br />
                Experiences.
              </h1>
              
              <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Hi, I'm <span className="text-white font-bold">Amit Pal</span>. A Full Stack Developer 
                dedicated to building high-performance, interactive web applications with 
                <span className="text-teal-400 font-semibold block sm:inline ml-1">
                  {technologies[currentTech]}
                </span>
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button className="px-8 py-4 bg-teal-400 hover:bg-teal-500 text-black font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xl shadow-teal-500/20">
                View Projects <ArrowRight size={20} />
              </button>
              
              <div className="flex items-center gap-3">
                {[
                  { icon: Instagram, href: "https://www.instagram.com/simple_smile_heart/" },
                  { icon: Twitter, href: "https://x.com/PalAmit92585" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/amit-pal-82b1a8271/" },
                  { icon: Github, href: "#" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href}
                    className="w-12 h-12 glass flex items-center justify-center rounded-2xl text-gray-400 hover:text-teal-400 hover:border-teal-400/50 transition-all hover:-translate-y-1"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="flex justify-center items-center">
            <div className="relative group animate-float">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-teal-400 to-blue-500 rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
              
              {/* Main Card */}
              <div className="glass-teal relative w-72 h-96 md:w-80 md:h-[450px] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700">
                <img 
                  src={photo} 
                  alt="Amit Pal" 
                  className="w-full h-full object-cover filter contrast-110 brightness-90 group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white">Amit Pal</h3>
                  <p className="text-teal-400 text-sm font-medium">Full Stack Architect</p>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 glass-teal flex items-center justify-center rounded-2xl border border-teal-400/20 shadow-xl animate-bounce delay-300">
                 <div className="w-8 h-8 bg-teal-400 rounded-lg rotate-12" />
              </div>
              <div className="absolute -bottom-6 -left-6 px-4 py-2 glass-teal flex items-center gap-2 rounded-xl border border-blue-400/20 shadow-xl">
                 <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                 <span className="text-xs font-bold text-white tracking-widest uppercase">Creative</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Integration */}
      <div className="relative z-10 -mt-10 pb-20">
        <Aboutme />
      </div>
    </div>
  );
}

export default Home;