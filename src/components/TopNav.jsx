import React from 'react'

const TopNav = () => {
  return (
    <div className=''>
        <div className='flex text-center justify-center md:justify-start md:px-36 bg-gray-600 font-light text-gray-200'>
            <ul className='flex justify-left text-center py-2 gap-5'>
                <li className='font-bold'><a href="/">Home </a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a className='hidden md:block' href="/auth">Become A Retailer</a></li>
            </ul>
        </div>
    </div>
  )
}

export default TopNav