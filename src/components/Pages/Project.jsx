import React, { useState } from 'react';
import { Search, ExternalLink, Github, Calendar, Tag, Layers, Rocket, Monitor } from 'lucide-react';

function Project() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'web', 'mobile', 'design'];

  const projects = [
    {
      id: 1,
      title: 'TaskFlow Pro',
      description: 'A sophisticated task-management ecosystem with real-time sync, intuitive drag-and-drop, and team collaboration features.',
      image: 'https://bluinsights.aws/uploads/create_new_todos_project_Copie_03841e919d.png',
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      date: 'Nov 2025',
      github: [
        { name: 'Frontend', url: 'https://github.com/amitpal603/frontend.git' },
        { name: 'Backend', url: 'https://github.com/amitpal603/backend.git' }
      ],
      demo: 'https://frontend-algg.vercel.app/'
    },
    {
      id: 2,
      title: 'RPS Master',
      description: 'An interactive Rock Paper Scissors experience featuring advanced computer AI, smooth CSS animations, and score persistence.',
      image: 'https://static.vecteezy.com/system/resources/previews/010/307/906/non_2x/hands-playing-rock-paper-scissors-game-flat-design-style-illustration-vector.jpg',
      category: 'web',
      tags: ["React", "Framer Motion", "Tailwind"],
      date: 'June 2025',
      github: 'https://github.com/amitpal603/rock-pepar.git',
      demo: 'https://rock-pepar-zma4.vercel.app/'
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/20 text-teal-400 text-xs font-bold tracking-widest uppercase">
                Portfolio
             </div>
             <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
                Featured <span className="text-teal-gradient">Creations</span>
             </h1>
             <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                A selection of my most architectural projects, ranging from full-stack ecosystems 
                to interactive digital experiences.
             </p>
          </div>

          {/* Search & Filter Ecosystem */}
          <div className="max-w-3xl mx-auto space-y-6">
             <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-teal-400 transition-colors" size={20} />
                <input
                  type="text"
                  placeholder="Search by title, technology or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 glass rounded-2xl border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400/50 focus:ring-4 focus:ring-teal-400/10 transition-all"
                />
             </div>

             <div className="flex flex-wrap justify-center gap-3">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-6 py-2.5 rounded-xl font-bold text-sm tracking-widest uppercase transition-all ${
                      activeFilter === category
                        ? 'bg-teal-400 text-black shadow-lg shadow-teal-500/20 scale-105'
                        : 'glass text-gray-400 border border-white/5 hover:bg-white/5'
                    }`}
                  >
                    {category}
                  </button>
                ))}
             </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-40 glass rounded-[3rem] border border-dashed border-white/10">
            <Monitor className="mx-auto text-gray-700 mb-6" size={64} />
            <p className="text-gray-400 text-xl font-medium tracking-tight">No projects found matching your criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass group relative rounded-[2.5rem] border border-white/5 overflow-hidden hover:border-teal-400/30 transition-all duration-700 hover:-translate-y-2 shadow-2xl"
              >
                {/* Image & Overlay */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-black text-teal-400 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 space-y-6">
                  <div className="flex items-center gap-3 text-teal-400/60 text-xs font-bold uppercase tracking-widest">
                    <Calendar size={14} />
                    <span>{project.date}</span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-white tracking-tighter group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm lg:text-base line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-1.5 bg-white/5 rounded-lg text-[10px] sm:text-xs font-bold text-gray-300 border border-white/5 tracking-wider uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href={project.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className="flex-1 px-8 py-3.5 bg-white text-black font-black text-sm text-center rounded-2xl transition-all hover:bg-teal-400 hover:scale-105 active:scale-95 shadow-xl shadow-teal-500/10 flex items-center justify-center gap-2"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                    
                    <div className="flex gap-2">
                      {Array.isArray(project.github) ? (
                        project.github.map((repo, idx) => (
                          <a
                            key={idx}
                            href={repo.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className="flex items-center justify-center gap-2 px-4 py-3.5 glass border border-white/5 text-gray-300 rounded-2xl hover:text-white hover:border-white/20 transition-all font-bold text-[10px] uppercase tracking-widest"
                          >
                            <Github size={18} /> {repo.name}
                          </a>
                        ))
                      ) : (
                        <a
                          href={project.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          className="px-5 py-3.5 glass border border-white/5 text-gray-300 rounded-2xl hover:text-white hover:border-white/20 transition-all"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Call to Action */}
      <div className="mt-32 max-w-5xl mx-auto px-6">
         <div className="glass p-12 md:p-20 rounded-[3rem] border border-white/10 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-teal-400/20 group-hover:text-teal-400/40 transition-colors">
               <Rocket size={120} />
            </div>
            <div className="relative z-10 space-y-8">
               <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                  Got a vision for <span className="text-teal-gradient">Success?</span>
               </h2>
               <p className="text-gray-400 text-lg max-w-xl mx-auto font-light">
                  I'm currently accepting new projects and collaborations. Let's build 
                  something that stands out in the digital landscape.
               </p>
               <button className="px-12 py-5 bg-teal-400 hover:bg-teal-500 text-black font-black rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-teal-500/30">
                  Start a Conversation
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}

export default Project;