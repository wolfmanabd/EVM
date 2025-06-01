"use client"
import React from 'react'
import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    
    <div className='md:container fixed rounded-t-2xl  md:rounded-3xl md:h-[100px] w-[90%] p-2 text-[#FCFCFD] backdrop-blur-xl flex justify-between items-center text-sm mb-4 '>
        <div>
            <Image src='/logo.png' alt='logo' width={100} height={100} />
        </div>
        <div className='bg-[#101828] border-<1> border-[#FCFCFD] p-4 rounded-lg md:flex justify-between w-[572px] hidden'>
            <a href='#' className='active p-2'>Home</a>
            <a href='#howitworks' className='p-2'>How it work</a>
            <a href='#whoweare' className='p-2'>Who We Are </a>
            <a href='#howwehelp' className='p-2'>How We Help</a>
            <a href='#faqs' className='p-2'>FAQs</a>
        </div>
        <div className='hidden md:block'>
            <button className='bg-gradient-to-r from-[#18ACFE] to-[#0163E0] p-3 rounded-xl'>Contact Us</button>
        </div>
        <div className='block md:hidden text-3xl mb-5'>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ?  'X' : <GiHamburgerMenu  />}
          </button>
        </div>
    </div>
    <div>
        {isOpen && (
      <div className="md:hidden px-4 pb-4 w-100 h-[50%] ml-3 mt-16 transition-all bg-gray-600 text-white rounded-b-2xl fixed">
        <div className="flex flex-col space-y-1 mt-5 w-full">
        <a href='#' className='active p-2' onClick={() => setIsOpen(false)}>Home</a>
          <a href='#howitworks' className='p-2' onClick={() => setIsOpen(false)}>How it work</a>
          <a href='#whoweare' className='p-2' onClick={() => setIsOpen(false)}>Who We Are </a>
          <a href='#howwehelp' className='p-2' onClick={() => setIsOpen(false)}>How We Help</a>
          <a href='#faqs' className='p-2' onClick={() => setIsOpen(false)}>FAQs</a>
        </div>
      </div>
     )}
    </div>
    </>
  )
}
