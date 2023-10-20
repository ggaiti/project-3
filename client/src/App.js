import React, { useReducer } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { UserContext, UserContextDispatch } from "./UserContext";

function App() {
  const initialUser = { userId: "", post: "" };

  const [user, dispatch] = useReducer(userReducer, initialUser);

  return (
    <UserContext.Provider value={user}>
      <UserContextDispatch.Provider value={dispatch}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContextDispatch.Provider>
    </UserContext.Provider>
  );

  function userReducer(id, action) {
    switch (action.type) {
      case "login": {
        return { userId: action.userId, post: action.post };
      }
      case "logout": {
        return initialUser;
      }
      default: {
        throw Error("Unknown action: " + action.type);
      }
    }
  }
}

export default App;
