import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const buttonRef = useRef(null);

  // Close the menu if clicked outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current && !navbarRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); 
    }
  };

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-10 top-0 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4" ref={navbarRef}>
        <h1 className="text-2xl font-bold tracking-wide">Portfolio.</h1>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            ref={buttonRef}
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu for dektop and mobil*/}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 space-y-4 md:space-y-0 absolute md:static top-0 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0`}
        >
          <li>
            <button
              onClick={() => handleScroll("about")}
              className="hover:text-gray-400 transition-all duration-300 ease-in-out"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("portfolio")}
              className="hover:text-gray-400 transition-all duration-300 ease-in-out"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("skills")}
              className="hover:text-gray-400 transition-all duration-300 ease-in-out"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("contact")}
              className="hover:text-gray-400 transition-all duration-300 ease-in-out"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
