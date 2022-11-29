import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Items from './Items'

const Todos = () => {
     const [data, setData] = useState([])

     useEffect(() => {
          axios.get('https://jsonplaceholder.typicode.com/todos')
               .then(function (response) {
                    setData(response.data)
                    console.table(response.data)
               })
               .catch(error => {
                    console.log(error)
               })
     }, [setData])
     return (
          <div className='w-3/4 h-auto overflow-ellipsis max-md:w-full'>
               {data.map(res=>{
                    return <Items key={res.id} title={res.title} cek={res.title} />
               })}
               <Items />
          </div>
     )
}

export default Todos