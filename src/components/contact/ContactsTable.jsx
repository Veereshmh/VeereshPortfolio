import React, { useEffect, useState } from "react";

function ContactsTable() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(data);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Submitted Contacts</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">First Name</th>
              <th className="px-4 py-2 border">Last Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-2 border">{c.firstName}</td>
                <td className="px-4 py-2 border">{c.lastName}</td>
                <td className="px-4 py-2 border">{c.email}</td>
                <td className="px-4 py-2 border">{c.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactsTable;
