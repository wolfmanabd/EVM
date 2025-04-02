import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='container absolute top-5 left-0 rounded-3xl h-[72px] text-[#FCFCFD] backdrop-blur-xl flex justify-between items-center text-sm mb-8'>
        <div>
            <Image src='/logo.png' alt='logo' width={100} height={100} />
        </div>
        <div className='bg-[#101828] border-<1> border-[#FCFCFD] p-4 rounded-lg flex justify-between w-[572px] '>
            <a href='#' className='active p-2'>Home</a>
            <a href='#' className='p-2'>How it work</a>
            <a href='#' className='p-2'>Who We Are </a>
            <a href='#' className='p-2'>How We Help</a>
            <a href='#' className='p-2'>FAQs</a>
        </div>
        <div>
            <button className='bg-gradient-to-r from-[#18ACFE] to-[#0163E0] p-3 rounded-xl'>Contact Us</button>
        </div>
    </div>
  )
}
