// import React, { forwardRef } from "react";

// const About = forwardRef((props, ref) => {
//     return (
//         <section
//             ref={ref}
//             id="about"
//             className="py-20 bg-white text-gray-700 body-font"
//         >
//             <div className="text-center mb-12">
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                     About Me
//                 </h2>
//                 <div className="w-25 h-1 bg-blue-600 mx-auto rounded"></div>
//             </div>

//             <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
//                 <div className="md:w-1/2 w-full mb-10 md:mb-0 flex justify-center">
//                     <img
//                         loading="lazy"
//                         className="w-full max-w-sm rounded-lg shadow-lg object-cover object-center"
//                         alt="Vishvas Solanki"
//                         src="/portfolio1.png"
//                     />
//                 </div>

//                 <div className="md:w-1/2 w-full md:pl-12">
//                     <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
//                         Hi, I'm Vishvas Solanki
//                     </h1>

//                     <p className="text-lg leading-relaxed mb-4">
//                         I'm a passionate{" "}
//                         <span className="font-semibold text-indigo-600">
//                             web developer
//                         </span>{" "}
//                         who enjoys crafting beautiful and functional websites
//                         using technologies like{" "}
//                         <span className="font-medium text-indigo-500">
//                             HTML, CSS, JavaScript, React, and Tailwind CSS
//                         </span>
//                         .
//                     </p>

//                     <p className="text-lg leading-relaxed mb-4">
//                         Currently, I'm focused on building responsive,
//                         user-friendly interfaces and working on personal
//                         projects that help me grow as a developer. I'm also
//                         exploring backend technologies to become a{" "}
//                         <span className="font-semibold">
//                             full-stack developer
//                         </span>
//                         .
//                     </p>

//                     <p className="text-lg leading-relaxed mb-6">
//                         When I'm not coding, you can find me experimenting with
//                         new tools, helping others, or creating content for my
//                         tech YouTube channel.
//                     </p>

//                     <div className="flex flex-wrap gap-4">
//                         <a
//                             href="/vishvasfrontend.pdf"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded text-lg transition"
//                         >
//                             View Resume
//                         </a>
//                         <a
//                             href="#projects"
//                             className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-6 rounded text-lg transition"
//                         >
//                             My Projects
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// });

// export default About;






import React, { forwardRef } from "react";

const About = forwardRef((props, ref) => {
    return (
        <section
            ref={ref}
            id="about"
            className="py-12 sm:py-16 lg:py-20 bg-white text-gray-700"
        >
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12 px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                    About Me
                </h2>
                <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-600 mx-auto rounded"></div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16">
                    
                    {/* Image Section */}
                    <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
                        <div className="relative group">
                            {/* Animated Border */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-rotate"></div>
                            
                            {/* Image Container */}
                            <div className="relative bg-white p-1 rounded-lg">
                                <img
                                    loading="lazy"
                                    className="w-64 sm:w-80 md:w-96 lg:w-full max-w-sm rounded-lg shadow-lg object-cover object-center hover:shadow-xl transition-shadow duration-300"
                                    alt="Vishvas Solanki - Web Developer"
                                    src="/portfolio1.png"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-3/5 text-center lg:text-left">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
                            Hi, I'm{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Vishvas Solanki
                            </span>
                        </h1>

                        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed max-w-none lg:max-w-2xl">
                            <p>
                                I'm a passionate{" "}
                                <span className="font-semibold text-indigo-600">
                                    web developer
                                </span>{" "}
                                who enjoys crafting beautiful and functional websites
                                using technologies like{" "}
                                <span className="font-medium text-indigo-500">
                                    HTML, CSS, JavaScript, React, and Tailwind CSS
                                </span>
                                .
                            </p>

                            <p>
                                Currently, I'm focused on building responsive,
                                user-friendly interfaces and working on personal
                                projects that help me grow as a developer. I'm also
                                exploring backend technologies to become a{" "}
                                <span className="font-semibold text-gray-900">
                                    full-stack developer
                                </span>
                                .
                            </p>

                            <p>
                                When I'm not coding, you can find me experimenting with
                                new tools, helping others, or creating content for my
                                tech YouTube channel.
                            </p>
                        </div>

                        {/* Call-to-Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
                            <a
                                href="/vishvasfrontend.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                View Resume
                            </a>
                            <a
                                href="#projects"
                                className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                            >
                                My Projects
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for animated border */}
            <style jsx>{`
                @keyframes gradient-rotate {
                    0% {
                        background: linear-gradient(0deg, #3b82f6, #8b5cf6, #6366f1);
                    }
                    25% {
                        background: linear-gradient(90deg, #8b5cf6, #6366f1, #3b82f6);
                    }
                    50% {
                        background: linear-gradient(180deg, #6366f1, #3b82f6, #8b5cf6);
                    }
                    75% {
                        background: linear-gradient(270deg, #3b82f6, #8b5cf6, #6366f1);
                    }
                    100% {
                        background: linear-gradient(360deg, #8b5cf6, #6366f1, #3b82f6);
                    }
                }
                
                .animate-gradient-rotate {
                    animation: gradient-rotate 3s ease infinite;
                    background-size: 200% 200%;
                }
            `}</style>
        </section>
    );
});

export default About;