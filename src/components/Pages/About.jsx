import React from "react";
import { Code, Database, Globe, Layers, Zap, Award, Target, Rocket, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const skills = [
    { name: "Frontend", icon: Globe, items: ["React.js", "Tailwind CSS", "JavaScript", "TypeScript"], color: "from-teal-400 to-blue-500" },
    { name: "Backend", icon: Database, items: ["Node.js", "Express", "MongoDB", "MySQL"], color: "from-purple-500 to-pink-500" },
    { name: "Solutions", icon: Layers, items: ["System Design", "API Architecture", "Performance", "Security"], color: "from-orange-400 to-red-500" }
  ];

  const values = [
    { icon: Target, title: "Precision", description: "Meticulous attention to detail in every line of code as well as UI design." },
    { icon: Rocket, title: "Innovation", description: "Constantly exploring and implementing cutting-edge web technologies." },
    { icon: Heart, title: "Passion", description: "Dedicated to creating digital experiences that resonate with users." }
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden pt-20">
      {/* Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#2dd4bf15,transparent_40%),radial-gradient(circle_at_80%_80%,#60a5fa15,transparent_40%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8 animate-float">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/20 text-teal-400 text-xs font-bold tracking-widest uppercase">
              The Journey
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              Driven by <br />
              <span className="text-teal-gradient">Purpose.</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-xl">
              I'm <span className="text-white font-bold">Amit Pal</span>, a software engineer 
              who believes that technology should be as beautiful as it is functional. 
              My mission is to craft digital products that leave a lasting impression.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/20 to-blue-500/20 rounded-[3rem] blur-3xl animate-pulse" />
            <div className="glass p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl relative z-10">
               <div className="space-y-8">
                  <div className="w-16 h-1 w-24 bg-teal-400 rounded-full" />
                  <p className="text-gray-300 text-lg leading-loose italic">
                    "Every digital challenge is an opportunity to innovate. I don't just write code; 
                    I build interfaces that tell a story and solve real-world problems with elegance."
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-teal-400/20 border border-teal-400/40 flex items-center justify-center">
                        <Award className="text-teal-400" size={24} />
                     </div>
                     <div>
                        <p className="text-white font-bold">Amit Pal</p>
                        <p className="text-teal-400/60 text-xs font-bold uppercase tracking-widest">Full Stack Pioneer</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {values.map((item, index) => (
            <div key={index} className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-teal-400/30 transition-all group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-400 group-hover:text-black transition-all">
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Skill Matrix */}
        <div className="space-y-12">
          <div className="text-center">
             <h2 className="text-4xl font-black text-white tracking-tighter">TECHNICAL STACK</h2>
             <div className="h-1 w-24 bg-teal-400 mx-auto mt-4 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {skills.map((skill, index) => (
              <div key={index} className="glass overflow-hidden rounded-[2.5rem] border border-white/5 group">
                <div className={`h-2 w-full bg-gradient-to-r ${skill.color} opacity-30 group-hover:opacity-100 transition-opacity`} />
                <div className="p-10 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                      <skill.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{skill.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-white/5 rounded-xl text-sm text-gray-400 border border-white/5 group-hover:border-white/10 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-40 glass p-16 rounded-[3rem] border border-white/10 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/5 via-transparent to-blue-500/5" />
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 relative z-10">
            Let's build the <span className="text-teal-gradient">Future</span> Together.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <button 
              onClick={() => navigate("/project")} 
              className="px-10 py-5 bg-teal-400 hover:bg-teal-500 text-black font-black rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-teal-500/20"
            >
              Explore My Work
            </button>
            <button 
              onClick={() => navigate("/contact")}
              className="px-10 py-5 glass border border-white/10 text-white font-black rounded-2xl transition-all hover:bg-white/5"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;