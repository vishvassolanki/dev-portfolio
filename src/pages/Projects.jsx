// import React, { forwardRef } from "react";
// import ProjectCard from "../components/ProjectCard"; // adjust path if needed

// const Projects = forwardRef((props, ref) => {
//     const projectData = [
//         {
//             id: 1,
//             title: "Sundown Studio Landing Page",
//             description: "A UI clone of sundown studio",
//             githubUrl:
//                 "https://github.com/vishvassolanki/practice-projects/tree/main/sundown-studio",
//             liveUrl: "https://sundown-studio-lovat-theta.vercel.app/",
//             technologies: ["HTML", "CSS", "JavaScript", "CSS Animation"],
//             imageUrl: "/sundown.png",
//         },
//         {
//             id: 2,
//             title: "Currency Converter",
//             description: "A modern Currency Converter using API.",
//             githubUrl:
//                 "https://github.com/vishvassolanki/practice-projects/tree/main/currency-converter",
//             liveUrl: "https://currency-converter-eight-beige.vercel.app/",
//             technologies: ["HTML", "JavaScript", "CSS", "API"],
//             imageUrl: "/currency.png",
//         },
//         {
//             id: 3,
//             title: "Old Portfolio",
//             description: "A static portfolio using HTML and CSS.",
//             githubUrl:
//                 "https://github.com/vishvassolanki/practice-projects/tree/main/old-portfolio",
//             liveUrl: "https://old-static-portfolio.vercel.app/",
//             technologies: ["HTML", "CSS", "CSS Animations", "CSS Variables"],
//             imageUrl: "/old-portfolio.png",
//         },
//         {
//             id: 4,
//             title: "Landing Page using React",
//             description: "A modern layout of Nike using ReactJS",
//             githubUrl:
//                 "https://github.com/vishvassolanki/practice-projects/tree/main/react-landing-page",
//             liveUrl: "https://practice-projects-chi.vercel.app/",
//             technologies: ["React", "JSX", "CSS"],
//             imageUrl: "/react.png",
//         },
//         {
//             id: 5,
//             title: "Developer Landing Page",
//             description: "A modern developer landing page using HTML and CSS",
//             githubUrl:
//                 "https://github.com/vishvassolanki/practice-projects/tree/main/landing-page",
//             liveUrl: "https://developer-landing-page-weld.vercel.app/",
//             technologies: ["HTML", "CSS"],
//             imageUrl: "/dev-landing.png",
//         },
//         {
//             id: 6,
//             title: "Netflix Homepage Clone",
//             description: "Old netflix clone using HTML and CSS",
//             githubUrl:
//                 "https://github.com/vishvassolanki/practice-projects/tree/main/netflix-web",
//             liveUrl: "https://netflix-static-ui.vercel.app/",
//             technologies: ["HTML", "CSS"],
//             imageUrl: "/netflix.png",
//         },
//         {
//             id: 7,
//             title: "Tic Tac Toe Game ",
//             description: "Working Tic Tac Toe game using HTML, CSS, JavaScript. Build by watching Code With Harry tutorial.",
//             githubUrl:
//                 "https://github.com/vishvassolanki/practice-projects/tree/main/tic-tac-toe",
//             liveUrl: "https://tic-tac-toe-gamma-dusky.vercel.app/",
//             technologies: ["HTML", "CSS", "JavaScript"],
//             imageUrl: "/tic-tac-toe.png",
//         },
//         {
//             id: 8,
//             title: "Snake Game",
//             description: "Old Nokia Snake game using JavasCript, HTML and CSS. Build by reffering Code With Harry tutorial.",
//             githubUrl:
//                 "https://github.com/vishvassolanki/practice-projects/tree/main/snake-game",
//             liveUrl: "https://snake-game-chi-inky.vercel.app/",
//             technologies: ["HTML", "CSS", "JavaScript"],
//             imageUrl: "/snake.png",
//         },
//         {
//             id: 9,
//             title: "Music Player",
//             description:
//                 "A static fun project 'Music Player' using HTML, JavaScript and CSS.",
//             githubUrl:
//                 "https://github.com/vishvassolanki/practice-projects/tree/main/music-player",
//             liveUrl: "https://music-player-jade-omega.vercel.app/",
//             technologies: ["HTML", "CSS", "JavaScript"],
//             imageUrl: "/music-player.png",
//         },
//         {
//             id: 10,
//             title: "Random Talk",
//             description:
//                 "Random Talk using Shake Spear text API that converts normal that into ShakeSpear text.",
//             githubUrl:
//                 "https://github.com/vishvassolanki/practice-projects/tree/main/random-talk",
//             liveUrl: "https://random-talks-five.vercel.app/",
//             technologies: ["HTML", "CSS", "JavaScript"],
//             imageUrl: "/random-talk.png",
//         },
//         {
//             id: 11,
//             title: "Stopwatch",
//             description: "Real time stopwattch using HTML, CSS and JavaScript.",
//             githubUrl:
//                 "https://github.com/vishvassolanki/practice-projects/tree/main/stopwatch",
//             liveUrl: "https://stopwatch-six-roan.vercel.app/",
//             technologies: ["HTML", "CSS", "JavaScript"],
//             imageUrl: "/stopwatch.png",
//         },
//     ];

//     return (
//         <section ref={ref} id="projects" className="py-20 bg-white">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center mb-16">
//                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                         My Projects
//                     </h2>
//                     <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
//                     <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                         Here are some of the projects I've worked on that
//                         showcase my skills and creativity
//                     </p>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-8">
//                     {projectData.map((project) => (
//                         <ProjectCard
//                             key={project.id}
//                             title={project.title}
//                             description={project.description}
//                             githubLink={project.githubUrl}
//                             demoLink={project.liveUrl}
//                             technologies={project.technologies}
//                             imageUrl={project.imageUrl}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// });

// export default Projects;

import React, { forwardRef, useState } from "react";
import ProjectCard from "../components/ProjectCard"; // adjust path if needed

const Projects = forwardRef((props, ref) => {
    const [showAll, setShowAll] = useState(false);

    const projectData = [
        {
            id: 1,
            title: "Currency Converter",
            description: "A modern Currency Converter using API.",
            githubUrl:
                "https://github.com/vishvassolanki/practice-projects/tree/main/currency-converter",
            liveUrl: "https://currency-converter-eight-beige.vercel.app/",
            technologies: ["HTML", "JavaScript", "CSS", "API"],
            imageUrl: "/currency.avif",
        },
        {
            id: 2,
            title: "Landing Page using React",
            description: "A modern layout of Nike using ReactJS",
            githubUrl:
                "https://github.com/vishvassolanki/practice-projects/tree/main/react-landing-page",
            liveUrl: "https://practice-projects-chi.vercel.app/",
            technologies: ["React", "JSX", "CSS"],
            imageUrl: "/nike.jpg",
        },
        {
            id: 3,
            title: "Old Portfolio",
            description: "A static portfolio using HTML and CSS.",
            githubUrl:
                "https://github.com/vishvassolanki/practice-projects/tree/main/old-portfolio",
            liveUrl: "https://old-static-portfolio.vercel.app/",
            technologies: ["HTML", "CSS", "CSS Animations"],
            imageUrl: "/old-portfolio.avif",
        },
        {
            id: 4,
            title: "Stopwatch",
            description: "Real time stopwatch using HTML, CSS and JavaScript.",
            githubUrl:
                "https://github.com/vishvassolanki/practice-projects/tree/main/stopwatch",
            liveUrl: "https://stopwatch-six-roan.vercel.app/",
            technologies: ["HTML", "CSS", "JavaScript"],
            imageUrl: "/stopwatch.png",
        },

        {
            id: 5,
            title: "Tic Tac Toe Game ",
            description:
                "Working Tic Tac Toe game using HTML, CSS, JavaScript. Built by watching Code With Harry tutorial.",
            githubUrl:
                "https://github.com/vishvassolanki/practice-projects/tree/main/tic-tac-toe",
            liveUrl: "https://tic-tac-toe-gamma-dusky.vercel.app/",
            technologies: ["HTML", "CSS", "JavaScript"],
            imageUrl: "/tic-tac.jpg",
        },
        
    ];

    // Show only first 6 projects initially on mobile, all on desktop
    const displayedProjects = showAll ? projectData : projectData.slice(0, 6);

    return (
        <section
            ref={ref}
            id="projects"
            className="py-12 sm:py-16 lg:py-20 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                        My Projects
                    </h2>
                    <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6 rounded"></div>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-lg lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                        Here are some of the projects I've worked on that
                        showcase my skills and creativity
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {displayedProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animation: "fadeInUp 0.6s ease-out both",
                            }}
                        >
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                githubLink={project.githubUrl}
                                demoLink={project.liveUrl}
                                technologies={project.technologies}
                                imageUrl={project.imageUrl}
                            />
                        </div>
                    ))}
                </div>

                {/* Show More/Less Button - Only show if there are more than 6 projects */}
                {projectData.length > 6 && (
                    <div className="text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            {showAll
                                ? "Show Less"
                                : `Show All ${projectData.length} Projects`}
                        </button>
                    </div>
                )}

                {/* Project Statistics */}
                <div className="mt-12 sm:mt-16 bg-gray-50 rounded-xl p-6 sm:p-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center">
                        <div>
                            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">
                                {projectData.length}
                            </div>
                            <div className="text-sm sm:text-base text-gray-600">
                                Total Projects
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">
                                {
                                    new Set(
                                        projectData.flatMap(
                                            (p) => p.technologies
                                        )
                                    ).size
                                }
                            </div>
                            <div className="text-sm sm:text-base text-gray-600">
                                Technologies
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">
                                {
                                    projectData.filter((p) =>
                                        p.technologies.includes("React")
                                    ).length
                                }
                            </div>
                            <div className="text-sm sm:text-base text-gray-600">
                                React Projects
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1 sm:mb-2">
                                {
                                    projectData.filter((p) =>
                                        p.technologies.includes("JavaScript")
                                    ).length
                                }
                            </div>
                            <div className="text-sm sm:text-base text-gray-600">
                                JS Projects
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
});

export default Projects;