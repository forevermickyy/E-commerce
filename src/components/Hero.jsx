import React from 'react'
import heroPic from '/heroPic.png'
const Hero = () => {
  return (
    <div className='bg-[url(./assets/hP.jpg)] bg-cover'>
      <div>
      <div className='container grid grid-cols-1 gap-32 md:grid-cols-2 min-h-[600px]'>
      {/* left side */}
      <div className='flex flex-col justify-center gap-5 text-center md:text-left pt-24 relative z-50'>
        <h1 className='text-4xl md:text-6xl  text-light font-bold'>
          Buy All Your Phones And Accessories From Us
        </h1>
        <p className='text-light'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, perferendis perspiciatis! Inventore eius corrupti possimus voluptatem. Velit, molestias non quam laboriosam officia quae hic cum. Rerum corporis sint eveniet perferendis.
        </p>
        <div className='flex gap-4 items-center md:justify-start justify-center'>
          <a href="/products"><button className='primary-btn'>Explore</button></a>
         <a href="/auth"><button className='secondary-btn'>Sign Up</button></a> 
        </div>
      </div>
      {/* right side */}
      <div className='flex flex-col justify-center gap-5 relative z-20'>
        <img src={heroPic} alt="" className='w-full rounded' /> 
      </div>
      </div>
      </div>
    </div>
  )
}

export default Hero