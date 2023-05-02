import Link from 'next/link'
import React from 'react'
import { RiVipDiamondLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { VscAccount,VscSettingsGear } from 'react-icons/vsc';
import { FiShoppingCart } from 'react-icons/fi';
function Sidebar({children}) {
  return (
    <>
    <div className='flex'>
      <div className='fixed w-20 h-screen bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col  items-center'> 
          <Link href='/'>
              <div className=' p-2 bg-purple-700 text-white rounded-lg inline-block my-3'>
                <RiVipDiamondLine size={20}/>
              </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-3/4'></span>
          <Link href='/'>
              <div className=' p-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-lg inline-block my-3'>
                <VscAccount size={20}/>
              </div>
          </Link>
          <Link href='/'>
              <div className=' p-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-lg inline-block my-3'>
                <RxDashboard size={20}/>
              </div>
          </Link>
          <Link href='/'>
              <div className=' p-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-lg inline-block my-3'>
                <FiShoppingCart size={20}/>
              </div>
          </Link>
          <Link href='/'>
              <div className=' p-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-lg inline-block my-3'>
                <VscSettingsGear size={20}/>
              </div>
          </Link>
        </div>
      </div>
        <main className='ml-20 w-full'>{children}</main>
    </div>
    </>
  )
}

export default Sidebar