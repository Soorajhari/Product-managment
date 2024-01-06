import React, { useState } from "react";
import instance from "../../axios/axios";

const Addcategory = (props) => {
  const [category, setCategory] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    const body = {
      category,
    };

    try {
      const response = await instance.post(
        "/category",
        body // passing details to the backedn route
      );
      console.log(response.data);
      if (response.data.status == "ok") {
        props.setIsModal(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    props.setIsModal(false);
  };

  return (
    <div className="flex font-[Ubuntu] justify-center items-center  2xl:min-h-screen">
      <div className="w-[370px] bg-[#EEF0E5]  h-[230px] mt-20 md:mt-10 2xl:mt-0 rounded-2xl shadow-2xl">
        <div className="mx-auto text-center">
          <h2 className="mt-10 text-3xl font-semibold">Add Category</h2>
        </div>
        <div className="flex justify-center mt-6">
          <input
            type="text"
            className="w-[300px] h-[40px] rounded-lg border border-gray-400 pl-4"
            placeholder="Enter category name"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="flex justify-center gap-x-5 mt-6">
          <button
            onClick={(e) => handleAdd(e)}
            className="p-2 w-[80px] bg-[#EDA415] rounded-2xl"
          >
            Add
          </button>
          <button
            className="p-2 w-[80px] bg-gray-400 rounded-2xl"
            onClick={(e) => handleClose(e)}
          >
            Discard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addcategory;
