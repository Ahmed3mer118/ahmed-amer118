import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
  };

  const closeNavbar = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-blue-400 transition-colors">
          Ahmed Amer
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `hover:text-blue-400 transition-colors ${isActive ? "text-blue-400 font-medium" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `hover:text-blue-400 transition-colors ${isActive ? "text-blue-400 font-medium" : ""}`
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `hover:text-blue-400 transition-colors ${isActive ? "text-blue-400 font-medium" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink 
                to="/skills" 
                onClick={closeNavbar}
                className={({ isActive }) => 
                  `hover:text-blue-400 transition-colors ${isActive ? "text-blue-400 font-medium" : ""}`
                }
              >
                Skills
              </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `hover:text-blue-400 transition-colors ${isActive ? "text-blue-400 font-medium" : ""}`
            }
          >
            Contact Me
          </NavLink>
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={toggleNavbar}
        >
          <FaBars className="text-xl" />
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-800 py-4 px-6 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                onClick={closeNavbar}
                className={({ isActive }) => 
                  `hover:text-blue-400 transition-colors ${isActive ? "text-blue-400 font-medium" : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/projects" 
                onClick={closeNavbar}
                className={({ isActive }) => 
                  `hover:text-blue-400 transition-colors ${isActive ? "text-blue-400 font-medium" : ""}`
                }
              >
                Projects
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={closeNavbar}
                className={({ isActive }) => 
                  `hover:text-blue-400 transition-colors ${isActive ? "text-blue-400 font-medium" : ""}`
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/skills" 
                onClick={closeNavbar}
                className={({ isActive }) => 
                  `hover:text-blue-400 transition-colors ${isActive ? "text-blue-400 font-medium" : ""}`
                }
              >
                Skills
              </NavLink>
              <NavLink 
                to="/contact" 
                onClick={closeNavbar}
                className={({ isActive }) => 
                  `hover:text-blue-400 transition-colors ${isActive ? "text-blue-400 font-medium" : ""}`
                }
              >
                Contact Me
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;