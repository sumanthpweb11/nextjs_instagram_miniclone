import Auth from "../components/Auth";
import Feed from "../components/Feed";
import { useState } from "react";

const Homepage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return isAuthenticated ? <Feed /> : <Auth />;
};

export default Homepage;
