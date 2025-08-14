import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-black text-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center">
        <p className="text-sm pr-2">Veeresh Hiremath</p>
        <span className="hidden sm:inline">|</span>
        <a
          href="" onClick={() => navigate("/contact")}
          className="text-sm hover:text-gray-300 transition-colors pl-2"
        >
          Contact Me
        </a>
      </div>
    </footer>
  );
}

export default Footer;
