import { useState } from "react";
import { storeUserInLocalStorage } from "../functions/localStorage";
import {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
} from "../redux/userDetails";
import { useValidate } from "./useValidate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import instance from "../axios/axios";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const { errors, validate, clearError } = useValidate();
  const[error,setError]=useState()
  const navigate = useNavigate();
  //  const dispatch = useDispatch();

  console.log(values);

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
    const valid = validate(user, formType);
    const body = {
      userName: values.userName,
      email: values.email,
      password: values.password,
    };

    if (valid) {
      try {
        if (formType === "signup") {
          try {
            const response = await axios.post(
              "http://localhost:4000/signup",
              body
            );
            console.log(response.data);

            if (response.data.status === "ok") {
              navigate("/login");
            } else {
            }
          } catch (error) {

          }
        } else {
          try {
            const loginResponse = await axios.post(
              "http://localhost:4000/login",
              body
            );
            console.log(loginResponse.data);
            if(loginResponse.data.status=="ok"){
              storeUserInLocalStorage(loginResponse.data)
              signInSuccess(loginResponse.data)
              navigate("/home")
            }else{
              setError(loginResponse.data.message)
            }
           
          } catch (error){
            console.log(error.message)
          }
        }

        resetForm();
      } catch (err) {}
    }
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return { values, handleChange, handleSubmit, errors,error };
};

export default useForm;
