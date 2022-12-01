/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useRouter } from 'next/router'
import { RiLogoutBoxFill, } from 'react-icons/ri'
import { IoAdd, IoBackspace, IoCreate } from 'react-icons/io5'
import axios from 'axios'

const Navigation = (props) => {
  const router = useRouter()

  const handlerLogout = () => {
    localStorage.clear()
    router.push('/')
  }



  return (
    <div className='w-3/4 h-16 flex flex-col gap-4 font-2xl bg-transparent mb-12 max-md:w-full'>
        <button onClick={handlerLogout} className='text-xl text-red-600'>Logout</button>
      <div className='w-full h-20 flex text-2xl font-mono max-md:text-lg max-md:h-10'>
        <input type={'search'} className='w-11/12 bg-yellow-200 focus:outline-none p-3' placeholder='Type your new plan here...' />
        <button className='bg-yellow-400 text-5xl w-1/12 flex justify-center items-center aspect-square' onClick={props.submit}><IoAdd /></button>
      </div>
    </div>
  )
}

export default Navigation