import React from "react";
import { FaUserGraduate } from "react-icons/fa";

function Education() {
  const experiences = [
    {
      id: 1,
      company: "Visvesvaraya Technological University (VTU), Belagavi, Karnataka 590018",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      designation: "Bachelor of Engineering - Computer Science & Engg",
      joining: "Jun 2010",
      leaving: "May 2014",
    },
    {
      id: 2,
      company: "Board of Technical Education, Bengaluru, Karnataka 560001",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      designation: "Diploma - Computer Science & Engg",
      joining: "Jun 2006",
      leaving: "Aug 2010",
    },
  ];

  return (
    <div className="w-[80%] mx-auto mt-8 mb-8">
      {/* Heading */}
      <div className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-gray-800 mb-4">
        <FaUserGraduate className="text-blue-600 text-2xl sm:text-3xl" />
        <h2 className="uppercase tracking-wider">Education</h2>
      </div>

      {/* Education Cards */}
      {experiences.map((exp) => (
        <div
          key={exp.id}
          className="flex items-center border bg-white rounded-lg shadow-sm mb-4 p-4 hover:shadow-md transition"
        >
          {/* Left - Logo */}
          <div className="w-16 h-16 flex-shrink-0">
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right - Details */}
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{exp.designation}</h3>
            <p className="text-sm text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-500">
              {exp.joining} - {exp.leaving}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;
