import React from "react";
import About1 from "../Extra/About1";
import Skill1 from "../Extra/Skill1";

function Aboutme() {
  return (
    <div className=" gap-10 flex-col min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-blue-900 flex  items-center p-4 relative overflow-hidden">
      <section className=" rounded-2xl mt-10 h-auto md:h-50 w-[85%] shadow-lg bg-gray-800/80 ">
        <About1/>
      </section>
      <div className="flex justify-center gap-4 mt-12">
        <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-200"></div>
        <div className="w-3 h-3 bg-teal-400 rounded-full animate-bounce delay-400"></div>
      </div>
      <section  className="rounded-2xl mt-10 md:h-50 h-auto px-1 w-[85%] shadow-lg bg-gray-800/80 ">
        <Skill1/>
      </section>
    </div>
  );
}

export default Aboutme;
