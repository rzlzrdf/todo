import React from 'react'
import { IoTrashBin } from 'react-icons/io5'

const Items = (props) => {

     return (
          <div className='flex justify-between items-center gap-3 '>
               <div className='flex gap-3 items-center text-2xl font-mono my-3 pl-3 border-b-2 border-yellow-500 w-full max-md:my-1'>
                    <input type='checkbox' defaultChecked={props.cek == true ? true : false} className='accent-green-300 border-black border-2 h-6 w-6 cursor-pointer' />
                    <input type={'search'} className='max-w-full border-none bg-transparent w-full max-md:text-sm' value={props.title} />
                    <IoTrashBin className='text-orange-400 text-2xl cursor-pointer' />
               </div>
          </div>
     )
}

export default Items