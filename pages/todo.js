/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import React from 'react'
import Navigation from '../Components/Navbar/Navigation'
import Todos from '../Components/Note/Todos'

const todo = (props) => {
     // eslint-disable-next-line react-hooks/rules-of-hooks
    
     return (
          <div className='max-w-full min-h-screen flex flex-col items-center justify-start gap-10 p-5 bg-yellow-100 relative'>
               <Navigation />
               <Todos />
               <footer className='absolute bottom-0 bg-amber-200 w-full text-center'>Created by Rizal @2022</footer>
          </div>
     )
}

export default todo