import React from 'react'

const Nav = () => {
  return (
<div className='bg-[#003F62]'>
  <div className='w-[65%] mx-auto h-[90px] mt-4 flex items-center justify-center'>
    <div className='bg-white w-[280px] p-2 rounded relative'>
      <input className='border-none' type="text" placeholder='search anything' />
      <div className='absolute inset-y-0 right-0 flex items-center justify-center bg-[#EDA415] w-[60px] rounded-bl-md'>
        <p>Search</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Nav