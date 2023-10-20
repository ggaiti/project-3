import React, { useContext } from "react";
import { UserContext, UserContextDispatch } from "../../UserContext";
const Home = () => {
  const dispatch = useContext(UserContextDispatch);

  return <div>Home</div>;
};

export default Home;
