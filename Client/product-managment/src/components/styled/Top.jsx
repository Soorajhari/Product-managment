import React, { useState } from 'react'
import Single from './Single'
import { Link } from 'react-router-dom'

const Top = () => {
    const [isWhishlist,setWhishlist]=useState(false)
  return (
    <>
    <div className='bg-[#003F62]'>
  <div className='w-[75%] mx-auto h-[90px] mt-4 flex items-center justify-between'>
    <div className='w-full'>
      <div className='flex items-center justify-center'>
        <div className='bg-white w-[280px] p-2 rounded relative'>
          <input className='border-none w-full' type="text" placeholder='Search anything'/>
          <div className='absolute inset-y-0 right-0 flex items-center justify-center bg-[#EDA415] w-[60px] rounded-bl-md'>
            <button >Search</button>
          </div>
        </div>
      </div>
    </div>
    <div className='text-right flex gap-x-3'>
      <ion-icon class="text-3xl  cursor-pointer text-white" name="heart-outline" onClick={()=>setWhishlist(true)}></ion-icon>
      <span className="text-white bg-yellow-600 text-lg rounded-full h-6 w-6 flex items-center justify-center">0</span>
      <Link to="/login">
      <p className='text-white'>Signin</p>
      </Link>
     
      <ion-icon name="cart-outline" class="text-white text-3xl"></ion-icon>
      <span className="text-white bg-yellow-600 text-lg rounded-full h-6 w-6 flex items-center justify-center">0</span>
      <p className='text-white'>Cart</p>

      
    </div>
  </div>
</div>
<Single whishlist={isWhishlist}/>
</>
  )
}

export default Top