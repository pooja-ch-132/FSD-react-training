import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import create from "./create.css";
const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const data = useParams();
  console.log(data);
  //! to read or populate the individual user data
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + data.userId)
      .then((res) => {
        // console.log(res);
        setName(res.data.name);
        setEmail(res.data.email);
        setPhone(res.data.phone);
      })
      .catch((err) => console.log(err));
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    let payload = { name, email, phone };
    console.log(payload);
    axios
      .put("http://localhost:3000/users/" + data.userId, payload)
      .then((res) => {
        toast.success("user updated successfully");
        navigate("/");
      })
      .catch((err) => toast.error("user not updated"));
  };
  return (
    <div className="formBlock">
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
        </div>
        <div>
          <input
            type="tel"
            placeholder="phone number"
            maxLength={10}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />{" "}
          <br />
        </div>
        <input type="submit" value="Update User" />
        <Link to="/">Back to HomePage</Link>
      </form>
    </div>
  );
};

export default Edit;
