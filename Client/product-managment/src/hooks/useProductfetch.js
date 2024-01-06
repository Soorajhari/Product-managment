import React, { useState, useEffect, useMemo } from "react";
import instance from "../axios/axios";
import { useNavigate } from "react-router-dom";

const useProductfetch = () => {
  const [data, setData] = useState([]);
//   const[product,setProduct]=useState(null)
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
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
  const handleCheckboxChange = (isChecked, subCategoryName) => {
    let updatedCategories;
    if (isChecked) {
      updatedCategories = [...selectedSubcategories, subCategoryName];
    } else {
      updatedCategories = selectedSubcategories.filter((category) => category !== subCategoryName);
    }
    setSelectedSubcategories(updatedCategories);
    filterItems(updatedCategories); // Call filterItems with the updated categories
  };;

//   console.log(selectedSubcategories)
  const filterItems = async(categories) => {
    console.log(categories)
    const body={
        categories
    }
    try{
        const response= await instance.post("/filter",body)
        console.log(response.data)
        setData(response.data.filterData
            )
    }catch(error){
        console.log(error.message)
    }
   
  };




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
    handleSearchSubmit,handleCheckboxChange,filterItems
  
  };
};

export default useProductfetch;
