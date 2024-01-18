import React from "react";
import Nav from "../components/styled/Nav";
import Product from "../components/styled/Product";
import Category from "../components/styled/Category";
import useProductfetch from "../hooks/useProductfetch";
import Modal from "../components/styled/Modal";
import useWhishlist from "../hooks/useWhishlist";


const Home = () => {
  const { handleSearch, handleSearchSubmit, data, handleCheckboxChange } =
    useProductfetch();
    const {whishModal}=useWhishlist()


  return (
    <div className={`relative`}>
      <Nav
        handleSearch={handleSearch}
        handleSearchSubmit={handleSearchSubmit}
      />
      {/* <div className="absolute z-20"> */}
      {whishModal &&  <Modal/>}
    
      {/* </div> */}
     
      <div className="flex gap-x-44">
        <Category handleCheckboxChange={handleCheckboxChange} />
        <Product data={data} />
      </div>
    </div>
  );
};

export default Home;
