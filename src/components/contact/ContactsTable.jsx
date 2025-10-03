import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactsTable() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(storedData);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Submitted Contacts</h2>

      {contacts.length === 0 ? (
        <p>No data found.</p>
      ) : (
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">First Name</th>
              <th className="border p-2">Last Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{contact.firstName}</td>
                <td className="border p-2">{contact.lastName}</td>
                <td className="border p-2">{contact.email}</td>
                <td className="border p-2">{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        onClick={() => navigate("/contact")}
        className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Back to Form
      </button>
    </div>
  );
}

export default ContactsTable;
