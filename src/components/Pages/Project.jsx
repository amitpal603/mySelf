import React, { useState } from 'react'
import { Search, ExternalLink, Github, Calendar, Tag } from 'lucide-react'

function Project() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['all', 'web']

  const projects = [
    {
      id: 1,
      title: 'Todos',
      description: 'A task-management application that allows users to create, organize, and track their todos with real-time updates,',
      image: 'https://bluinsights.aws/uploads/create_new_todos_project_Copie_03841e919d.png',
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB'],
      date: 'Nov 2025',
      github: [
        { name: 'Frontend', url: 'https://github.com/amitpal603/frontend.git' },
        { name: 'Backend', url: 'https://github.com/amitpal603/backend.git' }
      ],
      demo: 'https://frontend-algg.vercel.app/'
    },
    {
      id: 2,
      title: 'Rock Paper Scissors',
      description: 'A simple and interactive Rock Paper Scissors game built with React, allowing users to play against the computer with real-time results and smooth UI interactions.',
      image: 'https://static.vecteezy.com/system/resources/previews/010/307/906/non_2x/hands-playing-rock-paper-scissors-game-flat-design-style-illustration-vector.jpg',
      category: 'web',
      tags: ["React", "JavaScript"],
      date: 'June 2025',
      github: 'https://github.com/amitpal603/rock-pepar.git',
      demo: 'https://rock-pepar-zma4.vercel.app/'
    },
  ]

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-cyan-950 to-black'>
      {/* Hero Section */}
      <div className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-cyan-600/10'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20'>
          <div className='text-center'>
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6'>
              My <span className='bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent'>Projects</span>
            </h1>
            <p className='text-xl text-gray-300 max-w-2xl mx-auto mb-12'>
              Explore my portfolio of web applications, mobile apps, and design work
            </p>

            {/* Search Bar */}
            <div className='max-w-xl mx-auto relative'>
              <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='text'
                placeholder='Search projects...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12'>
        <div className='flex flex-wrap justify-center gap-3'>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-lg font-medium capitalize transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-cyan-500 to-cyan-400 text-black shadow-lg shadow-cyan-500/50'
                  : 'bg-gray-900 text-gray-300 hover:bg-gray-800 border border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
        {filteredProjects.length === 0 ? (
          <div className='text-center py-20'>
            <p className='text-gray-400 text-lg'>No projects found matching your criteria</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className='group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20'
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className='relative h-48 overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60'></div>
                  <div className='absolute top-4 right-4'>
                    <span className='px-3 py-1 bg-black/80 backdrop-blur-sm text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/50 capitalize'>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className='p-6'>
                  <div className='flex items-center gap-2 mb-3 text-gray-400 text-sm'>
                    <Calendar className='w-4 h-4' />
                    <span>{project.date}</span>
                  </div>

                  <h3 className='text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors'>
                    {project.title}
                  </h3>

                  <p className='text-gray-300 text-sm mb-4 line-clamp-3'>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className='flex flex-wrap gap-2 mb-6'>
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className='inline-flex items-center gap-1 px-2 py-1 bg-gray-800/50 text-cyan-300 text-xs rounded-md border border-gray-700'
                      >
                        <Tag className='w-3 h-3' />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className='flex gap-3'>
                    <a
                      href={project.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black rounded-lg hover:from-cyan-400 hover:to-cyan-300 transition-all duration-200 font-medium'
                    >
                      <ExternalLink className='w-4 h-4' />
                      Demo
                    </a>
                    
                    {Array.isArray(project.github) ? (
                      <div className='flex gap-2'>
                        {project.github.map((repo, idx) => (
                          <a
                            key={idx}
                            href={repo.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center justify-center gap-1 px-3 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 border border-gray-700 text-xs font-medium'
                            title={repo.name}
                          >
                            <Github className='w-4 h-4' />
                            <span>{repo.name}</span>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 border border-gray-700'
                      >
                        <Github className='w-4 h-4' />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
        <div className='bg-gradient-to-r from-cyan-500/20 to-cyan-600/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 md:p-12 text-center'>
          <h2 className='text-3xl font-bold text-white mb-4'>
            Have a project in mind?
          </h2>
          <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
            Let's work together to bring your ideas to life. I'm always open to discussing new projects and opportunities.
          </p>
          <button className='px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black rounded-lg hover:from-cyan-400 hover:to-cyan-300 transition-all duration-200 font-medium shadow-lg shadow-cyan-500/50'>
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  )
}

export default Project