import React from 'react'

function TopCards() {
  return (
    <>
        <div className='grid grid-cols-1 lg:grid-cols-6 gap-4 p-4'>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-2'>
                    <p className=' text-2xl font-bold'>$9,563</p>
                    <p className='text-gray-600'>Daily Revenue</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>+28%</span>
                </p>
            </div>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-2'>
                    <p className=' text-2xl font-bold'>$2,847</p>
                    <p className='text-gray-600'>YTH Revenue</p>
                </div>
                <p className='bg-red-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-red-700 text-lg'>-10%</span>
                </p>
            </div>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-2'>
                    <p className=' text-2xl font-bold'>1,345</p>
                    <p className='text-gray-600'>Customers</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>+12%</span>
                </p>
            </div>
         
        </div>
    </>
  )
}

export default TopCards