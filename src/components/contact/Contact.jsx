import React, { useState } from "react";

function Contact() {
  const [activeSection, setActiveSection] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    time: "",
    projectDetails: "",
    checkboxes: [],
    infoTypes: []
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value)
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Basic fields */}
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Options */}
        <div className="space-y-2">
          <button
            type="button"
            onClick={() => setActiveSection("talk")}
            className={`block w-full text-left border p-2 rounded ${activeSection === "talk" ? "bg-gray-200" : ""}`}
          >
            Schedule a time to talk
          </button>
          {activeSection === "talk" && (
            <div className="space-y-2 mt-2 pl-4">
              <input
                type="date"
                name="date"
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
              />
              <input
                type="time"
                name="time"
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
              />
            </div>
          )}

          <button
            type="button"
            onClick={() => setActiveSection("project")}
            className={`block w-full text-left border p-2 rounded ${activeSection === "project" ? "bg-gray-200" : ""}`}
          >
            Discuss a job or project
          </button>
          {activeSection === "project" && (
            <div className="space-y-2 mt-2 pl-4">
              <textarea
                name="projectDetails"
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
                placeholder="Describe your project..."
              ></textarea>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="checkboxes"
                    value="Design"
                    onChange={handleInputChange}
                  />{" "}
                  Design
                </label>
                <label className="ml-4">
                  <input
                    type="checkbox"
                    name="checkboxes"
                    value="Development"
                    onChange={handleInputChange}
                  />{" "}
                  Development
                </label>
                <label className="ml-4">
                  <input
                    type="checkbox"
                    name="checkboxes"
                    value="Testing"
                    onChange={handleInputChange}
                  />{" "}
                  Testing
                </label>
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={() => setActiveSection("info")}
            className={`block w-full text-left border p-2 rounded ${activeSection === "info" ? "bg-gray-200" : ""}`}
          >
            Request additional information
          </button>
          {activeSection === "info" && (
            <div className="space-y-2 mt-2 pl-4">
              <p className="font-medium">Please select type(s) of requested information*</p>
              {["Work Portfolio", "References", "Background Check", "Other", "Resume"].map((type) => (
                <label key={type} className="block">
                  <input
                    type="checkbox"
                    name="infoTypes"
                    value={type}
                    onChange={handleInputChange}
                  />{" "}
                  {type}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium">Message</label>
          <textarea
            name="message"
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
