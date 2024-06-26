import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"    
import Card from './Card';
import axios from 'axios'

function FreeBook() {
  const [book, setBook] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const getBook = async()=>{
     try {
      const res = await axios.get("http://localhost:4001/book")
      const data = res.data.filter((data) => data.category==="free")
      setBook(data)
     } catch (error) {
      console.log(error);
     } finally {
      setLoading(false);
    }
    }  
    getBook(); 
  },[])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
    };

  return (
    <>
    <div className='max-w-screen-xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className="font-semibpld text-xl pd-2">Free Offered Books</h1>
        <p><span className='text-red-500'>Note- </span>Below are some of the books, to see all the books go to <span className='text-green-500'>All Books</span>  </p>
        </div>

    <div className="slider-container">
    {loading ? (
            <p className='font-semibold text-xl dark:bg-slate-900 dark:text-white flex justify-center mt-20 mb-20'>Loading...</p>
          ) : (
            book.length > 0 ? (
              <Slider {...settings}>
                {book.map((item) => (
                  <Card item={item} key={item._id} />
                ))}
              </Slider>
            ) : (
              <p className='font-semibold text-xl dark:bg-slate-900 dark:text-white flex justify-center mt-20 mb-20'>No free books available.</p>
            )
          )}
    </div>
    </div>
    </>
  )
}

export default FreeBook