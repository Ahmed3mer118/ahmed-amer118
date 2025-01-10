import React from "react";
import "../App.css";
import portfolioImage from "/image/profile_image.png"; // تأكد من صحة المسار
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="container">
          <div className="info">
            <h2>Hello, My name's</h2>
            <h1 className="name">Ahmed Amer</h1>
            <h3>I'm a Front End React Developer</h3>
            <ul className="social-links">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100010224039198&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=201033705805"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/ahmed_3amer118?igshid=MzNlNGNkZWQ4Mg=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
              <a
            href="https://www.linkedin.com/in/ahmed-amer-884242289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
              </li>
            </ul>
          </div>
          <div className="image-container">
            <img src={portfolioImage} alt="Ahmed Amer" className="profile-image" />
          </div>
        </div>
      </section>
      <Projects />
      <About />
      <Footer />
    </>
  );
}

export default Home;
