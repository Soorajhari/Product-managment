import React,{useEffect, useState} from "react";
import laptop from "../../assets/OKR0RO0-removebg-preview.png";
import Editproduct from "./Editproduct";
import useProductfetch from "../../hooks/useProductfetch";
import { useParams } from 'react-router-dom';
import instance from "../../axios/axios";
import Top from "./Top";
import Whishlist from "./Whishlist";

const Single = ({whishlist}) => {
    const[isModal,setModal]=useState(false)
    const [product,setProduct]=useState(null)
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        const fetchData = async () => {
            const body={
                id
            }
          try {
            const response = await instance.post("/single-product", body);
            console.log(response);
            if (response.data.status === "ok") {
             setProduct(response.data.Product);
            
            }
          } catch (error) {
            console.log(error.message);
          }
        };
      
        fetchData(); 
      
      
      }, []);
      
    console.log(product)
  return (
    <>
    {/* <Top/> */}
    <div className="bg-white flex ml-40 relative">
    
            
      <div className="  mt-20 ">
      {/* {product.map((item,index)=>( */}
        <div >
        <div className="border border-black w-[600px] flex justify-center items-center">
          <img src=  {`http://localhost:4000/images/${product?product.imagePath:""}`} alt="" />
        </div>
        <div className="flex gap-x-5 w-[600px] mt-4 ">
          <div className="border border-black">
            <img
              className="w-[280px] h-[200px] object-cover"
              src={`http://localhost:4000/images/${product?product.imagePath:""}`}
              alt=""
            />
          </div>
          <div className="border border-black">
            <img
              className="w-[280px] h-[200px] object-cover"
              src={`http://localhost:4000/images/${product?product.imagePath:""}`}
              alt=""
            />
          </div>
        </div>
        </div>
         {/* ))} */}
         <div className={`absolute z-10 right-0  top-0`}>
        {whishlist && <Whishlist />}
      </div>
        

      </div>
      <div className={`absolute z-30 left-[700px]`}>
        {isModal && <Editproduct setModal={setModal} prodata={product}/>}
      </div>

      <div className="mt-28 ml-12">
        {/* {product.map((item,index)=>( */}
       
            <div>
           
        <p className="font-semibold text-blue-500 text-3xl">
        {product ? product.title:""}
        </p>
        <p className="mt-2 font-semibold text-xl">   {product ? "$" +product.price:""}</p>

        <div className="mt-3 flex gap-x-3">
        {/* {product.map((item,index)=>( */}
            <>
          <p className="font-semibold">Availability:</p>
          <p className="text-green-500">In stock</p>
          </>
        {/* //   ))} */}
        </div>
        <div className="mt-3">
          <p className="">Hurry up! only    {product ? product.total:""} products left in stock</p>
        </div>
        <hr className="border border-gray-300 mt-8" />
        <div className="mt-10 flex gap-x-5">
          <p className="font-semibold text-xl">Ram:   {product ? product.ram:""}</p>
          <span className="bg-gray-300 w-[50px] h-[25px] flex justify-center items-center hover:border border-black">
            4 GB
          </span>
          <span className="bg-gray-300 w-[50px] h-[25px] flex justify-center items-center hover:border border-black">
            8 GB
          </span>
          <span className="bg-gray-300 w-[50px] h-[25px] flex justify-center items-center hover:border border-black">
            16 GB
          </span>
        </div>
        <div className="mt-6 flex">
          <p className="font-semibold text-xl">Quantity:</p>
          <div className="ml-2 flex">
            <span className="w-[25px] bg-gray-300 flex justify-center items-center border border-black">
              -
            </span>
            <span className="w-[25px] bg-gray-300 flex justify-center items-center border border-black">
              1
            </span>
            <span className="w-[25px] bg-gray-300 flex justify-center items-center border border-black">
              +
            </span>
          </div>
        </div>
        <div className="mt-8 flex gap-x-5">
          <button className="bg-[#EDA415] w-[140px] h-[35px] p-2 text-white font-semibold rounded-3xl flex justify-center items-center" onClick={()=>{setModal(true)}}>
            Edit Product
          </button>
          <button className="bg-[#EDA415] w-[140px] h-[35px] p-2 text-white font-semibold rounded-3xl flex justify-center items-center">
            Buy it now
          </button>
          <ion-icon
            class="w-[30px] mt-1 text-3xl flex justify-center items-center rounded-full bg-gray-300"
            name="heart-outline"
          ></ion-icon>
        </div>
        </div>
        {/* // ))} */}
      </div>
    
            
    </div>
    </>
  );
};

export default Single;
