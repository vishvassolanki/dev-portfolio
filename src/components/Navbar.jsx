// import React from "react";
// import Logo from "./Logo";
// import { MdOutlineDarkMode } from "react-icons/md";

// function Navbar({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }) {
//     const handleScroll = (ref) => {
//         if (ref && ref.current) {
//             ref.current.scrollIntoView({ behavior: "smooth" });
//         }
//     };

//     return (
//         <header className="flex items-center justify-between px-7 py-5 shadow-md bg-white sticky top-0 z-50">
//             <div className="flex items-center space-x-3">
//                 <Logo className="w-10 h-10" />
//                 <h1 className="font-bold text-xl text-gray-800">
//                     Vishvas Solanki
//                 </h1>
//             </div>

//             <nav>
//                 <ul className="flex space-x-6 text-gray-700 font-medium">
//                     <li
//                         onClick={() => handleScroll(homeRef)}
//                         className="hover:text-blue-600 cursor-pointer"
//                     >
//                         Home
//                     </li>
//                     <li
//                         onClick={() => handleScroll(aboutRef)}
//                         className="hover:text-blue-600 cursor-pointer"
//                     >
//                         About
//                     </li>
//                     <li
//                         onClick={() => handleScroll(skillsRef)}
//                         className="hover:text-blue-600 cursor-pointer"
//                     >
//                         Skills
//                     </li>
//                     <li
//                         onClick={() => handleScroll(projectsRef)}
//                         className="hover:text-blue-600 cursor-pointer"
//                     >
//                         Projects
//                     </li>
//                     <li
//                         onClick={() => handleScroll(contactRef)}
//                         className="hover:text-blue-600 cursor-pointer"
//                     >
//                         Contact
//                     </li>
                    
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default Navbar;



import React, { useState } from "react";
import Logo from "./Logo";
import { MdOutlineDarkMode, MdMenu, MdClose } from "react-icons/md";

function Navbar({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
        // Close mobile menu after clicking a link
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItems = [
        { label: "Home", ref: homeRef },
        { label: "About", ref: aboutRef },
        { label: "Skills", ref: skillsRef },
        { label: "Projects", ref: projectsRef },
        { label: "Contact", ref: contactRef },
    ];

    return (
        <header className="flex items-center justify-between px-4 sm:px-6 lg:px-7 py-4 sm:py-5 shadow-md bg-white sticky top-0 z-50">
            {/* Logo and Name */}
            <div className="flex items-center space-x-2 sm:space-x-3">
                <Logo className="w-8 h-8 sm:w-10 sm:h-10" />
                <h1 className="font-bold text-lg sm:text-xl text-gray-800">
                    <span className="hidden sm:inline">Vishvas Solanki</span>
                    <span className="sm:hidden">Vishvas</span>
                </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex space-x-4 lg:space-x-6 text-gray-700 font-medium">
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleScroll(item.ref)}
                            className="hover:text-blue-600 cursor-pointer transition-colors duration-200 px-2 py-1 rounded hover:bg-blue-50"
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200"
                aria-label="Toggle mobile menu"
            >
                {isMobileMenuOpen ? (
                    <MdClose className="w-6 h-6" />
                ) : (
                    <MdMenu className="w-6 h-6" />
                )}
            </button>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t md:hidden">
                    <nav className="py-2">
                        <ul className="flex flex-col">
                            {navItems.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleScroll(item.ref)}
                                    className="hover:text-blue-600 hover:bg-blue-50 cursor-pointer transition-colors duration-200 px-6 py-3 border-b border-gray-100 last:border-b-0"
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Navbar;