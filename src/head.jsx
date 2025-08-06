// Header.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const [isopen ,setIsopen]=useState(false)
    const handleisopen=()=>{
        setIsopen(!isopen)
    }
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto sm:flex hidden justify-between items-center p-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          MyLogo
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-gray-700 font-medium">
            <NavLink to="/">
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Home</li>
            </NavLink>
            <NavLink to="/about">
            <li className="hover:text-blue-600 transition-colors cursor-pointer"> About </li>
            </NavLink>
            <NavLink to="/contact">
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Contact Us </li>
            </NavLink>
          </ul>
        </nav>

      </div>

       <div className="max-w-7xl mx-auto sm:hidden flex justify-between items-center p-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          MyLogo
        </div>
        <i onClick={handleisopen} className="fa-solid fa-bars text-4xl"></i>

        {/* Navigation */}
        <nav style={{display:isopen===true ? "block":"none"}} className="absolute">
          <ul className=" flex flex-col space-y-5 ml-[140px] bg-slate-100 shadow-lg rounded-xl shadow-black mt-56  text-3xl px-6 py-4 text-gray-700 font-medium">
            <NavLink to="/">
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Home</li>
            </NavLink>
            <NavLink to="/about">
            <li className="hover:text-blue-600 transition-colors cursor-pointer"> About </li>
            </NavLink>
            <NavLink to="/contact">
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Contact Us </li>
            </NavLink>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;
