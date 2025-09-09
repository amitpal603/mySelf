import React from 'react'

function About1() {
  return (
    
      <div className="flex flex-col gap-3 px-4 sm:px-8 md:px-16 lg:px-32 py-12">
        {/* Heading */}
        <div className="flex justify-center">
          <h1 className="text-2xl sm:text-2xl  md:text-3xl text-white font-bold text-center">
            About Me
          </h1>
        </div>

        {/* Paragraph */}
        <div className="max-w-4xl mx-auto h-auto ">
          <p className="mb-3 text-white text-base sm:text-lg md:text-base leading-relaxed text-justify font-mono">
            Hello, I&apos;m{" "}
            <span className="font-semibold text-[#4bcdcf]">AMIT PAL</span>. 
            I am a passionate{" "}
            <span className="font-semibold">Full Stack Web Developer</span>, skilled at
            creating interactive and animated websites using technologies like{" "}
            <span className="font-semibold">HTML, CSS, JavaScript, and React</span>. For
            backend development, I use{" "}
            <span className="font-semibold">Node.js</span> with the{" "}
            <span className="font-semibold">Express.js</span> framework and manage data
            using both relational and non-relational databases such as{" "}
            <span className="font-semibold">SQL</span> and{" "}
            <span className="font-semibold">MongoDB</span>.
          </p>
        </div>
      </div>
    
  )
}

export default About1
