import React from 'react'
import { AiFillDelete, AiOutlineCloseCircle } from 'react-icons/ai'

const Shortcut = (props) => {
     return (
          <div className='flex items-center text-orange-500 gap-1 text-md pb-2 border-b-2 border-orange-500'>
               <h1 className='text-zinc-800 text-xl font-semibold mr-10'>{props.jusul}</h1>
               <AiFillDelete className='text-orange-400' />
               <AiOutlineCloseCircle className='text-orange-400' />
          </div>
     )
}

export default Shortcut