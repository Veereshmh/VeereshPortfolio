import React, { useState, useEffect } from 'react';

function Userapi() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            setUsers(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            setLoading(false);
        })
    }, []);

    if(loading) {
        return <p>Loading.....</p>
    }

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      <table border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead style={{ backgroundColor: "#f2f2f2" }}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>city</th>
                <th>Company</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => (
            <tr key={user.id} className='justify-center text-center'>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.company.name}</td>
            </tr>
            ))}
        </tbody>
      </table>
      </div>
  )
}

export default Userapi