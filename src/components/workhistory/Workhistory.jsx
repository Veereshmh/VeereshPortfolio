import React from "react";
import { FaUser } from "react-icons/fa";

function Workhistory() {
  const experiences = [
    {
      id: 1,
      company: "Truminds Software System",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      designation: "Senior Software Engineer",
      joining: "June 2021",
      leaving: "August 2024",
    },
    {
      id: 2,
      company: "Gipzonics Techno Labs LLP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      designation: "UI Developer",
      joining: "December 2019",
      leaving: "June 2021",
    },
    {
      id: 3,
      company: "Accenture Solutions Pvt Ltd",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      designation: "Knowledge Management Analyst",
      joining: "December 2018",
      leaving: "July 2019",
    },
    {
      id: 4,
      company:
        "Forte Solutions Pvt Ltd (Contract in Accenture Solutions Pvt Ltd)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      designation: "Web Developer",
      joining: "August 2016",
      leaving: "December2018",
    },
    {
      id: 5,
      company: "Commercekarma",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      designation: "Web Developer",
      joining: "October 2014",
      leaving: "August 2016",
    },
  ];

  return (
    <div className="w-[80%] mx-auto mt-8 mb-8">
      {/* Section Heading */}
      <div className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-gray-800 mb-4">
        <FaUser className="text-blue-600 text-2xl sm:text-3xl" />
        <h2 className="uppercase tracking-wider">Work History</h2>
      </div>

      {/* Experience Cards */}
      {experiences.map((exp) => (
        <div
          key={exp.id}
          className="flex border bg-white rounded-lg shadow-sm mb-4 p-4 hover:shadow-md transition"
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
          <div className="ml-4 flex-grow">
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

export default Workhistory;
