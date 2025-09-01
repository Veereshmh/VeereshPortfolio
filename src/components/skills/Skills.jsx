import React from 'react';
import { FaTools } from 'react-icons/fa'; // Skills icon

function Skills() {
  const skills = [
    "React.js",
    "Redux",
    "Angular (version 12+)",
    "JavaScript",
    "HTML, HTML5",
    "CSS, CSS3",
    "WordPress",
    "Bootstrap, Tailwind CSS",
    "GitHub",
    "Responsive Web Design",
    "API Integration",
    "Responsive Design"
  ];

  // Split skills into two columns
  const leftSkills = skills.slice(0, 7);
  const rightSkills = skills.slice(7);

  return (
    <div className="w-[80%] mx-auto mt-8 mb-8">
      {/* Header */}
      <div className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-gray-800 mb-4">
        <FaTools className="text-blue-600 text-2xl sm:text-3xl" />
        <h2 className="uppercase tracking-wider">Skills</h2>
      </div>

      {/* Skills in two columns */}
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Left column */}
        <ul className="space-y-3">
          {leftSkills.map((skill, index) => (
            <li key={index} className="flex items-center space-x-3 group">
              <span className="w-5 h-5 bg-blue-500 border-2 border-blue-700 rounded-full animate-pulse transition-transform duration-300 group-hover:scale-125 group-hover:bg-blue-700 group-hover:border-blue-900"></span>
              <span className="text-gray-700 font-medium transition-all duration-300 group-hover:text-blue-600 group-hover:scale-110 group-hover:tracking-wide">
                {skill}
              </span>
            </li>
          ))}
        </ul>

        {/* Right column */}
        <ul className="space-y-3">
          {rightSkills.map((skill, index) => (
            <li key={index} className="flex items-center space-x-3 group">
              <span className="w-5 h-5 bg-blue-500 border-2 border-blue-700 rounded-full animate-pulse transition-transform duration-300 group-hover:scale-125 group-hover:bg-blue-700 group-hover:border-blue-900"></span>
              <span className="text-gray-700 font-medium transition-all duration-300 group-hover:text-blue-600 group-hover:scale-110 group-hover:tracking-wide">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
