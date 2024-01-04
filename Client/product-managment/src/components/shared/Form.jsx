import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import { getForm } from '../../functions/getForm';
import useForm from '../../hooks/useForm';


const Form = (props) => {
    const formData=getForm(props.formType)
    const{values:user,handleChange,handleSubmit,errors}=useForm(formData)
    // const handleChange=()=>{
    // }

    // const handleSubmit=()=>{

    // }
  return (
    <div className="flex font-[Ubuntu] justify-center items-center  2xl:min-h-screen">
    <div className="w-[600px] md:w-[950px] md:h-[550px]  h-auto mt-20 md:mt-10 2xl:mt-0  flex flex-row  shadow-2xl overflow-y-hidden  md:overflow-auto">
      <div className="  w-2/5 bg-[#265073] rounded-tr-2xl rounded-br-2xl hidden md:flex items-center justify-center relative">
        <div className="text-center ">
          <h2 className="text-[45px] text-white font-semibold">
            Welcome Back!
          </h2>
          <div>
            <p className=" text-white text-lg ">
              To keep connected with us please
            </p>
            <p className=" text-white text-lg">
            
              login with your personal info
            </p>
          </div>

          <div className="mt-10 border border-white rounded-3xl w-[200px] mx-auto p-2">
            <button className="text-white text-lg">Sign In</button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-3/5 bg-[#ffff] p-4 m bg-opacity-10">
        <h4 className="text-lg font-semibold ml-3 mt-5 drop-shadow-2xl shadow-black text-[#FFB534]">
          E-commerce App
        </h4>

        <h5 className=" text-center text-3xl font-semibold p-2  mt-5 shadow-black text-[#FFB534]">
          CreateAccount
        </h5>
        <form  >
            {props.formType=="signup" &&(
                <div>
             <div className="flex flex-col items-center md:flex-row justify-center gap-x-6 ">
            <div>
              <div className="bg-[#ECF8F9] w-60  max-w-xs p-2 flex items-center mt-3  md:mt-5 shadow-lg ">
                <FaRegEnvelope className="text-gray-400 m-2" />
                <input
                  type="firstanme"
                  name="userName"
                  placeholder="User name"
                  className="bg-[#ECF8F9] outline-none flex-1 "
                  autoFocus onChange={(e)=>handleChange(e)}  
                />
              </div>
            </div>
          </div>
          <div>
            <p></p>
          </div>
                </div>

         
           )} 
          <div className="flex flex-col items-center md:flex-row justify-center gap-x-6  ">
            <div>
              <div className="bg-[#ECF8F9] w-60  max-w-xs p-2 flex items-center mt-6 md:mt-10 shadow-lg ">
                <FaRegEnvelope className="text-gray-400 m-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-[#ECF8F9] outline-none flex-1 " 
                  // required
                  required onChange={(e)=>handleChange(e)} 
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row justify-center gap-x-6  ">
            <div>
              <div className="bg-[#ECF8F9] w-60  max-w-xs p-2 flex items-center  mt-6 md:mt-10 shadow-lg ">
                <FaRegEnvelope className="text-gray-400 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-[#ECF8F9] outline-none flex-1 "
                  // required
                  required onChange={(e)=>handleChange(e)}  
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10 ml-10">
            <button onClick={(e)=>{handleSubmit(e,props.formType,user)}} className="border bg-[#FFB534] p-3 w-[200px] rounded-full text-lg text-white font-semibold hover:bg-white hover:text-[#3981b6] ">
              {props.formType.toUpperCase()} 
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Form