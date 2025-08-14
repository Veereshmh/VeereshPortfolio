import React from "react";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className="w-[80%] mx-auto py-10">
      {/* Heading */}
      <div className="flex items-center mb-6">
        <FaEnvelope className="text-blue-500 text-3xl mr-3" />
        <h2 className="uppercase tracking-wider text-xl font-bold">Contact Form</h2>
      </div>

      <p className="text-gray-600 mb-6">
        Please complete the form below so we can forward your contact request to Veeresh Hiremath:
      </p>

      {/* Form */}
      <div className="bg-white shadow-md border rounded-lg p-6">
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="text-sm font-semibold block mb-1">
              First Name and Last Name*
            </label>
            <input
              type="text"
              placeholder="[Your Name]"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Company */}
          <div>
            <label className="text-sm font-semibold block mb-1">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Bed Bath & Beyond, Inc"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Contact reason */}
          <div className="col-span-2 mt-4">
            <p className="font-semibold mb-2">
              I am contacting you because*:
            </p>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                Schedule a time to talk
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                Discuss a job or project
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                Request additional information
              </label>
            </div>
          </div>

          {/* Email */}
          <div className="col-span-2 md:col-span-1 mt-4">
            <label className="text-sm font-semibold block mb-1">
              Email Address*
            </label>
            <input
              type="email"
              placeholder="formsample@example.com"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone */}
          <div className="col-span-2 md:col-span-1 mt-4">
            <label className="text-sm font-semibold block mb-1">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="(555) 432-1000"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-end mt-6">
            <button
              type="submit"
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-full"
            >
              SEND
            </button>
          </div>
        </form>

        <p className="text-xs text-gray-500 mt-4">
          By clicking "send", you accept our Terms of Service and Privacy Policy.
          We will forward your contact request, however it is up to the receiver if
          the request is answered.
        </p>
      </div>
    </div>
  );
}

export default Contact;
