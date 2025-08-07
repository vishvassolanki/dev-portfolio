// import React, { forwardRef } from "react";
// import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

// // Wrap with forwardRef to accept ref from App.jsx
// const Home = forwardRef(({ aboutRef }, ref) => {
//     const handleScrollToAbout = () => {
//         if (aboutRef && aboutRef.current) {
//             aboutRef.current.scrollIntoView({ behavior: "smooth" });
//         }
//     };

//     return (
//         <main
//             ref={ref} // 👈 Attach the forwarded ref here
//             className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 text-center"
//         >
//             {/* Main Heading */}
//             <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-gray-900">
//                 Hi, I'm <span className="text-blue-600">Vishvas Solanki</span>
//             </h1>

//             {/* Subtitle */}
//             <p className="text-lg md:text-2xl text-gray-700 mb-10 max-w-2xl">
//                 A passionate{" "}
//                 <span className="font-semibold text-gray-900">
//                     Web Developer
//                 </span>{" "}
//                 who loves creating beautiful, functional, and user-friendly
//                 websites and applications.
//             </p>

//             {/* Social Icons */}
//             <div className="flex gap-6">
//                 <a
//                     href="https://github.com/vishvassolanki"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     <div className="bg-gray-900 text-white p-4 rounded-full shadow-md hover:scale-110 transition-transform">
//                         <FaGithub size={24} />
//                     </div>
//                 </a>
//                 <a
//                     href="https://www.linkedin.com/in/vishvas-solanki-053b842b8/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     <div className="bg-blue-600 text-white p-4 rounded-full shadow-md hover:scale-110 transition-transform">
//                         <FaLinkedin size={24} />
//                     </div>
//                 </a>
//                 <a href="mailto:vishvassolankiwork@gmail.com">
//                     <div className="bg-green-600 text-white p-4 rounded-full shadow-md hover:scale-110 transition-transform">
//                         <FaEnvelope size={24} />
//                     </div>
//                 </a>
//             </div>

//             {/* Scroll Down Arrow */}
//             <div
//                 className="mt-10 animate-bounce cursor-pointer"
//                 onClick={handleScrollToAbout}
//             >
//                 <FaArrowDown
//                     size={32}
//                     className="text-blue-700 hover:text-blue-900 transition-colors"
//                 />
//             </div>
//         </main>
//     );
// });

// // Export properly
// export default Home;

import React, { forwardRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

// Wrap with forwardRef to accept ref from App.jsx
const Home = forwardRef(({ aboutRef }, ref) => {
    const handleScrollToAbout = () => {
        if (aboutRef && aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main
            ref={ref} // 👈 Attach the forwarded ref here
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 sm:px-6 lg:px-8 text-center relative"
        >
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 leading-tight text-gray-900">
                Hi, I'm{" "}
                <span className="text-blue-600 block sm:inline mt-2 sm:mt-0">
                    Vishvas Solanki
                </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-10 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl leading-relaxed px-2">
                A passionate{" "}
                <span className="font-semibold text-gray-900">
                    Web Developer
                </span>{" "}
                who loves creating beautiful, functional, and user-friendly
                websites and applications.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 sm:gap-6 mb-8 sm:mb-0">
                <a
                    href="https://github.com/vishvassolanki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    aria-label="Visit my GitHub profile"
                >
                    <div className="bg-gray-900 text-white p-3 sm:p-4 rounded-full shadow-md hover:shadow-lg group-hover:scale-110 transition-all duration-300 hover:bg-gray-800">
                        <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                </a>
                <a
                    href="https://www.linkedin.com/in/vishvas-solanki-053b842b8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    aria-label="Visit my LinkedIn profile"
                >
                    <div className="bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-md hover:shadow-lg group-hover:scale-110 transition-all duration-300 hover:bg-blue-700">
                        <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                </a>
                <a
                    href="mailto:vishvassolankiwork@gmail.com"
                    className="group"
                    aria-label="Send me an email"
                >
                    <div className="bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-md hover:shadow-lg group-hover:scale-110 transition-all duration-300 hover:bg-green-700">
                        <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                </a>
            </div>

            {/* Scroll Down Arrow */}
            <div
                className="absolute bottom-8 sm:bottom-10 animate-bounce cursor-pointer group"
                onClick={handleScrollToAbout}
                role="button"
                tabIndex={0}
                aria-label="Scroll to About section"
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        handleScrollToAbout();
                    }
                }}
            >
                <FaArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700 group-hover:text-blue-900 transition-colors duration-200" />
            </div>
        </main>
    );
});

// Export properly
export default Home;
