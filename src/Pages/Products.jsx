import React from 'react'

const AppleData = [
    {   
        id:0,
        name: "iPhone 11 Series",
        image: '/a2.WEBP',
        prices: '$899.00',
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "iPhone 12 pro Series",
        image: '/a3.WEBP',
        prices: '$899.00',
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "iPhone 14 pro Series ",
        image: '/a7.WEBP',
        prices: '$899.00',
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "iPhone 14 pro Series",
        image: '/a9.WEBP',
        prices: '$899.00',
        bgColor:"#742a3a"
    },
    {   
        id:4,
        name: "iPhone 16 pro Series",
        image: '/a10.WEBP',
        prices: '$899.00',
        bgColor:"#742a2a"
    },
    {   
        id:5,
        name: "iPhone 13 pro Series",
        image: '/a6.JPG',
        prices: '$899.00',
        bgColor:"#742a2a"
    },
    
    
]

const AndroidData = [
    {   
        id:0,
        name: "Samsung Series",
        image: '/s1.JPG',
        prices: '$899.00',
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Samsung Series",
        image: '/g1.webp',
        prices: '$899.00',
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Tecno C Series ",
        image: '/s2.JPG',
        prices: '$899.00',
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Tecno Series",
        image: '/s3.JPG',
        prices: '$899.00',
        bgColor:"#742a3a"
    },
    {   
        id:4,
        name: "Samsung Series",
        image: '/g2.jpg',
        prices: '$899.00',
        bgColor:"#742a2a"
    },
    {   
        id:5,
        name: "Tecno Series",
        image: '/s5.JPG',
        prices: '$899.00',
        bgColor:"#742a2a"
    },
    
    
]
const  AccessData= [
    {   
        id:0,
        name: "Phone Case",
        image: '/case.webp',
        prices: '$89.00',
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Ear Phones",
        image: '/case2.webp',
        prices: '$49.00',
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: " Ear Buds",
        image: '/case3.jpg',
        prices: '$99.00',
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Watches",
        image: '/case4.webp',
        prices: '$299.00',
        bgColor:"#742a3a"
    },
    {   
        id:4,
        name: " Watch Cases",
        image: '/case6.jpg',
        prices: '$19.00',
        bgColor:"#742a2a"
    },
    {   
        id:5,
        name: "Charger Case",
        image: '/ccase.webp',
        prices: '$29.00',
        bgColor:"#742a3a"
    },
]

const Products = () => {
  return (
    <div className='container pt-10'>
        <div>
         <div className='flex items-center justify-between'>
            <h2 className='header'>
                Apple Products
                <p className='para text-gray-800'>Explore Our Apple Products</p>
            </h2>
            <button className='secondary-btn'>All Products</button>
            </div>  
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4'>
         
            {AppleData.map((feat) => (
                <div key={feat.id} className='flex flex-col items-center  text-center rounded justify-center'> 
                <img src={feat.image} alt="" className='rounded' srcSet="" />
                <div className='flex justify-center gap-20'>
                    <p className='font-semibold text-gray-600'>{feat.name}<br />{feat.prices}</p>
                    <button className='primary-btn'>View</button>
                    </div>
                </div>
            ))}
            
        </div>
        <div>
        <div>
         <div className='mt-20 flex items-center justify-between'>
            <h2 className='header'>
                Android Products
                <p className='para text-gray-800'>Explore Our Android Products</p>
            </h2>
            <button className='secondary-btn'>All Products</button>
            </div>  
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4'>
         
            {AndroidData.map((feat) => (
                <div key={feat.id} className='flex flex-col items-center text-center rounded justify-center'> 
                <img src={feat.image} alt="" className='rounded' srcSet="" />
                <div className='flex justify-center gap-20'>
                    <p className='font-semibold text-gray-600'>{feat.name}<br />{feat.prices}</p>
                    <button className='primary-btn'>View</button>
                    </div>
                </div>
            ))}
            
        </div> 
        </div>
        <div>
        <div>
         <div className='mt-20 flex items-center justify-between'>
            <h2 className='header'>
                Other Products
                <p className='para text-gray-800'>Explore Our Accessories</p>
            </h2>
            <button className='secondary-btn'>All Products</button>
            </div>  
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4'>
         
            {AccessData.map((feat) => (
                <div key={feat.id} className='flex flex-col items-center text-center rounded justify-center'> 
                <img src={feat.image} alt="" className='rounded' srcSet="" />
                    <div className='flex justify-center gap-20'>
                    <p className='font-semibold text-gray-600'>{feat.name}<br />{feat.prices}</p>
                    <button className='primary-btn'>View</button>
                    </div>
                </div>
            ))}
            
        </div>
        </div>
    </div>
  )
}

export default Products