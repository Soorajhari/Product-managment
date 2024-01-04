import React, { useState } from "react";
import instance from "../axios/axios";

const useProduct = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const[error,setError]=useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const formData = new FormData();
  const handleFileChange = (e) => {
    const files = e.target.files;
    const selected = Array.from(files).slice(0, 3); 
    setSelectedFiles((prevFiles) => [...prevFiles, ...selected])
    selected.forEach((file, index) => {
      formData.append(`file-${index}`, file);
    });
  };

  console.log(values);

  const handleSubmit = async (e,product) => {
    e.preventDefault();
    const body = {
      title: values.title,
      ram: values.ram,
      price: values.price,
      total: values.total,
      subcategory: values.subcategory,
      description: values.description,
      category: values.category,
      formData:FormData
    };
    console.log(body);
    if (isNaN(values.ram) || isNaN(values.price) || isNaN(values.total) || values.ram <= 0 || values.price <= 0 || values.total <= 0) {
      setError('value must be numeric and greater than zero.');
      return; 
    }
    try {
      if (error=="") {
        const response = await instance.post(
          "/product",
          body
        );
        console.log(response.data);
      }
      // resetForm();
      // showToast(`${formType?.toUpperCase()} SUCESS`, "success");
    } catch (err) {
      setError(err?.data?.message, "error");
    }
    // }
  };

  return {
    handleChange,
    handleSubmit,
    values, error,handleFileChange,selectedFiles
  };
};

export default useProduct;
