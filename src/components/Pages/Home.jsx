import React, { useEffect, useState } from 'react'
import {Typewriter} from 'react-simple-typewriter'
import { LuInstagram } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Home() {
  const [color,setColor] = useState('')
  const HandleColor = () => {
    let color = ['#f50538','#4bcdcf','#8e98f5','#b6e2d3']
    let randomColor = Math.floor(Math.random()*color.length)
    setColor(color[randomColor])
  }

  useEffect(() => {
    setInterval(() => {
    HandleColor()
  },3000)
  },[])
  return (
    <div className=" mt-20 flex justify-center items-center h-screen w-screen bg-gradient-to-b from-black to-[#4bcdcf] fixed left-0 top-0 z-50">
      <div className="flex  h-[70%] w-[80%] rounded-md shadow-lg bg-gray-700 shadow-[#4bcdcf]">
        
        {/* left side */}
        <div className="w-[50%] h-full  rounded-md flex justify-center items-center flex-col">
          <h1 className='text-2xl  text-white font-bold flex flex-col gap-2'>Hello,i'm <span className='text-4xl text-[#4bcdcf]'>Amit Pal</span></h1>
          <h1 className='text-xl text-white font-bold'>I am a Full Stack Developer  {''}

            <span style={{color:'#4bcdcf',fontWeight:'bold'}}>
            <Typewriter
            words={['Html','Css','Javascript','React Js','Node js','MongoDB','Express JS','TailwindCSS','MySQL']}
            loop={true}
            typeSpeed={75}
            deleteSpeed={90}
            delaySpeed={1000} 
            cursor
            cursorStyle='_'
            />
            </span>
          </h1>
          
          <div className='mt-10 flex gap-10'>
              {
                [
                  {to:'https://www.instagram.com/simple_smile_heart/',logo: <LuInstagram/>},
                  {to:'https://x.com/PalAmit92585',logo:<BsTwitterX />},
                  {to:'https://www.linkedin.com/in/amit-pal-82b1a8271/',logo:<FaLinkedinIn />}
                ].map((link,i) => (
                  <div key={i} className='h-15 w-15 rounded-full flex justify-center items-center border-4 border-[#4bcdcf] hover:bg-[#4bcdcf] hover:text-white transition-all duration-300 ease-in-out text-[#4bcdcf]'>
                    <Link to={link.to}>
                    {link.logo}
                    </Link>
                  </div>
                ))
              }
          </div>
        </div>
        
        {/* right side */}
        <div className="w-[60%] h-full bg-blue-300 rounded-md flex justify-center items-center">
          <div className='h-30 w-30 rounded-full  border-4' style={{backgroundColor:`${color}`}} ></div>
        </div>

      </div>
    </div>
  )
}

export default Home
