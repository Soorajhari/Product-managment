import React from "react";
import Nav from "../components/styled/Nav";
import Product from "../components/styled/Product";
import Category from "../components/styled/Category";

const Home = () => {
  return (
    <div className={`relative`}>
      <Nav />
      <div className="flex gap-x-44">
        <Category />
        <Product />
      </div>
    </div>
  );
};

export default Home;
