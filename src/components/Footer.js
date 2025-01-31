import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Santhoshkumar</h3>
          <p className="text-sm">Crafting web solutions with passion & dedication.</p>
        </div>

        {/* Middle Section */}
        <div className="mb-4 md:mb-0 flex space-x-4">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#resume" className="hover:text-gray-400">
            Resume
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-gray-400" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-400" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="hover:text-gray-400" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-4">
        © {new Date().getFullYear()} Santhoshkumar. All Rights Reserved.
      </div>
    </footer>
  );
}
