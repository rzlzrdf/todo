/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { RiLogoutBoxFill, } from 'react-icons/ri'
import { IoAdd, IoBackspace, IoCreate } from 'react-icons/io5'

const Navigation = () => {
  return (
    <div className='w-3/4 h-16 flex flex-col gap-4 font-2xl bg-transparent mb-12 max-md:w-full'>
      <div className='w-full h-20 flex flex-row-reverse justify-between text-2xl font-mono'>
        <h1 className='text-3xl text-slate-800 text-end font-mono font-bold max-md:text-lg'>Hii.. Welcome Back!</h1>
        <button className='text-xl text-red-600'>Logout</button>
      </div>
      <div className='w-full h-20 flex text-2xl font-mono max-md:text-lg'>
        <input type={'search'} className='w-11/12 bg-yellow-200 focus:outline-none p-3' placeholder='Type your new plan here...' />
        <button className='bg-yellow-400 text-5xl w-1/12 flex justify-center items-center aspect-square max-md:w-3/12'><IoAdd /></button>
      </div>
    </div>
  )
}

export default Navigation