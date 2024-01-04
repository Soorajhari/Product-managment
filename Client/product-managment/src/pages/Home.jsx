import React from "react";
import Nav from "../components/styled/Nav";
import Product from "../components/styled/Product";
import Category from "../components/styled/Category";
import List from "../components/styled/List";
// import Addcategory from "../components/styled/Addcategory";

const Home = () => {
    // const[isModal,setIsModal]=useState(false)

  return (
    <div className={`relative`}>
      <Nav />
      {/* <div className={`absolute z-10 left-[800px] `}>
            {isModal && <Addcategory />}
            </div> */}
      <div className="flex justify-between">
        <Category />
        <div className="mt-36">
        <List />
        </div>
        <Product  />
        
      </div>
     
    </div>
  );
};

export default Home;
