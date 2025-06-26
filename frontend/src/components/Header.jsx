import React from 'react'
import { assets } from '../assets/assets'

function Header() {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-lime-500 rounded-lg px-6 md:px-10 lg:px-20 mt-2 shadow-xl'>
      
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-black font-semibold leading-tight md:leading-tight lg:leading-tight'>Health Starts Here <br />  Connect with Specialists</p>

        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
        <img className = "w-28 " src={assets.group_profiles} alt="" />
        <p>Connect to our highly educated doctors <br className='hidden sm:block' />in just one click</p>
        </div>

      <a className='flex items-center  gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:bg-violet-600 hover:text-white hover:scale-105 transition-all duration-300' href="#speciality"> Book appointment 
      <img className='w-3' src={assets.arrow_icon} alt="" /></a>

      </div>
      

      

      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg mt-2' src={assets.header_img} alt="" />

      </div>
    </div>
  )
}

export default Header
