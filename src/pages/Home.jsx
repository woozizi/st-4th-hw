import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <Link to="/detail/id">디테일로 이동</Link>
    </div>
  );
};

export default Home;
