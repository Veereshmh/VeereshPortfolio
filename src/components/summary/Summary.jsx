import React from 'react'
import { FaUser } from 'react-icons/fa'

function Summary() {
  const descriptions = [
    "Highly skilled and experienced Angular and React developer with 9 years of extensive experience in implementing user interfaces, developing web applications, and ensuring high performance and responsiveness. Proficient in various web technologies and frameworks with a strong background in front-end and little bit back-end development. Adept at collaborating with cross-functional teams to deliver robust and scalable solutions."
  ]

  return (
    <div className="w-[80%] mx-auto mt-8 mb-8">
      <div className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-gray-800 mb-4">
        <FaUser className="text-blue-600 text-2xl sm:text-3xl" />
        <h2 className="uppercase tracking-wider">Summary</h2>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
        {descriptions.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
    </div>
  )
}

export default Summary
