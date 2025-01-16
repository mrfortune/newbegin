'use client';


import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'; // Importing an icon from react-icons

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
       <nav className="text-white px-6 py-4 sticky top-0 z-50  w-full">
      <div className="container max-w-screen-2xl mx-auto flex justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">Worldshaker</div>

        {/* Hamburger Menu (Small Screens) */}
        <button
          className="block md:hidden text-white focus:outline-none"
          id="menu-toggle"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <ul className="hidden md:flex space-x-8 font-medium items-center">
          <li>
            <a href="/" className="hover:text-teal-400 transition-colors duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-teal-400 transition-colors duration-200">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-teal-400 transition-colors duration-200">
              Services
            </a>
          </li>
          <li>
            <a href="/portfolio" className="hover:text-teal-400 transition-colors duration-200">
              Portfolio
            </a>
          </li>
          <li>
          <a href="/contact" className="block text-white hover:text-teal-400 transition-colors duration-200">
          <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-black font-bold py-2 px-4 rounded-md hover:from-teal-500 hover:to-blue-600 transition">
                Contact
              </button>
              </a>
          </li>
        </ul>
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden mt-4 bg-gray-800 rounded-lg`} id="mobile-menu">
        <ul className="flex flex-col space-y-2 p-4">
          <li>
            <a href="/" className="block text-white hover:text-teal-400 transition-colors duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="block text-white hover:text-teal-400 transition-colors duration-200">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="block text-white hover:text-teal-400 transition-colors duration-200">
              Services
            </a>
          </li>
          <li>
            <a href="/portfolio" className="block text-white hover:text-teal-400 transition-colors duration-200">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/contact" className="block text-white hover:text-teal-400 transition-colors duration-200">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </header>
   
  );
};

export default Navbar;

