import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 mt-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-bold">Santhoshkumar</h3>
          <p className="text-sm text-gray-400">Crafting web solutions with passion & dedication.</p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
          <a href="/" className="hover:text-gray-400 transition">Home</a>
          <a href="#about" className="hover:text-gray-400 transition">About</a>
          <a href="#projects" className="hover:text-gray-400 transition">Projects</a>
          <a href="#resume" className="hover:text-gray-400 transition">Experience</a>
          <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-xl hover:text-gray-400 transition">
            <FaFacebook />
          </a>
          <a href="#" className="text-xl hover:text-gray-400 transition">
            <FaTwitter />
          </a>
          <a href="#" className="text-xl hover:text-gray-400 transition">
            <FaLinkedin />
          </a>
          <a href="#" className="text-xl hover:text-gray-400 transition">
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} Santhoshkumar. All Rights Reserved.
      </div>
    </footer>
  );
}
