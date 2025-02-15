import React, { useEffect, useState } from "react";
import home from "./home.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router";
const Home = () => {
  const [users, setUsers] = useState([]);
  //console.log(users);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //! to delete individual user
  const deleteUser = (id) => {
    const confirm = window.confirm("Are you sure, you want to delete user");
    if (confirm) {
      axios
        .delete("http://localhost:3000/users/" + id)
        .then((res) => {
          toast.success("User deleted successfully");

          setTimeout(() => {
            window.location.reload();
          }, 1500);
        })
        .catch((err) => toast.error("User not deleted"));
    }
  };

  return (
    <section id="homeBlock">
      <article>
        <h1>List of Users</h1>
        <div className="createBtn">
          <Link to="/create">Add User (+)</Link>
        </div>
        {users && users.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => {
                return (
                  <tr key={i}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <Link to={`/edit/${user.id}`}>Edit</Link>
                      <button onClick={() => deleteUser(user.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h1>No data available</h1>
        )}
      </article>
    </section>
  );
};

export default Home;
