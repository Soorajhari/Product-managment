import React from 'react'
import laptop from "../../assets/OKR0RO0-removebg-preview.png";
import star from "../../assets/rating.png";

const List = () => {
  return (
    <>
    <div className='flex gap-x-10 flex-wrap '>
        <div className="flex  ">
        <div className="border border-black w-[300px] h-[230px] rounded-xl overflow-hidden">
          <div className="flex justify-center">
            <img
              src={laptop}
              className="w-[150px] h-[120px] object-cover"
              alt="laptop"
            />
            <ion-icon class="mt-4 text-2xl bg-blue-300 rounded-full w-[30px] h-[30px]" name="heart-outline"></ion-icon>
          </div>

          <div className="p-2">
            <p className=" font-semibold text-blue-600">Tablet as a laptop</p>
            <div className="flex justify-between mt-2">
              <p className="font-meduim">$11.70</p>
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
      <div className="flex  ">
        <div className="border border-black w-[300px] h-[230px] rounded-xl overflow-hidden">
          <div className="flex justify-center">
            <img
              src={laptop}
              className="w-[150px] h-[120px] object-cover"
              alt="laptop"
            />
            <ion-icon class="mt-4 text-2xl bg-blue-300 rounded-full w-[30px] h-[30px]" name="heart-outline"></ion-icon>
          </div>

          <div className="p-2">
            <p className=" font-semibold text-blue-600">Tablet as a laptop</p>
            <div className="flex justify-between mt-2">
              <p className="font-meduim">$11.70</p>
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
      <div className="flex  ">
        <div className="border border-black w-[300px] h-[230px] rounded-xl overflow-hidden">
          <div className="flex justify-center">
            <img
              src={laptop}
              className="w-[150px] h-[120px] object-cover"
              alt="laptop"
            />
            <ion-icon class="mt-4 text-2xl bg-blue-300 rounded-full w-[30px] h-[30px]" name="heart-outline"></ion-icon>
          </div>

          <div className="p-2">
            <p className=" font-semibold text-blue-600">Tablet as a laptop</p>
            <div className="flex justify-between mt-2">
              <p className="font-meduim">$11.70</p>
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
      <div className="flex  ">
        <div className="border border-black w-[300px] h-[230px] rounded-xl overflow-hidden">
          <div className="flex justify-center">
            <img
              src={laptop}
              className="w-[150px] h-[120px] object-cover"
              alt="laptop"
            />
            <ion-icon class="mt-4 text-2xl bg-blue-300 rounded-full w-[30px] h-[30px]" name="heart-outline"></ion-icon>
          </div>

          <div className="p-2">
            <p className=" font-semibold text-blue-600">Tablet as a laptop</p>
            <div className="flex justify-between mt-2">
              <p className="font-meduim">$11.70</p>
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
      <div className='flex gap-x-4 justify-between mt-10'>
      <p  className='text-base text-gray-500'>10 of 456 items</p>
      <p>1 2 3 4 5 6 6 7</p>
      <p>Show  <span className='text-yellow-600'>10 rows</span></p>

  </div>
 </>
  )
}

export default List