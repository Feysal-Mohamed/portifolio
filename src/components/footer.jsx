import React from "react";
import { NavLink } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-2 gap-8">

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className=" space-y-10 sm:flex sm:space-x-12 sm:space-y-0">
            <NavLink to="/">
            <li className="hover:text-blue-600 mb-2 transition-colors cursor-pointer">Home</li>
            </NavLink>
            <NavLink to="/about">
            <li className="hover:text-blue-600 mb-2  transition-colors cursor-pointer"> About </li>
            </NavLink>
            <NavLink to="/contact">
            <li className="hover:text-blue-600 mb-2  transition-colors cursor-pointer">Contact Us </li>
            </NavLink>
          </ul>
        </div>

        {/* Our Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Our Social Media</h3>
          <ul className="sm:space-x-12 sm:space-y-0 space-y-2 sm:flex">
            <li  className=" hover:text-blue-500">
                <i className="fab fa-facebook-f"></i>
                <span>Facebook</span>
            </li>
            <li  className=" hover:text-blue-500">
                <i className="fab fa-twitter"></i>
                <span>Twitter</span>
            </li>
            <li className=" hover:text-pink-500"> 
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
            </li>
            <li>
              <a href="https://wa.me/252612345678" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-green-500">
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
            </li>
            <li>
              <a href="mailto:fe@gmail.com" className="flex items-center space-x-2 hover:text-red-500">
                <i className="fas fa-envelope"></i>
                <span>Gmail</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom text */}
      <div className="text-center text-gray-400 mt-6 text-sm">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
