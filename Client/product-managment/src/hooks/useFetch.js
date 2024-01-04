import React, { useState, useEffect } from "react";
import instance from "../axios/axios";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await instance.get("/get-category");
      console.log(response);
      setData(response.data.data)
    } catch (error) {
      console.log(error.message);
      setError(response.status);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {
    data,
    error,
  };
};

export default useFetch;
