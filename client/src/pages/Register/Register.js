import React, { useState } from "react";
import { hello } from "../../api/user";

const Register = () => {
  const [greet, setGreet] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await hello();
    console.log(response);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 class=" d-flex justify-content-center">Register</h2>
        <div class=" position-absolute top-50 start-50 translate-middle">
          <div class="mb-3">
            <label class="form-label">Full Name:</label>
            <input class="form-control " type="text" name="Full Name" />
          </div>
          <div class="mb-3">
            <label class="form-label">Username:</label>
            <input class="form-control" type="text" name="Username" />
          </div>
          <div class="mb-3">
            <label class="form-label">Password:</label>
            <input class="form-control" type="password" name="Password" />
          </div>
          <div class="mb-3">
            <label class="form-label">Confirm Password:</label>
            <input
              class="form-control"
              type="password"
              name="Confirm Password"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
