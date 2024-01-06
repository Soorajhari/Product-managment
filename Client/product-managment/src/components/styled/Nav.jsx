import React from "react";
import { Link } from "react-router-dom";
import useWhishlist from "../../hooks/useWhishlist";
import Error from "./Error";
import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";

const Nav = ({ handleSearch, handleSearchSubmit }) => {
  const { error } = useWhishlist();
  const logout=useLogout()
  const navigate=useNavigate()
  const Data=JSON.parse(localStorage.getItem("user"))

  const handleClick = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
     
      <div className="bg-[#003F62]">
      {error && <Error error={error} />}
        <div className="w-[75%] mx-auto h-[90px] mt-4 flex items-center justify-between">
          <div className="w-full">
            <div className="flex items-center justify-center">
              <div className="bg-white w-[280px] p-2 rounded relative">
                <input
                  className="border-none w-full"
                  type="text"
                  placeholder="Search anything"
                  onChange={(e) => handleSearch(e.target.value)}
                />
             
                <div className="absolute inset-y-0 right-0 flex items-center justify-center bg-[#EDA415] w-[60px] rounded-bl-md">
                  <button onClick={(e) => handleSearchSubmit(e)}>Search</button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right flex gap-x-3">
            <ion-icon
              class="text-3xl  cursor-pointer text-white"
              name="heart-outline"
            ></ion-icon>
            <span className="text-white bg-yellow-600 text-lg rounded-full h-6 w-6 flex items-center justify-center">
              0
            </span>
            <Link to="/login">
              <p className="text-white">Signin</p>
            </Link>

            <ion-icon
              name="cart-outline"
              class="text-white text-3xl"
            ></ion-icon>
            <span className="text-white bg-yellow-600 text-lg rounded-full h-6 w-6 flex items-center justify-center">
              0
            </span>
            <p className="text-white">Cart</p>
            <div>
               {Data && <button onClick={handleClick} className="p-2 w-[100px] h-[35px] rounded-2xl bg-yellow-500 flex justify-center items-center text-white text-lg">Logout</button>} 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
