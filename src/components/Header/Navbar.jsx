import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center h-20 shadow w-full bg-black  px-20">
        <div>
          <p className=" text-white text-2xl font-bold"> PORT <span className="text-[#4bcdcf]">folio</span> </p>
        </div>

        <ul className="flex justify-center items-center gap-12 mr-10">
            {
                [
                    { to:'/',label:'Home'},
                    { to:'/about',label:'About'},
                    { to:'/contact',label:'Contact'},
                    { to:'/skill',label:'Skill'},
                    { to:'/project',label:'Project'},
                    
                ].map((link,i) => (
                    <li key={i} className="text-white">
                        <NavLink to={link.to} className={({isActive}) => `text-[18px] ${isActive ? 'font-bold text-[#4bcdcf]':''}`}>
                            {link.label}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
