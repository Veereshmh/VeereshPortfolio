import React from "react";
import { FaBriefcase } from "react-icons/fa";

function Overview() {
  return (
    <div className="w-[80%] mx-auto">
      {/* Heading with icon */}
      <div className="flex items-center mb-6"> {/* Increased margin */}
        <FaBriefcase className="text-blue-500 text-3xl mr-3" />
        <h2 className="uppercase tracking-wider">Overview</h2>
      </div>

      {/* Experience Box */}
      <div className="relative border rounded-lg p-6 flex items-center bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        {/* Large faded background number */}
        <span className="absolute right-4 text-[12rem] font-bold text-gray-100 select-none">
          09
        </span>

        {/* Main number */}
        <span className="text-6xl font-bold text-blue-500 z-10">09</span>

        {/* Text */}
        <div className="ml-4 z-10">
          <p className="uppercase tracking-widest text-sm text-gray-600">Years of</p>
          <p className="uppercase tracking-widest text-sm text-gray-600">Professional</p>
          <p className="uppercase tracking-widest text-sm text-gray-600">Experience</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
