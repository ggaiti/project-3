import React, { useState } from "react";
import { loginUser } from "../../api/user";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userError, setUserError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setUserError("");
    setPasswordError("");

    if (username.length < 4) {
      return setUserError("Username must be 4 characters");
    }

    if (password.length < 4) {
      return setPasswordError("Password must be 4 characters");
    }

    const existingUser = {
      username: username,
      password: password,
    };

    const response = await loginUser(existingUser);
    if (response.data.error.name === "username") {
      return setUserError(response.data.error.message);
    }
    if (response.data.error.name === "password") {
      return setPasswordError(response.data.error.message);
    }
    console.log(response);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2 className=" mt-3 d-flex justify-content-center">Log In</h2>
        <div className=" position-absolute top-50 start-50 translate-middle">
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="Username"
              required
            />
            <p className="text-danger">{userError}</p>
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
            <p className="text-danger">{passwordError}</p>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
