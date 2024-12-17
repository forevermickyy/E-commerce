import React from 'react'
import { IoIosAppstore, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter  } from 'react-icons/io'
import { IoLogoGooglePlaystore, IoLogoTiktok } from 'react-icons/io5'


const Footer = () => {
  return (
    <div className='bg-gray-500 mt-10'>
        <div className='container'> 
            <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 justify-between pt-10'>  
                <div>
                <h2 className='text-3xl text-white pr-20'>Buy All Your Phones And Accessories From Us</h2>
                <div className="mt-4 space-x-2">
                <button className="primary-btn text-white">Browse All Products</button>
                <button className="secondary-btn">Sign Up</button>
              
            </div>
                </div>
            
            
            <div className='flex gap-20 p-2'>
                <p className='text-4xl font-semibold text-gray-100 font-poppins'>100k 
                    <p className='text-sm font-light flex'>Customers</p>
                </p>
                <p className='text-4xl font-semibold text-gray-100 font-poppins'> 400+
                    <p className='text-sm font-light flex'>Products</p>
                </p>
                <p className='text-4xl font-semibold text-gray-100 font-poppins'>125%
                    <p className='text-sm font-light flex'>Purchases</p>
                </p>
            </div>
            </div>
            <hr className='bg-white mt-10'/>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-5 mt-10 text-gray-300 sm:grid-cols-3 justify-between'>
                    <div>
                        <ul className=' text-gray-300' >
                            <li><p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-clip">
                                Omar Phones & Accessories
                            </p></li>
                            <li><p className='text-gray-400 mt-2 mb-2'>Lorem ipsum dolor sit <br/> consectetur eos eum.</p></li>
                            
                            
                        </ul>
                    </div>
                    <div className=" text-gray-400">
                        <ul>
                            <div><p className='font-semibold text-gray-300'>TOP 4 CATEGORIES</p></div>
                            <li>iPhones</li>
                            <li>Samsung</li>
                            <li>Cases</li>
                            <li>Cables</li>
                        </ul>
                    </div>
                    <div className='text-gray-400'>
                    <ul>
                            <div><p className='font-semibold text-gray-300'>SOCIAL LINKS</p></div>
                            <li className='flex items-center gap-2'><IoLogoFacebook/>Facebook</li>
                            <li className='flex items-center gap-2'><IoLogoInstagram/>Instagram</li>
                            <li className='flex items-center gap-2'><IoLogoTwitter/>Twitter</li>
                            <li className='flex items-center gap-2'><IoLogoTiktok/>Tiktok</li>
                        </ul>
                    </div>
                    <div className="text-gray-400">
                    <ul>
                            <div><p className='font-semibold text-gray-300'>SUPPORT</p></div>
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>Returns</li>
                            <li>Help & Support</li>
                        </ul>
                    </div>
                    <div className="text-gray-400">
                    <ul>
                            <div><p className='font-semibold text-gray-300'>DOWNLOAD APP</p></div>
                            <li className='flex items-center gap-2'><IoIosAppstore/>App Store</li>
                            <li className='flex items-center gap-2'><IoLogoGooglePlaystore/>Play Store</li>
                        </ul>
                    </div>
                </div>
                <hr className='mt-10 mb-7 bg-white'/>
            </div>
            <div className='text-white font-light  '>
                <p className='pb-10 text-sm'>&copy; 2024, E-commerce site. Developed by Omar. All rights Reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer