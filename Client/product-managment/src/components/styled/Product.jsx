import React, { useState } from "react";
import Addcategory from "./Addcategory";
import Addsubcategory from "./Addsubcategory";


const Product = () => {
    const[isModal,setIsModal]=useState(false)
    const[subcategory,setSubCategory]=useState(false)
    const openModal=()=>{
        setIsModal(true)
    }
    const openSubCategory=()=>{
        setSubCategory(true)
    }
  
  return (
    // <div className="">
    <>
      <div className="flex justify-end mt-10 gap-x-5 mr-10">
        <button className="p-2 bg-[#EDA415] w-[130px] h-[50px] rounded-2xl text-white text-lg" onClick={openModal}>
          Add Category
        </button>
        <button className="p-2 bg-[#EDA415] w-[180px] h-[50px] rounded-2xl text-white text-lg" onClick={openSubCategory}>
          Add SubCategory
        </button>
        <button className="p-2 bg-[#EDA415] w-[130px] h-[50px] rounded-2xl text-white text-lg">
          Add Products
        </button>
      </div>
      <div className={`absolute z-10 left-[800px] `}>
            {isModal && <Addcategory setIsModal={setIsModal} />}
            </div>
            <div className={`absolute z-10 left-[800px] `}>
            {subcategory && <Addsubcategory />}
            </div>
    </>
  );
};

export default Product;
