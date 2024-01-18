import React, { useEffect } from "react";
import laptop from "../../assets/OKR0RO0-removebg-preview.png";
import star from "../../assets/rating.png";
import { useSelector } from "react-redux";
import useWhishlist from "../../hooks/useWhishlist";
import instance from "../../axios/axios";
import { fetchProductsSuccess } from "../../redux/whishDetails";
import { useDispatch } from "react-redux";
import Error from "./Error";

const Whishlist = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  console.log(products);
  const {error}=useWhishlist()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.post("/get-whishlist");
        console.log(response);
        if (response.data.status === "ok") {
          dispatch(fetchProductsSuccess(response.data.data));
        }
      } catch (error) {
        console.log(error.message);      }
    };

    fetchData();
  }, []);

  return (
    <div className=" font-[Ubuntu]">
      <div className="bg-[#ffff] shadow-2xl w-[350px] h-screen">
        <div className="">
          <div className="bg-[#003F62] h-[80px] w-full relative">
            <ion-icon
              class="absolute top-5 bg-white ml-6 w-[35px] h-[35px] rounded-full"
              name="heart-outline"
            ></ion-icon>
          </div>
        </div>
        {products.map((item, index) => (
          <div className="flex mt-16 ml-5">
            <div key={index}>
              <img
                src={`http://localhost:4000/images/${item.imagePath}`}
                className="w-[110px] h-[120px] border border-black rounded-xl"
                alt="laptop"
              />
            </div>
            <div className="ml-4">
              <p>{products ? item.title : ""}</p>
              <div className="flex justify-between mt-2">
                <p className="">{products ? item.price:""}</p>
                <ion-icon
                  class="border border-black"
                  name="close-outline"
                ></ion-icon>
              </div>
              <div className="mb-4">
                <img className="w-[90px] h-[90px] " src={star} alt="review" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whishlist;
