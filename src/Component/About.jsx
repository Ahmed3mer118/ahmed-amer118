import React from "react";
import portfolioImage from "/image/profile_image.png";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  const showFooter = location.pathname === "/about";

  return (
    <>
      <section className="about">
        <div className="about container">
          {/* صورة الملف الشخصي */}
          <img src={portfolioImage} alt="portfolio image" className="profile-image" />
          
          {/* تفاصيل عن الشخص */}
          <div className="details">
            <h1 className="title">About Me</h1>
            <p>
              I'm Ahmed Amer, a student in the Business Information System department. Currently, I am working part-time as a Front-end Developer.
            </p>

            <h2 className="text-center text-primary mt-2">Skills</h2>
            <div className="skills">
              <div className="skills-details">
                <h3>HTML</h3>
                <h3>CSS</h3>
                <h3>JavaScript</h3>
                <h3>Bootstrap</h3>
                <h3>Tailwind</h3>
                <h3>React</h3>
              </div>
              <div className="skills-details">
                <h3>Git & GitHub</h3>
                <h3>Responsive Websites</h3>
                <h3>Figma</h3>
                <h3>Headless CMS</h3>
                <h3>State Management</h3>
                <h3>REST API</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer يظهر فقط عند زيارة صفحة "About" */}
      {showFooter && <Footer />}
    </>
  );
}

export default About;
