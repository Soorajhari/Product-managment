import React from "react";
import Nav from "../components/styled/Nav";
import Product from "../components/styled/Product";
import Category from "../components/styled/Category";
import useProductfetch from "../hooks/useProductfetch";


const Landing = () => {
  const {  data  } =
    useProductfetch();

  return (
    <div className={`relative`}>
      <Nav
      
      />
      <div className="flex gap-x-44">
        <Category  />
        <Product data={data} />
      </div>
    </div>
  );
};

export default Landing