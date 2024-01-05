import React, { useState, useEffect ,useMemo} from "react";
import instance from "../axios/axios";

const useProductfetch = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const[search, setSearch]=useState("")
  
     

    const fetchProductData = async () => {
      try {
        const response = await instance.get("/get-product");
        // setData(response.data.data);
      } catch (error) {
        setError(error.message);
      }
    };
  
    useEffect(() => {
      fetchProductData();
    }, []);
  

    const body={
        search
        }
    useEffect(() => {
        const fetchDataBasedOnSearch = async () => {
          try {
            const response = await instance.post("/search", body);
            setData(response.data.Product);
          } catch (error) {
            setError(error.message);
          }
        };
    
        fetchDataBasedOnSearch(); 
      }, [search])







  const handleSearch=(values)=>{
    setSearch(values)

  }

      
    const handleSearchSubmit=async(e)=>{
        e.preventDefault()
         


    }
    console.log(data)

    return {
      data,
      error,
      handleSearch,
      handleSearchSubmit
     
    };
  };
  
  export default useProductfetch;
  

