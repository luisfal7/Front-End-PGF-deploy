import React from 'react'

const Card = ({shoe}) => {
  return (
    <div className="bg-black">
      <div className="max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group relative cursor-pointer">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl group-hover:opacity-60">
              <img
                src="https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Sand-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1617991585"
                alt='x'
                className="h-full w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-xl text-bold text-[#00ff01]">Prueba</h3>
                <p className="mt-1 text-md text-white">Marca</p>
                <p className="mt-1 text-md text-white">White</p>
              </div>
              <p className="text-3xl font-medium p-4 text-white">$50</p>              
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Card