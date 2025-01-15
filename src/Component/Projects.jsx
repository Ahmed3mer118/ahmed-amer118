import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";
import "../CSS/home.css";

const projectsData = [
  {
    link: "https://code-eagles.vercel.app/",
    image: "/image/codeeagles.png",
    title: "Code Eagles",
    description:
      "A platform for courses using Front-End and Back-End technologies. Students can register, join courses , watch materials, submit tasks, track attendance",
  },
  {
    link: "https://ieee-front-pi.vercel.app",
    image: "/image/IEEE-Front-development.png",
    title: "IEEE OCS SB",
    description:
      "Collaborated with a team to develop the official website for IEEE Obour Student Branch. Designed and implemented a responsive user interface using modern front-end technologies",
  },
  {
    link: "https://vemoda-dist.vercel.app/",
    image: "/image/vemoda.png",
    title: "Vemoda Store",
    description:
      "An online store built with React. It uses Context API for state management and integrates an API to fetch and display products dynamically.",
  },
  {
    link: "https://ahmed3mer118.github.io/Crud",
    image: "/image/crud.jpg",
    title: "Product Management",
    description:
      "A system to manage products with features like storing data in LocalStorage and exporting it to Excel sheets for further analysis.",
  },
  {
    id: 4,
    link: "https://quiz-app-zeta-gules.vercel.app/",
    image: "/image/quiz4.png",
    title: "Quiz App",
    description:
      "A quiz application built with HTML, CSS, Bootstrap, JavaScript, and React. It features dynamic question rendering and score tracking.",
  },
  {
    link: "https://wheaterapp118.netlify.app/",
    image: "/image/weatherapp.png",
    title: "Weather App",
    description:
      "An app to check weather conditions by city using an API. Users can search cities to get real-time temperature and weather data.",
  },
  // {
  //   link: "https://ahmed3mer118.github.io/Simple-Template",
  //   image: "/image/template.jpg",
  //   title: "Restaurant Template",
  //   description:
  //     "A responsive restaurant template with a clean design. The site adjusts perfectly to different screen sizes and provides a user-friendly layout.",
  // },
  
];

function ProjectBox({ project }) {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (boxRef.current) observer.observe(boxRef.current);

    return () => {
      if (boxRef.current) observer.unobserve(boxRef.current);
    };
  }, []);

  return (
    <div ref={boxRef} className={`box ${isVisible ? "visible" : ""}`}>
      <Link to={project.link} target="_blank">
        <img src={project.image} alt={project.title} />
        <div className="details">
          <h2 className="mt-3">{project.title}</h2>
          <p>{project.description}</p>
          <button className="btn btn-success ">Live Dimo</button>
        </div>
      </Link>
    </div>
  );
}

function Projects() {
  const location = useLocation();
  const showFooter = location.pathname === "/projects";

  return (
    <>
      <section className="projects">
        <h1 className="title">My Projects</h1>
        <div className="project-box container">
          {projectsData.map((project, index) => (
            <ProjectBox key={index} project={project} />
          ))}
        </div>
      </section>
      {showFooter && <Footer />}
    </>
  );
}

export default Projects;
