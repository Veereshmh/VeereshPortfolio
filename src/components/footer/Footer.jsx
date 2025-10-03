import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-black text-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        
        {/* Left Side */}
        <div className="flex items-center mb-2 sm:mb-0">
          <p className="text-sm pr-2">Veeresh Hiremath</p>
          <span className="hidden sm:inline">|</span>
          <button
            onClick={() => navigate("/contact")}
            className="text-sm hover:text-gray-300 transition-colors pl-2"
          >
            Contact Me
          </button>
        </div>

        {/* Right Side (Social Icons) */}
        <div className="flex space-x-5 text-2xl">
          <a
            href="https://www.facebook.com/veeresh.hiremath.05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com/veereshmh4071"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/veeresh-hiremath-05/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://veereshmh.github.io/VeereshPortfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/veereshmh_90/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
