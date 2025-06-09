import React from "react";
import portfolioImage from "/image/profile_image.png";
// import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
// import { FiMail } from "react-icons/fi";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import Skills from "./Skills";
import { FaInstagram,  FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";


function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-xl md:text-2xl font-medium text-blue-400">Hello, My name's</h2>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Ahmed Amer
            </h1>
            <h3 className="text-2xl md:text-3xl font-medium text-gray-300">
              Frontend <span className="text-blue-400">React</span> Developer
            </h3>
            <p className="text-gray-400 text-lg max-w-lg">
              I build exceptional digital experiences with modern web technologies.
              Passionate about creating responsive, user-friendly interfaces.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://api.whatsapp.com/send?phone=201033705805"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 text-blue-400 hover:text-white"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a
                href="https://instagram.com/ahmed_3amer118?igshid=MzNlNGNkZWQ4Mg=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 text-pink-500 hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-amer-884242289"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 text-blue-500 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://github.com/ahmed3mer118"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 text-gray-300 hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
            
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="/projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-900/30 rounded-lg font-medium transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <img
                src={portfolioImage}
                alt="Ahmed Amer"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-blue-400/30 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default Home;