import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { MdTimeline } from "react-icons/md"; // Icon for heading

function Timeline() {
  const items = [
    {
      type: "experience",
      title: "Senior Software Engineer",
      company: "Truminds Software System",
      duration: "01.2021 - 01.2024",
    },
    {
      type: "experience",
      title: "UI Developer",
      company: "Gipzonics Techno Labs LLP",
      duration: "01.2019 - 01.2021",
    },
    {
      type: "experience",
      title: "Web Developer & Knowledge Management Analyst",
      company:
        "Fort Solutions (Client Project via Accenture), later full-time at Accenture",
      duration: "01.2016 - 01.2019",
    },
    {
      type: "experience",
      title: "Web Developer",
      company: "Commercekarma",
      duration: "01.2016 - 01.2019",
    },
    {
      type: "education",
      title: "Bachelor of Engineering (Computer Science)",
      company: "Visvesvaraya Technological University",
      duration: "2012 - 2016",
    },
    {
      type: "education",
      title: "Diploma (Computer Science)",
      company: "Board of Technical Eduction",
      duration: "2006 - 2010",
    },
  ];

  return (
    <div className="w-[80%] mx-auto rounded-lg bg-gray-50 py-10 mb-20">
      {/* Heading */}
      <div className="flex items-center mb-8">
        <MdTimeline className="text-blue-500 text-3xl mr-3" />
        <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">
          My Timeline
        </h2>
      </div>

      <div className="relative px-4">
        {/* Vertical line */}
        <div className="absolute top-0 h-full bg-gray-300 w-0.5 left-8 md:left-auto md:right-0"></div>

        {items.map((item, index) => (
          <div
            key={index}
            className="mb-10 w-full flex flex-col md:flex-row md:justify-start"
          >
            <div
              className={`relative bg-white p-5 rounded-lg shadow hover:shadow-lg transition duration-300
                w-full md:w-5/12
                ml-12 md:ml-0
                md:mr-auto
              `}
            >
              {/* Icon near vertical line */}
              <div
                className={`absolute top-6 flex items-center justify-center w-9 h-9 bg-white border-2 rounded-full
                  border-blue-400
                  left-[-36px]
                  md:left-auto md:right-[-36px]
                `}
              >
                {item.type === "experience" ? (
                  <FaBriefcase className="text-blue-500" size={16} />
                ) : (
                  <FaGraduationCap className="text-green-500" size={16} />
                )}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.company}</p>
              <p className="text-sm text-gray-500">{item.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
