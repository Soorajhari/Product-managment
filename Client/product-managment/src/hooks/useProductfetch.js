import React, { useState, useEffect, useMemo } from "react";
import instance from "../axios/axios";
import { useNavigate } from "react-router-dom";

const useProductfetch = () => {
  const [data, setData] = useState([]);
//   const[product,setProduct]=useState(null)
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const navigate=useNavigate()

  const fetchProductData = async () => {
    try {
      const response = await instance.get("/get-product");
      setData(response.data.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const body = {
    search,
  };
  // useEffect(() => {
  //     const fetchDataBasedOnSearch = async () => {

  //     };

  //     fetchDataBasedOnSearch();
  //   }, [search])

//   const handleSingle = async (e, id) => {
//     e.preventDefault();
//     const body = {
//       id,
//     };
//     try {
//       const response = await instance.post("/single-product", body);
//       console.log(response);
//     //   if(response.data.status=="ok"){
//         await setProduct(response.data.Product)
//         navigate("/single")
//     //   }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// console.log(product)
  const handleSearch = (values) => {
    setSearch(values);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post("/search", body);
      setData(response.data.Product);
    } catch (error) {
      setError(error.message);
    }
  };
  console.log(data);

  return {
    data,
    error,
    handleSearch,
    handleSearchSubmit,
  
  };
};

export default useProductfetch;
