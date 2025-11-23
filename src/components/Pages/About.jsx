import React from "react";
import { Code, Database, Globe, Layers, Zap, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

function About() {
  const skills = [
    { name: "Frontend", icon: Globe, items: ["React.js", "Tailwind CSS", "JavaScript"] },
    { name: "Backend", icon: Database, items: ["Node.js", "Express", "MongoDB", "mySql"] },
    { name: "Tools", icon: Layers, items: ["Git", "Postman"] }
  ];

  const highlights = [
    { icon: Code, title: "Clean Code", description: "Writing maintainable and scalable solutions" },
    { icon: Zap, title: "Performance", description: "Optimizing for speed and efficiency" },
    { icon: Award, title: "Quality", description: "Delivering excellence in every project" }
  ];
  const navigate = useNavigate()
  return (
    <div className="flex flex-col">
      {/* Hero Section with Gradient */}
      <div className="relative mt-20 bg-gradient-to-b from-black via-cyan-950 to-cyan-600 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">Me</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Full Stack Developer passionate about building elegant digital solutions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-gradient-to-b from-cyan-600 via-cyan-700 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction Card */}
          <div className="bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 md:p-12 mb-16 shadow-2xl shadow-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Hello, I'm a <span className="text-cyan-400">Full Stack Developer</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Motivated and detail-oriented Full Stack Developer with a strong foundation in both frontend and backend technologies. 
              Experienced in designing and deploying responsive, user-focused web applications using React.js and Node.js.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Proficient in developing RESTful APIs, optimizing database performance, and enhancing scalability. Passionate about 
              continuous learning and delivering high-quality digital solutions that create measurable impact.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-900/60 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Technical <span className="text-cyan-400">Skills</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
                    </div>
                    <div className="space-y-3">
                      {skill.items.map((item, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm border border-cyan-500/40 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to collaborate on innovative projects and bring creative ideas to life through code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate("/project")} className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black rounded-lg hover:from-cyan-400 hover:to-cyan-300 transition-all duration-200 font-semibold shadow-lg shadow-cyan-500/50">
                View Projects
              </button>
              <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-semibold border border-cyan-500/30">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;