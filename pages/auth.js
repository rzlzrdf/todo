/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
// import ParticlesBg from 'particles-bg'

const auth = () => {
     const router = useRouter()
     const handlerSubmit = (event) => {
          console.log('tess')
          router.push('/note')
     }

     return (
          <div className='container max-w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-600 to-sky-300'>
               <div className='bg-gray-200 w-1/4 h-fit rounded-xl shadow-lg px-4 py-12 flex flex-col items-center justify-center relative'>
                    <Link href='/' className='absolute top-3 left-3 text-lg text-cyan-800'><IoMdArrowRoundBack /></Link>
                    <h1 className='text-3xl text-cyan-800 mb-10'>Welcome Back!</h1>
                    <form className='w-full h-full' onSubmit={handlerSubmit}>
                         <label className='text-green-900 text-lg'>Type Your ID 4 times</label>
                         <input className='my-2 w-full h-12 text-lg font-bold px-4 border-2 border-blue-500 rounded-xl' />
                         <button type={'submit'} className='bg-sky-700 text-white w-full py-3 rounded-xl'>Unlock</button>
                    </form>
               </div>
          </div>
     )
}

export default auth