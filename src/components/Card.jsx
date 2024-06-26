import React from 'react'
import { Link } from 'react-router-dom'


function Card({ item }) {

  return (
    <div className='mt-4 my-3 p-3'>
        <div className="card max-w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border ">
    <figure><img className='max-h-[350px] md:max-h-[450px]' src={item.image} alt="Shoes" /></figure>
    <div className="min-h-[230px] card-body">
      <h2 className="card-title">
        {item.name}
        <div className="badge badge-secondary">{item.category}</div>
      </h2>
      <p>{item.title}</p>
      <div className="card-actions justify-between">
        <div className="badge badge-outline">{item.auther}</div> 
        <Link to={item.link} target='_blank'>
        <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200">Download</div>
        </Link>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Card