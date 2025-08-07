import React from "react";

function SkillCard({ icon, title, description, level }) {
    return (
        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{icon}</span>
                <div>
                    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                </div>
            </div>
            <div className="mb-2">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">Proficiency</span>
                    <span className="text-sm font-medium text-blue-600">{level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        style={{ width: `${level}%` }}
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default SkillCard;
