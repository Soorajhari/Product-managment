import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import instance from "../../axios/axios";

const Addsubcategory = () => {
    const[value,setValue]=useState("")
    const [selectedValue, setSelectedValue] = useState('');
  const { data } = useFetch("/get-category");
  console.log(data);

  const handleSubmit= async (e)=>{
    e.preventDefault();
    const body = {
      value,selectedValue
    };

    try {
      const response = await instance.post(
        "/sub-category",
        body // passing details to the backedn route
      );
      console.log(response.data);
      if (response.data.status == "ok") {
        // props.setIsModal(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="flex font-[Ubuntu] justify-center items-center  2xl:min-h-screen">
      <div className="w-[370px] bg-[#ffff] h-[300px] mt-20 md:mt-10 2xl:mt-0 rounded-2xl shadow-2xl">
        <div className="mx-auto text-center">
          <h2 className="mt-10 text-3xl font-semibold">Add Sub Category</h2>
        </div>
        <div className="flex justify-center">
          <select className="mt-6 w-[300px] h-[40px] rounded-lg border border-gray-400"  onChange={(e) => setSelectedValue(e.target.value)}>
            <option disabled selected value="">
              Select Category
            </option>
            {data.map((item, index) => {
              return (
                <option key={index} value={item.category}>
                  {item.category}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex justify-center mt-6">
          <input
            type="text"
            className="w-[300px] h-[40px] rounded-lg border border-gray-400 pl-4"
            placeholder="Add sub-category" onChange={(e)=>{setValue(e.target.value)}}
          />
        </div>
        <div className="flex justify-center gap-x-5 mt-6">
          <button className="p-2 w-[80px] bg-[#EDA415] rounded-2xl" onClick={(e)=>(handleSubmit(e))}>Add</button>
          <button className="p-2 w-[80px] bg-gray-400 rounded-2xl">
            Discard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addsubcategory;
