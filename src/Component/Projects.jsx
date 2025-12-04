import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";

const projectsData = [
  {
    link: "https://www.code-eagles.com",
    image: "/image/codeeagles.png",
    title: "Code Eagles",
    description: "A platform for courses using Front-End and Back-End technologies. Students can register, join courses, watch materials, submit tasks, track attendance",
    technologies: ["React", "Bootstrap", "Node.js", "MongoDB", "JWT Auth" , "React-hos-toast"]
  },
  {
    link: "https://ieee-obour.vercel.app",
    image: "/image/IEEE-Front-development.png",
    title: "IEEE OCS SB",
    description: "Collaborated with a team to develop the official website for IEEE Obour Student Branch. Designed and implemented a responsive user interface using modern front-end technologies",
    technologies: ["React", "Tailwind CSS", "Framer Motion"]
  },
 {
  link: "https://ggoli-store.vercel.app/",
  image: "/image/ggoli-store.png",
  title: "GGoli Store",
  description: "GGoli Store is a full-stack e-commerce platform built with Angular for the frontend and Node.js/Express for the backend. It features dynamic product management, user authentication, and real-time cart functionality. The app integrates REST APIs for seamless communication between client and server, providing a smooth shopping experience.",
  technologies: ["Angular 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"]
 },
  {
    link: "https://vemoda.vercel.app",
    image: "/image/vemoda.png",
    title: "Vemoda Store",
    description: "An online store built with React. It uses Context API for state management and integrates an API to fetch and display products dynamically.",
    technologies: ["React", "Context API", "CSS Modules", "Fake Store API"]
  },
  {
    link: "https://ahmed3mer118.github.io/Crud",
    image: "/image/crud.jpg",
    title: "Product Management",
    description: "A system to manage products with features like storing data in LocalStorage and exporting it to Excel sheets for further analysis.",
    technologies: ["JS", "LocalStorage", "xlsx library", "Bootstrap"]
  },
  {
    link: "https://quiz-app-zeta-gules.vercel.app/",
    image: "/image/quiz4.png",
    title: "Quiz App",
    description: "A quiz application built with HTML, CSS, Bootstrap, JavaScript, and React. It features dynamic question rendering and score tracking.",
    technologies: ["React", "Bootstrap", "React-hos-toast", "React-router-dom"]
  }
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
    <div 
      ref={boxRef} 
      className={`bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Link to={project.link} target="_blank" className="block h-full">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 text-gray-200">{project.title}</h2>
          <p className="text-gray-200 mb-4">{project.description}</p>
          
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-200 mb-1">Technologies:</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <button className="mt-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors">
            Live Demo
          </button>
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
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-500 mb-16">
                                My <span className="text-white">Projects</span>
                            </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectBox key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
      {showFooter && <Footer />}
    </>
  );
}

export default Projects;
