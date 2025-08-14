import React from 'react';
import { FaLanguage } from 'react-icons/fa';

function Languages() {
  const languages = ["English", "Kannada", "Hindi"];

  return (
    <div className="w-[80%] mx-auto mt-8 mb-8">
      {/* Header */}
      <div className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-gray-800 mb-4">
        <FaLanguage className="text-blue-600 text-2xl sm:text-3xl" />
        <h2 className="uppercase tracking-wider">Languages</h2>
      </div>

      {/* Languages in single line */}
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 text-gray-700 font-medium">
        {languages.join(" | ")}
      </div>
    </div>
  );
}

export default Languages;
