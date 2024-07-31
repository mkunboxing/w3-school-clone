"use client";
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const subMenuRef = useRef(null);

 
  const scrollLeft = () => {
    subMenuRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    subMenuRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  const handleMouseDownLeft = () => {
    scrollLeft();
    document.addEventListener('mouseup', handleMouseUpLeft);
  };

  const handleMouseUpLeft = () => {
    document.removeEventListener('mouseup', handleMouseUpLeft);
    // Additional logic when mouse is released can be added here
  };

  const handleMouseDownRight = () => {
    scrollRight();
    document.addEventListener('mouseup', handleMouseUpRight);
  };

  const handleMouseUpRight = () => {
    document.removeEventListener('mouseup', handleMouseUpRight);
    // Additional logic when mouse is released can be added here
  };
  
  const menuItems = ["Tutorials", "Exercises", "Certificates", "Services"];
  const subMenuItems = [
    "HTML", "CSS", "JavaScript", "SQL", "Python", "Java", "PHP", "How To", 
    "W3.CSS", "C", "C++", "C#", "Bootstrap", "React", "MySQL", "jQuery", 
    "Excel", "XML", "Node.js", "Ruby", "Swift", "Go", "Kotlin", "R", "TypeScript",
    "Django", "Flask", "Spring", "Vue.js", "Angular", "Next.js", "Nuxt.js"
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <header className="w-full">
      <nav className="bg-white shadow-md">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <Image
              src="/images/w3school_logo.png"
              alt="Logo"
              width={50}
              height={50}
              priority={true}
            />
          </div>
          <div className="flex items-center justify-between flex-grow">
            <div className="hidden md:flex ml-6 space-x-4">
              {menuItems.map((item, index) => (
                <Link key={index} href={`/${item.toLowerCase()}`} className="text-black font-bold">
                  {item}
                </Link>
              ))}
            </div>
            <div className="mx-auto flex items-center space-x-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
              <div className="flex border rounded w-4 md:w-auto">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 border-none rounded-l w-full md:w-80"
                />
                <button className="px-4 py-2 bg-gray-200 rounded-r">🔍</button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-green-500 text-white rounded">Sign Up</button>
              <button className="px-4 py-2 bg-gray-200 rounded">Log in</button>
            </div>
            <button className="md:hidden ml-4" onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white shadow-md p-4 ">
            {menuItems.map((item, index) => (
              <Link key={index} href={`/${item.toLowerCase()}`} className="block text-black font-bold py-2">
                {item}
              </Link>
            ))}
          </div>
        )}
        <div className="relative bg-gray-800 flex items-center">
          <button
            onClick={handleMouseDownLeft}
            className="text-white p-2 focus:outline-none"
          >
            &lt;
          </button>
          <div ref={subMenuRef} className="flex overflow-x-auto no-scrollbar space-x-4 px-4 ">
            {subMenuItems.map((item, index) => (
              <Link key={index} href={`/${item.toLowerCase()}`} className="px-4 py-2 text-white font-bold whitespace-nowrap hover:bg-gray-700">
                {item}
              </Link>
            ))}
          </div>
          <button
            onClick={handleMouseDownRight}
            className="text-white p-2 focus:outline-none"
          >
            &gt;
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
