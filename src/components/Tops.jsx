import React from 'react'
import leftPic from '/ee.png'
const Tops = () => {
  return (
    <div className='container'>
        <h2 className='header text-center justify-center mt-20'>
                New Products
                
            </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        {/* left Side */}
        <div>
            <img src={leftPic} alt="" />
        </div>
        {/* right side */}
        <div className='p-10 justify-center text-center'>
        <h1 className='text-4xl md:text-6xl text-gray-800 font-bold'>
          Shop The Latest Apple Product
        </h1>
        <p className='text-gray-500 mt-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, perferendis perspiciatis! Inventore eius corrupti possimus voluptatem. Velit, molestias non quam laboriosam officia quae hic cum. Rerum corporis sint eveniet perferendis.
        </p>
        </div>
    </div>
    </div>
  )
}

export default Tops