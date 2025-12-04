import React from "react";
import portfolioImage from "/image/profile_image.png";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  const showFooter = location.pathname === "/about";

  return (
    <>
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <img 
                src={portfolioImage} 
                alt="portfolio" 
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            
            <div className="lg:w-2/3">
              <h1 className="text-3xl font-bold mb-6 text-white">About Me</h1>
              <p className="text-gray-200 mb-8 leading-relaxed">
    I'm Ahmed Amer, a MERN Stack Developer with expertise in React and Angular. I build full-featured web applications using MongoDB, Express, React, Angular, and Node.js, creating responsive and scalable solutions. Alongside development, I mentor and teach aspiring developers, delivering workshops and guidance on modern web technologies. I’m passionate about continuous learning and turning ideas into functional digital experiences
              </p>
            </div>
          </div>

      
        </div>
      </section>
      {showFooter && <Footer />}
    </>
  );
}

export default About;
