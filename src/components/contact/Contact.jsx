import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Validation
  const validate = (name, value) => {
    let error = "";
    if (!value.trim()) {
      error = `${name} is required`;
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) error = "Invalid email address";
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      newErrors[key] = validate(key, formData[key]);
    });

    setErrors(newErrors);

    if (Object.values(newErrors).every((err) => err === "")) {
      const existingData = JSON.parse(localStorage.getItem("contacts")) || [];
      const updatedData = [...existingData, formData];
      localStorage.setItem("contacts", JSON.stringify(updatedData));
      alert("Form submitted successfully!");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    }
  };

  return (
    <div>
      {/* Banner */}
      <div className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg mt-2">We’d love to hear from you!</p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        {/* Left Side - Address */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Address</h2>
          <p>📍 123 Main Street, Bangalore, India</p>
          <p>📧 info@example.com</p>
          <p>📞 +91 98765 43210</p>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold">Get In Touch</h2>
          <p className="text-gray-500 mb-4">Fill out the form below</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First & Last Name */}
            <div className="flex gap-4">
              <div className="relative w-1/2">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="peer w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                  placeholder=" "
                  required
                />
                <label className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500">
                  First Name
                </label>
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>

              <div className="relative w-1/2">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="peer w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                  placeholder=" "
                  required
                />
                <label className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500">
                  Last Name
                </label>
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="peer w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                placeholder=" "
                required
              />
              <label className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500">
                Email
              </label>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="peer w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                placeholder=" "
                required
              />
              <label className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500">
                Message
              </label>
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