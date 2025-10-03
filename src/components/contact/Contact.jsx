import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "firstName":
        if (!value.trim()) error = "First name is required";
        break;
      case "lastName":
        if (!value.trim()) error = "Last name is required";
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Invalid email address";
        break;
      case "message":
        if (value.trim().length < 10)
          error = "Message must be at least 10 characters";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const existingData = JSON.parse(localStorage.getItem("contacts")) || [];
    const updatedData = [...existingData, formData];
    localStorage.setItem("contacts", JSON.stringify(updatedData));

    navigate("/contacts");
  };

  return (
    <div>
      {/* 🔹 Banner Section with background image */}
      <div className="relative h-64 flex items-center justify-center text-center text-white">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1350&q=80"
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Text */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="mt-2 text-lg">
            Have questions? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* 🔹 Contact Content Section */}
      <div className="max-w-6xl mx-auto p-6 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Address Info */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <p className="mb-2">
            <strong>Address:</strong> Bengaluru, India
          </p>
          <p className="mb-2">
            <strong>Email:</strong> Veereshmh407@gmail.com
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +91 9986027208 / 6366621888
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First & Last Name */}
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                rows="4"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
