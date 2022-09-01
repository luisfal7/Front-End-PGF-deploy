import React from 'react'
import {MdFavorite} from 'react-icons/md'

const CardDetail = (shoe) => {
  return (
    <div className="text-white bg-black">
      <div className="px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img className="lg:w-1/3 w-auto h-auto rounded-lg" src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' alt='s'/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-[#00ff01] text-3xl font-md mb-1">Basic Tee</h1>
              <h2 className="text-sm">Nike</h2>
                <div className="flex mb-4">
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex praesentium eligendi ut! Dignissimos repudiandae iusto sequi possimus voluptates molestiae iure eaque ullam nemo eius itaque, maiores reprehenderit officiis maxime quo.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 mb-5">
          <div className="flex">
            <span className="mr-3">Black</span>
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border focus:outline-none focus:ring-1 focus:ring-[#00ff01] text-black pr-4">
                <option>34</option>
                <option>36</option>
                <option>38</option>
                <option>40</option>
                <option>42</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl">$50</span>
          <button className="flex ml-auto border py-2 px-6">Buy me!</button>
          <button className="rounded-full w-10 h-10 border inline-flex items-center justify-center ml-4">
            <MdFavorite/>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default CardDetail