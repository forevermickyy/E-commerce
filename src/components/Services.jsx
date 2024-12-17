import React from 'react'
import { IoMdDoneAll, IoMdHappy,  } from 'react-icons/io'
import { IoAccessibilitySharp, IoAddCircleOutline, IoReader } from 'react-icons/io5'
import { RiCheckLine } from 'react-icons/ri'

const ServicesData = [
    {
        id: 1,
        title: 'Apple Phones',
        link: '#',
        icon: <IoAddCircleOutline/>,
        delay: 0.2,
    },
    {
        id: 2,
        title: 'Android Phones',
        link: '#',
        icon: <IoMdDoneAll/>,
        delay: 0.3,
    },
    {
        id: 3,
        title: 'Phone Cables',
        link: '#',
        icon: <RiCheckLine/>,
        delay: 0.4,
    },
    {
        id: 4,
        title: 'Phone Cases',
        link: '#',
        icon: <IoAccessibilitySharp/>,
        delay: 0.5,
    },
    
   
   
    
]

const Services = () => {
  return (
    <div className="container mt-10">
        <div>
         <div className='flex items-center justify-between'>
            <h2 className='header'>
                Top Categories
                <p className='para text-gray-800'>Explore Our Popular Categories</p>
            </h2>
            </div>  
        </div>
        <div>
            
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {ServicesData.map((ser) => (
                        <div key={ser.id} className='bg-slate-200 rounded flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl'>
                            <div>{ser.icon}</div>
                            <h1>{ser.title}</h1>
                        </div>
                    ))}
                </div>
        </div>
    </div>
  )
}

export default Services