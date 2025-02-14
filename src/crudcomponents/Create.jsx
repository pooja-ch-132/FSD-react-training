import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let payload = { name, email, phone };
    //console.log(payload);
    axios
      .post("http://localhost:3000/users", payload)
      .then((res) => {
        //console.log("User created successfully");
        toast.success("user created successfully");
        navigate("/");
      })
      .catch((err) => toast.error("user not created"));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
        </div>
        <div>
          <label>Phonenumber</label>
          <input
            type="tel"
            placeholder="phone number"
            maxLength={10}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />{" "}
          <br />
        </div>
        <input type="submit" value="Create User" />
        <Link to="/">Back to HomePage</Link>
      </form>
    </div>
  );
};

export default Create;
