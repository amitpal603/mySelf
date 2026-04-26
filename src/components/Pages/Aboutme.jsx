import React from "react";
import About1 from "../Extra/About1";
import Skill1 from "../Extra/Skill1";

function Aboutme() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full px-6 gap-12 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* About Card */}
      <section className="relative z-10 w-full max-w-5xl glass rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <About1 />
      </section>

      {/* Decorative Divider */}
      <div className="flex items-center gap-4 py-4">
        <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-teal-400/30" />
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-teal-400/40 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-blue-400/40 animate-pulse delay-150" />
          <div className="w-2 h-2 rounded-full bg-purple-400/40 animate-pulse delay-300" />
        </div>
        <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-teal-400/30" />
      </div>

      {/* Skills Card */}
      <section className="relative z-10 w-full max-w-5xl glass rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden group p-10 md:p-12">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <Skill1 />
      </section>
    </div>
  );
}

export default Aboutme;


