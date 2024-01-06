import React from "react";
import Nav from "../components/styled/Nav";
import Product from "../components/styled/Product";
import Category from "../components/styled/Category";
import useProductfetch from "../hooks/useProductfetch";
import Addproduct from "../components/styled/Addproduct";

const Home = () => {
    const {handleSearch,handleSearchSubmit,data,handleCheckboxChange}=useProductfetch()

  return (
    <div className={`relative`}>
      <Nav  handleSearch={handleSearch}
        handleSearchSubmit={handleSearchSubmit} />
      <div className="flex gap-x-44">
        <Category  handleCheckboxChange={handleCheckboxChange}  />
        <Product data={data} />
        
      </div>
    </div>
  );
};

export default Home;
