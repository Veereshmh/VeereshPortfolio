import React from 'react'

function Header() {
  return (
    <div className="w-[80%] mx-auto">
      {/* Banner Image */}
      <img
        className="w-full h-48 md:h-64 lg:h-80 object-cover"
        src="../src/assets/contact-banner.jpg"
        alt="Header Banner"
      />

      {/* Info + Button Section */}
      <div className="flex flex-col md:flex-row bg-white shadow-md p-6 md:p-12 gap-6">
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-2">
          <h1 className="uppercase text-3xl sm:text-4xl font-black text-black tracking-wider mb-2">
            Veeresh <span className="text-blue-600">Hiremath</span>
          </h1>
          <h4 className="text-xl sm:text-2xl font-black text-black mb-2">
            Senior Software Engineer
          </h4>
          <h5 className="uppercase text-sm sm:text-base font-normal text-gray-600">
            Bengaluru
          </h5>
        </div>

        {/* Right Button */}
        <div className="w-full md:w-1/2 p-2 flex justify-center md:justify-end items-center">
          <button className="uppercase bg-blue-600 text-white font-semibold py-3 px-6 text-base sm:text-lg rounded-lg hover:bg-blue-700 transition">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
