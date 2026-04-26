import React from 'react';

function About1() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 px-8 sm:px-12 py-16 items-center">
      {/* Side Label */}
      <div className="lg:w-1/4 flex flex-col items-center lg:items-start space-y-4">
        <h2 className="text-4xl font-black text-white tracking-tighter">ABOUT</h2>
        <div className="h-1 w-12 bg-teal-400 rounded-full" />
      </div>

      {/* Main Narrative */}
      <div className="lg:w-3/4 space-y-6">
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
          I'm <span className="text-white font-bold border-b-2 border-teal-400/50 pb-1">Amit Pal</span>, 
          a digital craftsman focused on bridging the gap between design and functionality.
        </p>
        <p className="text-base md:text-lg text-gray-400 leading-loose">
          Specializing in the <span className="text-white font-medium">MERN Stack</span>, 
          I build scalable applications that are as beautiful as they are robust. 
          My process involves meticulous attention to UI/UX, ensuring that every 
          interaction feels intentional and fluid. From 
          <span className="text-teal-400 mx-1">React animations</span> to 
          <span className="text-teal-400 mx-1">Node.js architecture</span>, 
          I thrive on solving complex problems with elegant code.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-6">
          {['Scalable Architecture', 'Responsive Design', 'Interactive UI'].map((feature, i) => (
            <div key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-teal-300 tracking-wider uppercase">
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About1;

