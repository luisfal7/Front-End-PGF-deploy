import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({shoe}) => {
  return (
    <div className="w-52 bg-black">
      <div className="max-w-2xl py-2 px-2 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-2">
        <div className="">
          <Link to={`/products/${shoe._id}`}>
          <div className="group relative cursor-pointer ">
            <div className="overflow-hidde group-hover:opacity-60">
              <img
                src={shoe.image}
                alt={shoe.name}
                className="object-contain h-40 w-52 bg-black px-2"
              />
            </div>
            <div className="mt-2 flex justify-between">
              <div>
                <p className="mt-1 text-sm text-white">{shoe.brand}</p>
                <h3 className="text-sm text-bold text-[#00ff01]">{shoe.name}</h3>
                <p className="mt-1 text-md text-white">${shoe.price}</p>
              </div>             
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div> 
  )
}

export default Card