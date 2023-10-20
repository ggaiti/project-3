import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext, UserContextDispatch } from "../UserContext";
import { logout } from "../api/user";

const Navbar = () => {
  const user = useContext(UserContext);
  const dispatch = useContext(UserContextDispatch);
  useEffect(() => {
    console.log(user);
  }, [user]);
  const handleLogout = async () => {
    try {
      const response = await logout();
      if (response.data.error !== undefined) {
        console.log("cannot log out");
      } else {
        dispatch({
          type: "logout",
        });
      }
    } catch (error) {}
    console.log("trying to log out");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="logo192.png" alt="logo" width={40} height={40} />
        </Link>
        <div id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {user.userId === "" ? (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Log In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page"
              >
                Logout
              </button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
