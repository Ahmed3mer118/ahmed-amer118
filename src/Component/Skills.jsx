import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from './Footer'

function Skills() {
    const location = useLocation();
    const showFooter = location.pathname === "/about";

    const technologies = [
        "HTML", "CSS", "JavaScript", "TypeScript", "OOP",
        "Bootstrap", "Tailwind CSS", "React", "Next.js", "Node.js"
    ];

    const tools = [
        "Git & GitHub", "Responsive Design", "Figma", "Headless CMS",
        "State Management", "REST API", "C++", "SQL", "MongoDB"
    ];

    const education = [
        {
            degree: "Bachelor's Degree in Business Information System",
            institution: "Higher Obour Institute",
            period: "2022 - 2026",
            description: "Specialized in software engineering and web development"
        },
        // {
        //     degree: "Frontend Development Specialization",
        //     institution: "Online Courses (Udemy, Coursera, FreeCodeCamp)",
        //     period: "2022 - Present",
        //     description: "Advanced courses in modern JavaScript frameworks and web technologies"
        // },
        // {
        //     degree: "MEAN Stack Development ",
        //     institution: "NTI",
        //     period: "5-2025- 7-2025",
        //     description: "Learn advanced MEAN stack development (node.js, express.js, mongoose, mongodb) and build full-stack applications"
        // }
    ];
    const certificates = [
        {
            courseName: "React.js",
            place: "Mahara Tech platform",
        },
        {
            courseName: "React.js",
            place: "A.T.C.E",
        },
        {
            courseName: " Introduction Software Testing",
            place: "Mahara Tech platform",
        },
        {
            courseName: " Introduction Network Security",
            place: "Mahara Tech platform",
        }
    ];

    return (
        <>
            <section className="py-16 bg-gray-900 text-gray-200">
                <div className="container mx-auto px-4">
                    {/* Skills Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
                            My <span className="text-white">Skills</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Technologies Card */}
                            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold">Languages & Libraries</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-900 text-blue-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Tools Card */}
                            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-green-400 transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold">Tools & Others</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {tools.map((tool, index) => (
                                        <span
                                            key={index}
                                            className="bg-green-900 text-green-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div>
                        <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
                            My <span className="text-white">Education</span>
                        </h2>

                        <div className="space-y-6 max-w-4xl mx-auto">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-purple-400 transition-all duration-300"
                                >
                                    <div className="flex items-start mb-4">
                                        <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mr-4 flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                                            <p className="text-blue-400 font-medium">{edu.institution}</p>
                                            <p className="text-gray-400 text-sm mt-1">{edu.period}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 pl-16">{edu.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Certificates Section */}
                    <div className="mt-16 py-12 bg-gray-900/50">
                        <div className="container mx-auto px-4">
                            <h2 className="text-4xl font-bold text-center mb-16">
                                My <span className="text-blue-400">Certifications</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {certificates.map((cert, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-blue-400"
                                    >
                                        <div className="p-6">
                                            <div className="flex items-start mb-4">
                                                <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-lg mr-4 flex-shrink-0">
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white">{cert.courseName}</h3>
                                                    <p className="text-blue-400 font-medium">{cert.place}</p>
                                                    {cert.date && (
                                                        <p className="text-gray-400 text-sm mt-1">{cert.date}</p>
                                                    )}
                                                </div>
                                            </div>
                                            <p className="text-gray-300 mt-4 pl-4 border-l-2 border-blue-400">
                                                {cert.description}
                                            </p>

                                            {cert.link && (
                                                <a
                                                    href={cert.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-6 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                                                >
                                                    View Certificate
                                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {showFooter && <Footer />}
        </>
    )
}

export default Skills