import React ,{useEffect, useState}from "react";
import useFetch from "../../hooks/useFetch";
import useProductfetch from "../../hooks/useProductfetch";

const Category = ({ handleCheckboxChange}) => {
    const [expandedItems, setExpandedItems] = useState({});
    const { data } = useFetch("/get-subcategory");

    const toggleSubcategories = (index) => {
      setExpandedItems((prevExpanded) => ({
        ...prevExpanded,
        [index]: !prevExpanded[index],
      }));
    };

   

//     useEffect(()=>{
//       setData(filterData)
//     },[selectedSubcategories])
//    console.log(setData)
  return (
    <div className="ml-10 mt-6">
      <div className="flex gap-x-8">
        <p className="font-semibold text-lg">Home</p>
        <ion-icon class="mt-2" name="chevron-forward-outline"></ion-icon>
      </div>

      <div className="mt-10">
        <p className="text-blue-500 font-medium text-xl">Categories</p>
        <p className="text-2xl mt-2">All Categories</p>

        <div className="mt-3 gap-x-32">
      {data.map((item, index) => (
        <div className="flex gap-x-32 mt-3" key={index}>
         
          <ul className="text-lg font-medium">
            <li>{item.category}</li>
            {expandedItems[index] &&
              item.subcategories.map((subItem, subIndex) => (
                <div className="flex gap-x-4">
                <input type="checkbox" id="myCheckbox" name="myCheckbox" value="checkboxValue" onChange={(e)=>handleCheckboxChange(e.target.checked, subItem.name)} ></input>
                <li className="font-light" key={subIndex}>
                  {subItem.name}
                </li>
                </div>
              
              ))}
          </ul>
          <div onClick={() => toggleSubcategories(index)}>
            {expandedItems[index] ? (
              <ion-icon class="text-xl" name="chevron-down-outline"></ion-icon>
            ) : (
                <ion-icon class="text-xl" name="chevron-forward-outline"></ion-icon>
            )}
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default Category;
