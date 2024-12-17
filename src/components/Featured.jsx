import React from 'react'

const FeaturedData = [
    {   
        id:0,
        name: "iPhone 14 series",
        image: '/14pro.webp',
        desc:"Get All Phones Here",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "11 pro Series ",
        image: '/11.png',
        desc:"Get All Phones Here",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "iPhone 13 Series",
        image: '/a4.WEBP',
        desc:"Get All Phones Here",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "iPhone 12pro Series",
        image: '/111.webp',
        desc:"Get All Phones Here",
        bgColor:"#742a2a"
    },
    {   
        id:4,
        name: "Phone Cases",
        image: '/case.webp',
        desc:"Get All Phone Cases",
        bgColor:"#742a3a"
    },
    
    {   
        id:5,
        name: "Ear Buds",
        image: '/case2.webp',
        desc:"Get Ear buds here",
        bgColor:"#742a3a"
    },
    {   
        id:6,
        name: "Watches",
        image: '/case4.webp',
        desc:"Get All Watches",
        bgColor:"#22543d"
    },
    {   
        id:7,
        name: "Watch Cases",
        image: '/case6.jpg',
        desc:"Get All Watch Cases",
        bgColor:"#742a2a"
    },
   
]

const Featured = () => {
  return (
    <div className='container pt-10'>
        <div>
         <div className='flex items-center justify-between'>
            <h2 className='header'>
                Featured Products
                <p className='para text-gray-800'>Explore Our Popular Products</p>
            </h2>
            <a href="/products"><button className='secondary-btn'>All Products</button></a>
            </div>  
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
         
            {FeaturedData.map((feat) => (
                <div key={feat.id} className='flex flex-col items-center text-center rounded justify-center'> 
                <a href="/products"><img src={feat.image} alt="" className='rounded' srcSet="" /></a>
                    <a href="/products"><p>{feat.name}<br />{feat.desc}</p></a>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Featured