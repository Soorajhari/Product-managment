import React from 'react'

const Category = () => {
  return (
    <div className='ml-10 mt-6'>
        <div className='flex gap-x-8'>
        <p className='font-semibold text-lg'>Home</p>
        <ion-icon class="mt-2" name="chevron-forward-outline"></ion-icon>
        </div>
       
        <div className='mt-10'>
            <p className='text-blue-500 font-medium text-xl'>Categories</p>
            <p className='text-2xl mt-2'>All Categories</p>
            <div className='mt-3 flex gap-x-24'>
                <ul className='text-lg font-medium'>Laptop
                    <li>Msi</li>
                    <li>Dell</li>
                </ul>
                <ion-icon class="text-xl" name="chevron-down-outline"></ion-icon>
            </div>
        </div>

    </div>
  )
}

export default Category