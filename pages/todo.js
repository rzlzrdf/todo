/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import React from 'react'
import Navigation from '../Components/Navbar/Navigation'
import Todos from '../Components/Note/Todos'

const todo = (props) => {
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const submitHandler = () => {
          console.log('Submit Pressed')
          var postData = {
               title: 'Rizal Tes',
               completed: true,
               userId: 1
          };

          let axiosConfig = {
               headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
               }
          };

          axios.post('https://jsonplaceholder.typicode.com/todos', postData, axiosConfig)
               .then((res) => {
                    console.log("RESPONSE RECEIVED: ", res);
               })
               .catch((err) => {
                    console.log("AXIOS ERROR: ", err);
               })

     }

     return (
          <div className='max-w-full min-h-screen flex flex-col items-center justify-start gap-10 p-5 bg-yellow-100 relative'>
               <Navigation submit={submitHandler}  />
               <Todos />
               <footer className='absolute bottom-0 bg-amber-200 w-full text-center'>Created by Rizal @2022</footer>
          </div>
     )
}

export default todo