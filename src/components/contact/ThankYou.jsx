import React from "react";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You!</h1>
      <p className="mb-6 text-gray-700">
        Your message has been successfully submitted.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default ThankYou;
