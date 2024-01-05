import React from 'react'
import laptop from "../../assets/OKR0RO0-removebg-preview.png"
import star from "../../assets/rating.png"



const Whishlist = () => {
  return (
    <div className=' font-[Ubuntu]'>
<div className='bg-[#ffff] shadow-2xl w-[350px] h-screen'>
<div className=''>
    <div className='bg-[#003F62] h-[80px] w-full relative'>
    <ion-icon class="absolute top-5 bg-white ml-6 w-[35px] h-[35px] rounded-full" name="heart-outline"></ion-icon>
    </div>

</div>

    <div className='flex mt-16 ml-5'>
        <div>
            <img src={laptop} className='w-[110px] h-[120px] border border-black rounded-xl' alt="laptop" />
        </div>
        <div className='ml-4'>
            <p>Tablet as a laptop</p>
            <div className='flex justify-between mt-2'>
            <p className=''>$11.70</p>
            <ion-icon class="border border-black" name="close-outline"></ion-icon>
            </div>
            <div className='mb-4'>
            <img className='w-[90px] h-[90px] ' src={star} alt="review" />
            </div>
   
        </div>
    </div>

</div>
    </div>
  )
}

export default Whishlist