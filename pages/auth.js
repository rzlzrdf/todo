/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
// import ParticlesBg from 'particles-bg'

const auth = () => {

     const inputRef = useRef(null);

     const router = useRouter()
     const handlerSubmit = () => {
          console.log(inputRef.current.value)
          let id = inputRef.current.value
          console.log(id)
          if(id !== null | id !== undefined | id !== String) {
               localStorage.setItem('userId',id)
               router.push('/todo')
          } else {
               console.error()
          }
     }

     return (
          <div className='container max-w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-600 to-sky-300'>
               <div className='bg-gray-200 w-1/4  rounded-xl shadow-lg px-4 py-12 flex flex-col items-center justify-center relative max-lg:w-80 max-md:mx-8 '>
                    <Link href='/' className='absolute top-3 left-3 text-lg text-cyan-800'><IoMdArrowRoundBack /></Link>
                    <h1 className='text-3xl text-cyan-800 mb-10'>Welcome Back!</h1>
                    <div className='w-full h-full'>
                         <label className='text-green-900 text-lg'>ID</label>
                         <input id='id' name='id' maxLength={4} minLength={4} className='my-2 w-full h-12 text-lg font-bold px-4 border-2 border-blue-500 rounded-xl' ref={inputRef} required/>
                         <button onClick={handlerSubmit} className='bg-sky-700 text-white w-full py-3 rounded-xl'>Unlock</button>
                    </div>
               </div>
          </div>
     )
}

export default auth