import React from "react";
import icon from '../../assets/new.png'
import { getProduct } from "../../functions/getProduct";
import useProduct from "../../hooks/useProduct";


const Addproduct = () => {
  const productData=getProduct()
  const {handleSubmit,handleChange,handleFileChange,values:product,error,selectedFiles}=useProduct(productData)


   

  return (
    <div className="flex font-[Ubuntu] justify-center items-center  2xl:min-h-screen ">
      <div className="w-[600px] md:w-[650px] md:h-[680px]   h-auto mt-20 md:mt-10 2xl:mt-0 rounded-2xl   shadow-2xl ">
        <div className="mx-auto text-center ">
          <h2 className="mt-16 text-3xl font-semibold ">Add Product</h2>
        </div>
        <form action="" enctype="multipart/form-data">
        <div className="flex mt-9 justify-between ">
          <p className="ml-10 text-xl text-gray-400">Title:</p>
          <div className="mr-12">
            <input
              className="w-[400px] ml-10 text-lg  h-[40px] rounded-lg border border-gray-400 "
              type="text"
              placeholder="" onChange={(e)=>handleChange(e)} name="title" value={product.title} required
            />
          </div>
        </div>
      
        <div className="flex mt-10 justify-between ">
          <p className="ml-10 text-xl text-gray-400">Ram:</p>
          <div className=" flex mr-10">
            <input
              className="ml-4 text-lg w-[200px] h-[40px] rounded-lg border border-gray-400"
              type="number"
              placeholder="Ram" onChange={(e)=>handleChange(e)}  name="ram" value={product.ram} required
            />
            
            <input
              className="ml-3 text-xl w-[200px] h-[40px] rounded-lg border border-gray-400"
              type="number"
              placeholder="Price" onChange={(e)=>handleChange(e)}  name="price" value={product.price} required
            />
          </div>
        </div>
        <div className="text-red-500 text-center ml-16 mt-2 text-lg">{error}</div>
        <div className="flex mt-9 justify-between ">
          <p className="ml-10 text-xl text-gray-400">Total Products:</p>
          <div className=" flex mr-10 ml-4">
            <input
              className="ml-4 text-lg w-[80px] h-[40px] rounded-lg border border-gray-400"
              type="number"
              placeholder="total" onChange={(e)=>handleChange(e)}  name="total" value={product.total} required
            />
          </div>
          <div className="flex ">
            <p className=" text-xl text-gray-400 ">Sub-Category:</p>
            <div className="mr-4">
              <select
                name="subcategory"  value={product.subcategory}
                id=""
                className=" text-lg w-[200px] h-[40px] rounded-lg border border-gray-400" onChange={(e)=>handleChange(e)} required
              >
                <option disabled selected value="">
                  Choose an option
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
       
        </div>
        <div className="text-red-500 text-center ml-16 mt-2 text-lg">{error}</div>
        <div className="flex mt-9 justify-between ">
          <p className="ml-10 text-xl text-gray-400">Decription:</p>
          <div className="mr-14">
            <input
              className="w-[400px] ml-10 text-lg  h-[40px] rounded-lg border border-gray-400 " onChange={(e)=>handleChange(e)}
              type="text"
              placeholder="description"  name="description" value={product.description} required
            />
          </div>
        </div>

        <div className="flex mt-9 justify-between ">
            <p className="ml-10 text-xl text-gray-400 ">Category:</p>
            <div className="mr-14">
              <select
                name="category" value={product.category}
                id=""
                className=" text-lg ml-10 w-[400px] h-[40px] rounded-lg border border-gray-400" onChange={(e)=>handleChange(e)} required
              >
                <option disabled selected value="">
                  Choose an option
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>

        <div className="flex mt-9  ">
          <p className="ml-10 text-xl text-gray-400">Upload Image:</p>
          <label className="text-center ml-8 text-lg flex justify-center items-center cursor-pointer  border-dashed border border-gray-500 h-[70px] w-[70px] py-2 px-4 rounded">
         <img className="" src={icon} alt="gallery" />
            <input
              className=" hidden"
              type="file"
              placeholder="" accept=".jpg,.png"  required onChange={(e)=>handleFileChange(e)} multiple
            />
          </label>
          {selectedFiles.map((file, index) => (
          <div key={index} className="text-center ml-8 text-lg flex justify-center items-center cursor-pointer  border-dashed border border-gray-500 h-[70px] w-[70px] py-2 px-4 rounded">
           <img
              className="selected-image "  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              src={URL.createObjectURL(file)}
              alt={`Selected ${index}`}
            />
          </div>
                ))}
        </div>
        <div className="flex justify-end mr-6 gap-x-5 mt-6">
          <button 
            onClick={(e) => handleSubmit(e,product)}
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
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
