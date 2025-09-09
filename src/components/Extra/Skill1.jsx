import React from 'react'

function Skill1() {
  const skills = ["HTML", "CSS", "JS", "REACT", "NODE","SQL","MD"]

  return (
    <div className="flex flex-col gap-10">
      {/* Heading */}
      <div>
        <h1 className="text-white text-2xl text-center mt-3 font-bold">Skill</h1>
      </div>

      {/* Skills Section */}
      <div className="flex gap-10 justify-center items-center flex-wrap">
        {skills.map((skill, index) => (
          <div key={index} className="relative h-20 w-20 flex justify-center items-center">
            {/* Spinning border */}
            <div className="absolute h-20 w-20 border-t-4 border-teal-400 rounded-full animate-spin"></div>
            {/* Inner circle */}
            <div className="h-16 w-16 bg-black text-teal-400 rounded-full flex justify-center items-center font-bold hover:bg-teal-700 hover:text-white hover:cursor-pointer">
              {skill}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skill1
