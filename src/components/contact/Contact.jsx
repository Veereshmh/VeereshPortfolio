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

  // Validation function
  const validateField = (name, value) => {
    if (!value.trim()) return `${name} is required`;
    if (name === "email") {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(value)) return "Invalid email address";
    }
    if (name === "message" && value.trim().length < 10)
      return "Message must be at least 10 characters";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(
      (key) => (newErrors[key] = validateField(key, formData[key]))
    );

    setErrors(newErrors);

    if (Object.values(newErrors).every((err) => err === "")) {
      // Save in localStorage
      const existingData = JSON.parse(localStorage.getItem("contacts")) || [];
      localStorage.setItem(
        "contacts",
        JSON.stringify([...existingData, formData])
      );

      // Clear form
      setFormData({ firstName: "", lastName: "", email: "", message: "" });

      alert("Thank you! Your message has been sent.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8">
      {/* Banner */}
      <div className="bg-blue-600 text-white py-16 text-center rounded-lg mb-8">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-lg">We’d love to hear from you!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side - Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Address</h2>
          <p>📍 123 Main Street, Bangalore, India</p>
          <p>📧 info@example.com</p>
          <p>📞 +91 98765 43210</p>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First & Last Name */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1 font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                  required
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>

              <div className="flex-1">
                <label className="block mb-1 font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                  required
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                required
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

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
