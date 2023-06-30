import React, { useState } from 'react'
import pic1 from "../resources/techIcons/react.png"
import pic3 from "../resources/techIcons/fire.png"
import pic4 from "../resources/techIcons/git.png"
import pic6 from "../resources/techIcons/mongo.png"
import pic7 from "../resources/techIcons/node.png"
import pic9 from "../resources/techIcons/redux.png"
import pic10 from "../resources/techIcons/sass.png"
import pic11 from "../resources/techIcons/tail.png"
import pic12 from "../resources/techIcons/ts.png"
import pic13 from "../resources/techIcons/js.png"

import eng from "../resources/united-kingdom.png"
import esp from "../resources/spain.png"

import skualo from "../resources/skualo.png"

const Dashboard: React.FC = () => {
  const [state, setState] =   useState({
    englishMessage: false,
    spanishMessage: false,
  })


  return (
    <div className='text-white'>
      <div className='title h-screen pt-56 text-center bg-blue-500'>
        <p className='text-2xl'>MARC ALZAMORA</p>
        <p className='text-6xl my-10 font-bold'>SOFTWARE ENGINEER</p>
        <a href="#tech" className='w-full flex justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 rounded-full border border-white text-white p-1 hover:text-blue-500 hover:bg-white transition-all duration-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </a>
      </div>
      <div className='w-full flex justify-between p-20' id='tech'>
        <img src={pic1} className='h-20' alt="" />
        <img src={pic9} className='h-20' alt="" />
        <img src={pic12} className='h-20' alt="" />
        <img src={pic13} className='h-20' alt="" />
        <img src={pic3} className='h-20' alt="" />
        <img src={pic4} className='h-20' alt="" />
        <img src={pic6} className='h-20' alt="" />
        <img src={pic7} className='h-20' alt="" />
        <img src={pic10} className='h-20' alt="" />
        <img src={pic11} className='h-20' alt="" />
        
      </div>
      <div className='experience text-gray-800'>
        <p className='uppercase text-center py-20 font-bold text-gray-700 text-lg'>experience</p>
        <div className=' flex flex-wrap justify-center'>

          <div className='p-20'>
            <p className='mb-5 font-bold'>SKUALO Diving Center's website with Fareharbor</p>
            <img src={skualo} className='h-72 rounded cursor-pointer' alt="" />
          </div>

          <div className='p-20'>
            <p className='mb-5 font-bold'>SKUALO Diving Center's website with Fareharbor</p>
            <img src={skualo} className='h-72 rounded cursor-pointer' alt="" />
          </div>

          <div className='p-20'>
            <p className='mb-5 font-bold'>SKUALO Diving Center's website with Fareharbor</p>
            <img src={skualo} className='h-72 rounded cursor-pointer' alt="" />
          </div>

          <div className='p-20'>
            <p className='mb-5 font-bold'>SKUALO Diving Center's website with Fareharbor</p>
            <img src={skualo} className='h-72 rounded cursor-pointer' alt="" />
          </div>

          <div className='p-20'>
            <p className='mb-5 font-bold'>SKUALO Diving Center's website with Fareharbor</p>
            <img src={skualo} className='h-72 rounded cursor-pointer' alt="" />
          </div>

          <div className='p-20'>
            <p className='mb-5 font-bold'>SKUALO Diving Center's website with Fareharbor</p>
            <img src={skualo} className='h-72 rounded cursor-pointer' alt="" />
          </div>

        </div>
      
      </div>
      <div className='languages py-20 text-gray-800'>
        <p className='uppercase text-center py-20 font-bold text-gray-700 text-lg'>I SPEAK</p>
        <div className='flex justify-center gap-20'>
          <div className='flex items-center gap-10 relative'>
            <span className={`right-20 absolute ${state.englishMessage ? "flex" : "hidden"}`}>
              C1 IELTS Certificate
            </span>
            <img className='h-16 cursor-pointer active:scale-95' onClick={() => setState({ englishMessage: true, spanishMessage: false })}  src={eng} alt="" />
          </div>
          <div className='flex items-center gap-10 relative'>
            <img className='h-16 cursor-pointer active:scale-95' onClick={() => setState({ englishMessage: false, spanishMessage: true })} src={esp} alt="" />
            <span className={`absolute left-20 ${state.spanishMessage ? "flex" : "hidden"}`}>
              I am Spansih Native 
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard