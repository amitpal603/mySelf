import React from 'react';

function Skill1() {
  const skills = [
    { name: "React", level: "90%" },
    { name: "Node.js", level: "85%" },
    { name: "MongoDB", level: "80%" },
    { name: "Express", level: "85%" },
    { name: "SQL", level: "75%" },
    { name: "Tailwind", level: "95%" },
    { name: "JS/TS", level: "88%" },
    { name: "Next.js", level: "70%" }
  ];

  return (
    <div className="space-y-12">
       {/* Heading */}
       <div className="flex flex-col items-center space-y-2">
        <span className="text-teal-400 text-sm font-bold tracking-[0.3em] uppercase">Core</span>
        <h2 className="text-4xl font-black text-white tracking-tighter">SKILLSET</h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-4 group">
            <div className="relative w-24 h-24 flex items-center justify-center">
              {/* Spinning Halo */}
              <div className="absolute inset-0 border-[3px] border-teal-400/20 rounded-full group-hover:border-teal-400/50 transition-colors duration-500" />
              <div 
                className="absolute inset-0 border-t-[3px] border-teal-400 rounded-full animate-spin shadow-[0_0_15px_rgba(45,212,191,0.3)] group-hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] transition-all duration-300"
                style={{ animationDuration: '3s' }}
              />
              
              {/* Inner Percentage Circle */}
              <div className="w-20 h-20 bg-black rounded-full flex flex-col items-center justify-center border border-white/5 shadow-inner">
                <span className="text-xs font-black text-teal-400">{skill.level}</span>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-white font-bold group-hover:text-teal-400 transition-colors">{skill.name}</p>
              <div className="w-4 h-[2px] bg-white/20 mx-auto mt-1 group-hover:w-8 group-hover:bg-teal-400 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill1;

