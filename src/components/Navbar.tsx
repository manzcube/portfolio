import React from 'react'

import { Link } from 'react-router-dom'

const pic = require("../resources/logo.png")

const Navbar: React.FC = () => {
  return (
    <div className='w-full flex justify-between items-center'>
      <img src={pic} className='h-12 m-2' alt="" />
      <div className='mr-20 space-x-8 flex'>
        <Link className='border flex items-center border-blue-500 hover:text-blue-500 hover:bg-white text-xs p-1 rounded font-bold bg-blue-500 text-white transition-all duration-300' to="/">Dashboard</Link>
        <Link className='border flex items-center border-blue-500 hover:text-blue-500 hover:bg-white text-xs p-1 rounded font-bold bg-blue-500 text-white transition-all duration-300' to="/contact">Contact Me</Link>
        <a href="../resources/resume.pdf" download className='border flex items-center border-blue-500 hover:text-blue-500 hover:bg-white text-xs p-1 rounded font-bold bg-blue-500 text-white transition-all duration-300'>Resume
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Navbar
