import React from 'react';
import { Code2, Server, Database, Layers, Cpu, Globe } from 'lucide-react';

function Skill() {
  const skills = [
    {
      title: 'Frontend Development',
      icon: Code2,
      delay: '0.1s',
      technologies: [
        { name: 'React.js', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript (ES6+)', level: 88 },
        { name: 'Next.js', level: 75 },
        { name: 'TypeScript', level: 70 }
      ],
      gradient: 'from-teal-400 to-blue-500'
    },
    {
      title: 'Backend Systems',
      icon: Server,
      delay: '0.2s',
      technologies: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 82 },
        { name: 'REST APIs', level: 90 },
        { name: 'Authentication', level: 80 }
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      delay: '0.3s',
      technologies: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 78 },
        { name: 'Prisma/Mongoose', level: 80 },
        { name: 'Cloudinary', level: 75 }
      ],
      gradient: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <div className="relative min-h-screen bg-black pt-32 pb-20 overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-teal-500/10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-500/10 blur-[150px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-block px-4 py-1 rounded-full bg-teal-400/10 border border-teal-400/20 text-teal-400 text-sm font-bold tracking-widest uppercase">
            Expertise
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            Technical <span className="text-teal-gradient">Proficiency</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and proficiency across different 
            layers of web development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-teal-400/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
              
              <div className="relative z-10 space-y-8">
                {/* Icon Circle */}
                <div className={`w-16 h-16 bg-gradient-to-br ${skill.gradient} rounded-2xl flex items-center justify-center text-black shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
                  <skill.icon size={32} />
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{skill.title}</h3>
                  <div className="space-y-5">
                    {skill.technologies.map((tech, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-300 font-medium">{tech.name}</span>
                          <span className="text-teal-400 font-black">{tech.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                            style={{ width: `${tech.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 glass-teal p-8 rounded-[2rem] border border-teal-400/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-teal-400 rounded-xl flex items-center justify-center text-black">
                <Globe size={24} />
             </div>
             <div>
                <h4 className="text-white font-bold">Continuous Learner</h4>
                <p className="text-teal-400/80 text-sm">Always exploring the next generation of web technologies.</p>
             </div>
          </div>
          <div className="flex gap-4">
             {['TypeScript', 'Docker', 'AWS', 'GraphQL'].map((tag, i) => (
               <span key={i} className="px-4 py-2 bg-white/5 rounded-lg text-xs font-bold text-gray-400">{tag}</span>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;