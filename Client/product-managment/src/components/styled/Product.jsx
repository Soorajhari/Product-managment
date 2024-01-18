import React, { useEffect, useState } from "react";
import Addcategory from "./Addcategory";
import Addsubcategory from "./Addsubcategory";
import ReactPaginate from "react-paginate";
import Addproduct from "./Addproduct";
import { useNavigate } from "react-router-dom";
import useWhishlist from "../../hooks/useWhishlist";
import "./product.css";
import Error from "./Error";

const Product = ({ data }) => {

  const [isModal, setIsModal] = useState(false);
  const [subcategory, setSubCategory] = useState(false);
  const [product, setProduct] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const perPage = 4;
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
 
  const { handleWhishlist ,error} = useWhishlist();

  const navigate = useNavigate();
  console.log(data);

  const openModal = () => {
    setIsModal(true);
  };
  const openSubCategory = () => {
    setSubCategory(true);
  };
  const openProduct = () => {
    setProduct(true);
  };

  const firstLogin = JSON.parse(localStorage.getItem('user'));
  console.log(firstLogin.accesstoken)



  useEffect(() => {
    setPageNumber(Math.ceil(data.length / perPage));
    setCurrentItems(data.slice(itemOffset, itemOffset + perPage));
  }, [itemOffset, perPage, data]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * perPage;
    setItemOffset(newOffset);
  };

  return (
    <>

      <div className="">
        <div className="flex-col items-end">
          <div className="flex justify-end mt-10 gap-x-5 mr-10">
            <button
              className="p-2 bg-[#EDA415] w-[130px] h-[50px] rounded-2xl text-white text-lg"
              onClick={openModal}
            >
              Add Category
            </button>
            <button
              className="p-2 bg-[#EDA415] w-[180px] h-[50px] rounded-2xl text-white text-lg"
              onClick={openSubCategory}
            >
              Add SubCategory
            </button>
            <button
              className="p-2 bg-[#EDA415] w-[130px] h-[50px] rounded-2xl text-white text-lg"
              onClick={openProduct}
            >
              Add Products
            </button>
            <div className={`absolute z-[999] left-[700px] top-0 `}>
              {product && <Addproduct setProduct={setProduct} />}
            </div>
          </div>
          <div className={`absolute z-10 left-[800px] top-10`}>
            {isModal && <Addcategory setIsModal={setIsModal} />}
          </div>
          <div className={`absolute z-10 left-[800px] top-12 `}>
            {subcategory && <Addsubcategory setSubCategory={setSubCategory} />}
          </div>

          <div className="flex gap-x-10 flex-wrap mt-12 mr-12 ">
            {currentItems.map((item, index) => (
              <div className="flex  ">
                <div className="border border-black w-[300px] h-[230px] rounded-xl overflow-hidden">
                  <div key={index}>
                    <div className="flex justify-center">
                      <img
                        src={`http://localhost:4000/images/${item.imagePath[0]}`}
                        onClick={() => navigate(`/single/${item._id}`)}
                        className="w-[150px] h-[120px] object-cover cursor-pointer"
                        alt="laptop"
                      />
                      <ion-icon
                        class="mt-6 text-xl cursor-pointer bg-blue-300 rounded-full w-[40px] h-[40px] flex justify-center items-center hover:bg-red-400"
                        name="heart-outline"
                        onClick={(e) => handleWhishlist(e, item._id)}
                      ></ion-icon>
                    </div>

                    <div className="p-2">
                      <p className="font-semibold text-blue-600">
                        {item.title}
                      </p>
                      <div className="flex justify-between mt-2">
                        <p className="font-medium">{"$" + item.price}</p>
                      </div>
                      <div className="mt-2">
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-x-4 justify-between mt-10 mr-12">
            <p className="text-base text-gray-500">10 of 456 items</p>
            <ReactPaginate
              pageCount={pageNumber}
              onPageChange={handlePageClick}
              breakLabel="..."
              nextLabel="next >"
              pageRangeDisplayed={3}
              previousLabel="< Previous"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName="page-cum"
              previousLinkClassName="page-cum"
              nextLinkClassName="page-cum"
              activeLinkClassName="active"
            />

            <p>
              Show <span className="text-yellow-600">10 rows</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
