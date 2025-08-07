// import React, { forwardRef } from "react";
// import SkillCard from "../components/SkillCard";

// const Skill = forwardRef((props, ref) => {
//     const skills = [
//         {
//             icon: "🌐",
//             title: "HTML",
//             desciption: "Semantic markup and accessibility",
//             level: "90",
//         },
//         {
//             icon: "🎨",
//             title: "CSS",
//             desciption: "Modern layouts and responsiveness",
//             level: "75",
//         },
//         {
//             icon: "⚡",
//             title: "JavaScript",
//             desciption: "ES6+ and modern JavaScript",
//             level: "70",
//         },
//         {
//             icon: "💨",
//             title: "Tailwind CSS",
//             desciption: "Utility-first CSS framework",
//             level: "60",
//         },
//         {
//             icon: "⚛️",
//             title: "React",
//             desciption: "Component-based development",
//             level: "70",
//         },
//         {
//             icon: "🐍",
//             title: "Python",
//             desciption: "Basic backend and sctiping",
//             level: "50",
//         },
//     ];

//     return (
//         <section
//             ref={ref}
//             id="skills"
//             className="py-20 bg-gray-50 text-gray-700 body-font"
//         >
//             <div className="text-center mb-12">
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                     My Skills
//                 </h2>
//                 <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                     Here are the technologies and tools I work with to bring
//                     ideas to life
//                 </p>
//             </div>
//             <div className="grid grid-cols-3 gap-8 px-5">
//                 {skills.map((skill, index) => (
//                     <SkillCard
//                         key={index}
//                         icon={skill.icon}
//                         title={skill.title}
//                         description={skill.desciption}
//                         level={skill.level}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// });

// export default Skill;

import React, { forwardRef } from "react";
import SkillCard from "../components/SkillCard";
import { FaGithub } from "react-icons/fa";

const Skill = forwardRef((props, ref) => {
    const skills = [
        {
            icon: "🌐",
            title: "HTML",
            description: "Semantic markup and accessibility",
            level: "90",
        },
        {
            icon: "🎨",
            title: "CSS",
            description: "Modern layouts and responsiveness",
            level: "75",
        },
        {
            icon: "⚡",
            title: "JavaScript",
            description: "ES6+ and modern JavaScript",
            level: "70",
        },
        {
            icon: "💨",
            title: "Tailwind CSS",
            description: "Utility-first CSS framework",
            level: "60",
        },
        {
            icon: "⚛️",
            title: "React",
            description: "Component-based development",
            level: "70",
        },
        {
            icon: "🐍",
            title: "Python",
            description: "Basic backend and scripting",
            level: "50",
        },
        {
            icon: "🐙",
            title: "Git Github",
            description: "Version control and project management",
            level: "60",
        },
    ];

    return (
        <section
            ref={ref}
            id="skills"
            className="py-12 sm:py-16 lg:py-20 bg-gray-50 text-gray-700"
        >
            {/* Section Header */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                        My Skills
                    </h2>
                    <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6 rounded"></div>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-lg lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                        Here are the technologies and tools I work with to bring
                        ideas to life
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="transform transition-transform duration-300 hover:scale-105"
                        >
                            <SkillCard
                                icon={skill.icon}
                                title={skill.title}
                                description={skill.description}
                                level={skill.level}
                            />
                        </div>
                    ))}
                </div>

                {/* Optional: Additional Skills Section */}
                <div className="mt-12 sm:mt-16 text-center">
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                        Currently learning and exploring:
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                        {[
                            "Node.js",
                            "MongoDB",
                            "TypeScript",
                            "Next.js",
                            "Git & GitHub",
                        ].map((tech, index) => (
                            <span
                                key={index}
                                className="bg-white text-gray-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Skill;
