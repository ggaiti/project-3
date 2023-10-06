import React, { useState } from "react";
import { hello, registerUser } from "../../api/user";
import useForm from "react-hook-form";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //   const { register, handleSubmit } = useForm()

  async function onSubmit(e) {
    e.preventDefault();
    const newUser = {
      fullname: fullname,
      username: username,
      password: password,
    };
    console.log(newUser);

    // const response = await registerUser();
    // console.log(response);
  }
  //   setFullname(e.target.value)
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2 className=" mt-3 d-flex justify-content-center">Register</h2>
        <div className=" position-absolute top-50 start-50 translate-middle">
          <div className="mb-3">
            <label className="form-label">Full Name:</label>
            <input
              className="form-control"
              onChange={(e) => setFullname(e.target.value)}
              type="text"
              name="Full Name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="Username"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="Password"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password:</label>
            <input
              className="form-control"
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              name="Confirm Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
