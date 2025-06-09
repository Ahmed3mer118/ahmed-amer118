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
                I'm Ahmed Amer, a Front-End Developer with 3 years of hands-on experience in
                building modern, responsive web applications. Skilled in technologies like JavaScript,
                React, and Next.js, I've developed and contributed to several real-world projects ranging
                from e-learning platforms to e-commerce solutions. In parallel with development, I work
                as a Front-End Instructor, delivering workshops and mentoring students in both
                fundamental and advanced topics. I am passionate about continuous learning and
                sharing knowledge to inspire the next generation of developers.
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