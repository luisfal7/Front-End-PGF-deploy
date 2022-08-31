import React from 'react'

const Card = ({shoe}) => {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group relative cursor-pointer">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl group-hover:opacity-60 lg:aspect-none lg:h-80">
              <img
                src={shoe.img}
                alt={shoe.name}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg text-bold text-[#00ff01]">{shoe.name}</h3>
                <p className="mt-1 text-sm text-white">{shoe.brand}</p>
                <p className="mt-1 text-sm text-white">{shoe.color}</p>
              </div>
              <p className="text-3xl font-medium p-4 text-white">${shoe.value}</p>              
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Card