import React, { useState } from "react";
import icon from "../../assets/new.png";
import useFetch from "../../hooks/useFetch";
import instance from "../../axios/axios";
import { useNavigate } from "react-router-dom";
import Error from "./Error";

const Editproduct = ({ prodata, setModal }) => {
  const initialData = prodata
    ? { ...prodata }
    : {
        title: "",
        imagePath: [],
        price: "",
        total: "",
        category: "",
        subcategory: "",
        description: "",
        ram: "",
      };
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState();
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const { data, error } = useFetch("/get-subcategory");
  console.log(formData);

  const body = {
    id: prodata._id,
    title: formData.title,
    ram: formData.ram,
    price: formData.price,
    total: formData.total,
    subcategory: formData.subcategory,
    description: formData.description,
    category: formData.category,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post("/edit-product", body);
      if (response.data.status == "ok") {
        navigate("/home");
      } else {
        setErrors(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    setModal(false);
  };

  return (
    <>
      {errors && <Error error={errors} />}
      <div className="flex font-[Ubuntu] justify-center items-center  2xl:min-h-screen ">
        <div className="w-[600px] md:w-[650px] md:h-[680px] bg-[#EEF0E5]  h-auto mt-20 md:mt-10 2xl:mt-0 rounded-2xl   shadow-2xl ">
          <div className="mx-auto text-center ">
            <h2 className="mt-16 text-3xl font-semibold ">Add Product</h2>
          </div>
          <form>
            <div className="flex mt-9 justify-between ">
              <p className="ml-10 text-xl text-gray-400">Title:</p>
              <div className="mr-12">
                <input
                  className="w-[400px] ml-10 text-lg  h-[40px] rounded-lg border border-gray-400 "
                  type="text"
                  placeholder=""
                  value={formData.title}
                  name="title"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="flex mt-10 justify-between ">
              <p className="ml-10 text-xl text-gray-400">Ram:</p>
              <div className=" flex mr-10">
                <input
                  className="ml-4 text-lg w-[200px] h-[40px] rounded-lg border border-gray-400"
                  type="number"
                  placeholder="Ram"
                  value={formData.ram}
                  name="ram"
                  onChange={handleInputChange}
                  required
                />

                <input
                  className="ml-3 text-xl w-[200px] h-[40px] rounded-lg border border-gray-400"
                  type="number"
                  placeholder="Price"
                  value={formData.price}
                  name="price"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="text-red-500 text-center ml-16 mt-2 text-lg"></div>
            <div className="flex mt-9 justify-between ">
              <p className="ml-10 text-xl text-gray-400">Total Products:</p>
              <div className=" flex mr-10 ml-4">
                <input
                  className="ml-4 text-lg w-[80px] h-[40px] rounded-lg border border-gray-400"
                  type="number"
                  placeholder="total"
                  value={formData.total}
                  name="total"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex">
                <p className="text-xl text-gray-400">Sub-Category:</p>
                <div className="mr-4">
                  <select
                    name="subcategory"
                    value={formData.subcategory}
                    className="text-lg w-[200px] h-[40px] rounded-lg border border-gray-400"
                    onChange={handleInputChange}
                    required
                  >
                    <option>{formData.subcategory} </option>
                    {data.map((item) => (
                      <React.Fragment key={item.id}>
                        {item.subcategories.map((subItem, subIndex) => (
                          <option key={subIndex} value={subItem.name}>
                            {subItem.name}
                          </option>
                        ))}
                      </React.Fragment>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="text-red-500 text-center ml-16 mt-2 text-lg"></div>
            <div className="flex mt-9 justify-between ">
              <p className="ml-10 text-xl text-gray-400">Decription:</p>
              <div className="mr-14">
                <input
                  className="w-[400px] ml-10 text-lg  h-[40px] rounded-lg border border-gray-400 "
                  type="text"
                  placeholder="description"
                  name="description"
                  value={formData.description}
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex mt-9 justify-between ">
              <p className="ml-10 text-xl text-gray-400 ">Category:</p>
              <div className="mr-14">
                <select
                  name="category"
                  value={formData.category}
                  id=""
                  onChange={handleInputChange}
                  className=" text-lg ml-10 w-[400px] h-[40px] rounded-lg border border-gray-400"
                  required
                >
                  <option value="">{formData.category}</option>
                  {data.map((item, index) => (
                    <React.Fragment key={item.id}>
                      <option key={index} value={item.category}>
                        {item.category}
                      </option>
                    </React.Fragment>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex mt-9  ">
              <p className="ml-10 text-xl text-gray-400">Upload Image:</p>
              <label className="text-center ml-8 text-lg flex justify-center items-center cursor-pointer  border-dashed border border-gray-500 h-[70px] w-[70px] py-2 px-4 rounded">
                <img className="" src={icon} alt="gallery" />
                <input
                  className=" hidden"
                  type="file"
                  name="files"
                  placeholder=""
                  accept=".jpg,.png"
                  required
                  onChange={handleInputChange}
                  multiple
                />
              </label>
              {/* <div className="flex mt-4"> */}
              {formData.imagePath.map((image, index) => (
                <div
                  key={index}
                  className="text-center ml-8 text-lg flex justify-center items-center cursor-pointer border-dashed border border-gray-500 h-[70px] w-[70px] py-2 px-4 rounded"
                >
                  <img
                    className="selected-image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={`http://localhost:4000/images/${image.imagePath}`} // Assuming 'image' is a File object or Blob
                    alt={`Selected ${index}`}
                  />
                </div>
              ))}
              {/* </div> */}
            </div>
            <div className="flex justify-end mr-6 gap-x-5 mt-6">
              <button
                onClick={(e) => handleSubmit(e)}
                className="p-2 w-[80px] bg-[#EDA415] rounded-2xl"
              >
                Add
              </button>
              <button
                className="p-2 w-[80px] bg-gray-400 rounded-2xl"
                onClick={(e) => handleClose(e)}
              >
                Discard
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Editproduct;
