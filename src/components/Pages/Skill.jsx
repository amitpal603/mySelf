import React from 'react';
import { Code2, Server, Database } from 'lucide-react';

function Skill() {
  const skills = [
    {
      title: 'Frontend',
      icon: Code2,
      delay: '0s',
      technologies: [
        { name: 'Html', level: 80 },
        { name: 'Css', level: 50 },
        { name: 'JavaScript', level: 70 },
         { name: 'React', level: 70 },
        { name: 'Tailwind CSS', level: 60 }
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: Server,
      delay: '0.2s',
      technologies: [
        { name: 'Node.js', level: 50 },
        { name: 'Express.js', level: 60 },
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Database',
      icon: Database,
      delay: '0.4s',
      technologies: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 82 },
      ],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="mt-10 bg-gradient-to-br from-black via-gray-900 to-teal-400 min-h-screen flex flex-col justify-center items-center px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-16 animate-fadeInDown">
        <h2 className="text-4xl md:text-6xl font-bold text-white ">
          My <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={skill.title}
              className="group relative bg-gray-800/40 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 hover:border-teal-400/60 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20 animate-slideUpFade"
              style={{ animationDelay: skill.delay }}
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-all duration-500`}></div>
              
              {/* Icon Header */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                  <div className="relative bg-gray-700/50 p-4 rounded-2xl group-hover:bg-gray-600/50 transition-all duration-300">
                    <IconComponent 
                      size={48} 
                      className="text-teal-400 group-hover:text-white transition-all duration-300 animate-pulse-slow" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-center text-white mb-8 group-hover:text-teal-300 transition-colors duration-300">
                {skill.title}
              </h3>
              
              {/* Technologies with Progress Bars */}
              <div className="space-y-6">
                {skill.technologies.map((tech, techIndex) => (
                  <div 
                    key={tech.name}
                    className="animate-slideInLeft"
                    style={{ animationDelay: `calc(${skill.delay} + ${0.6 + techIndex * 0.1}s)` }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                        {tech.name}
                      </span>
                      <span className="text-teal-400 font-bold text-sm">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-700/60 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-3 bg-gradient-to-r ${skill.gradient} rounded-full relative animate-expandWidth transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-500/30`}
                          style={{ 
                            width: '0%',
                            animationDelay: `calc(${skill.delay} + ${0.8 + techIndex * 0.15}s)`,
                            '--target-width': `${tech.level}%`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom Accent */}
              <div className={`w-0 group-hover:w-full h-1 bg-gradient-to-r ${skill.gradient} rounded-full mt-8 mx-auto transition-all duration-700`}></div>
            </div>
          );
        })}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-teal-400/40 rounded-full animate-ping"></div>
      <div className="absolute top-32 right-16 w-3 h-3 bg-cyan-400/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-24 left-24 w-4 h-4 bg-blue-400/20 rounded-full animate-bounce"></div>
      
      <style jsx>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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
        
        @keyframes expandWidth {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .animate-slideUpFade {
          animation: slideUpFade 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 1s ease-out both;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out both;
        }
        
        .animate-expandWidth {
          animation: expandWidth 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Skill;