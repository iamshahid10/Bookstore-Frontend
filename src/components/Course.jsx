import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Course() {
  const [book, setBook] = useState([])

  useEffect(()=>{
    const getBook = async()=>{
     try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASEURL}book`)
      setBook(res.data)
     } catch (error) {
      console.log(error);
     }
    }  
    getBook(); 
  },[])
  return (
    <>
    <div className='max-w-screen-xl container mx-auto md:px-20 0px-4'>
      <div className='py-28 items-center justify-center text-center '>
        <h1 className='text-2xl md:text-4xl'>
          we're delighted to have you {" "}
           <span className='text-pink-500'>Here! :)</span>
        </h1>
        <p className='mt-12'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, aspernatur molestiae repudiandae neque sit facere delectus tenetur ab rerum hic cumque perspiciatis voluptate? Reprehenderit a doloremque minus porro, natus adipisci.
        </p>
        <Link to='/'>
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
          {book.map((item) => (
            <Card key={item._id} item={item}/>
           ))}
      </div>
    </div>
    </>
  )
}

export default Course