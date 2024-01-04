import { useState } from "react";
import { signUpSuccess,signUpFailure,signInSuccess,signInFailure } from "../redux/userDetails";
// import { useAuth } from "./useAuth";
import { useValidate } from "./useValidate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from 'axios'

import { showToast } from "../functions/notification";
import instance from "../axios/axios";

 const useForm = (initialValues) => {
  // const dispatch = useDispatch();
 
  const [values, setValues] = useState(initialValues);
  const { errors, validate, clearError } = useValidate();
//  const navigate = useNavigate();
  // const { signin, signup } = useAuth();

  console.log(values)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    clearError(name);
  };

  const handleSubmit = async (e, formType, user) => {
    e.preventDefault();
    // const valid = validate(user, formType);
    const body={
     userName: values.userName,
     email:values.email,
     password:values.password

    }
    console.log(body)

    // if (valid) {
      try {
      if(formType=="signup"){
        const response=await axios.post("http://localhost:4000/signup",body)
        console.log( response.data)
      }
        // resetForm();
        showToast(`${formType?.toUpperCase()} SUCESS`, "success");
      } catch (err) {
        showToast(err?.data?.message, "error");
      }
    // }
  };

  // const resetForm = () => {
  //   setValues(initialValues);
  // };

  return { values, handleChange, handleSubmit };
};

export default useForm;
