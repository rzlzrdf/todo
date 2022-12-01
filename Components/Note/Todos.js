import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Items from './Items'

const Todos = () => {
     const [data, setData] = useState([])

     useEffect(() => {
          const id = JSON.parse(localStorage.getItem('userId')) 
          axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
               .then((response) => {
                    setData(response.data)
                    console.table(response.data)
               })
               .catch( error => {
                    console.error(error)
               })

     }, [setData])

     return (
          <div className='w-3/4 h-auto overflow-ellipsis max-md:w-full'>
               {data.map(res => {
                    return <Items key={res.id} id={res.id} title={res.title} cek={res.completed} />
               })}
          </div>
     )
}

export default Todos