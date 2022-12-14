import React from 'react'
import { IoTrashBin } from 'react-icons/io5'

const Items = (props) => {

     const onchangeHandler = () => {
          if (props.cek === true) {
               let postData = {
                    title: 'Rizal Tes',
                    completed: true,
                    userId: 1,
                    id: 2
               };

               let axiosConfig = {
                    headers: {
                         'Content-Type': 'application/json;charset=UTF-8'
                    }
               };

               axios.put('https://jsonplaceholder.typicode.com/todos', postData, axiosConfig)
                    .then((res) => {
                         console.log("RESPONSE RECEIVED: ", res);
                    })
                    .catch((err) => {
                         console.log("AXIOS ERROR: ", err);
                    })

          }
     }

     const todoUndone = 'max-w-full border-none bg-transparent w-full max-md:text-sm'
     const todoDone = 'max-w-full border-none bg-transparent line-through w-full max-md:text-sm'

     return (
          <div className='flex justify-between items-center gap-3 ' id={props.id}>
               <div className='flex gap-3 items-center text-2xl font-mono my-3 pl-3 border-b-2 border-yellow-500 w-full max-md:my-1'>
                    <input type='checkbox' onChange={onchangeHandler} checked={props.cek ? true : false} className='accent-green-300 border-black border-2 h-6 w-6 cursor-pointer' />
                    <p className={props.cek ? todoDone : todoUndone}>{props.title}</p>
                    <IoTrashBin className='text-orange-400 text-2xl cursor-pointer' />
               </div>
          </div>
     )
}

export default Items