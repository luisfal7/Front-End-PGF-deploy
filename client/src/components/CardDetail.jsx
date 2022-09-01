import React, { useEffect, useState } from 'react'
import {MdFavorite} from 'react-icons/md'
import axios from 'axios'
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const CardDetail = () => {
  const params = useParams()
  
  const [shoe, setShoe] = useState([])

  useEffect(() => {
    const getShoe = async () => {
      let { data: shoe } = await axios.get(`http://localhost:3001/shoes/${params.id}`)
      setShoe(shoe)
    }
    getShoe()
  }, [params])

  return (
    <div className="text-white bg-black">
      <div className="px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img className="lg:w-1/3 w-auto h-auto rounded-lg" src={shoe.image} alt={shoe.name}/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-[#00ff01] text-3xl font-md mb-1">{shoe.name}</h1>
              <h2 className="text-sm">{shoe.brand}</h2>
                <div className="flex mb-4">
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex praesentium eligendi ut! Dignissimos repudiandae iusto sequi possimus voluptates molestiae iure eaque ullam nemo eius itaque, maiores reprehenderit officiis maxime quo.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 mb-5">
          <div className="flex">
            <span className="mr-3">{shoe.color}</span>
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
          <span className="title-font font-medium text-2xl">{shoe.price}</span>
          <button className="flex ml-auto border py-2 px-6">BUY ME!</button>
          <button className="rounded-full w-10 h-10 border inline-flex items-center justify-center ml-4">
            <MdFavorite/>
          </button>
        </div>
        <Link to="/">
            <button className="border py-2 px-6">BACK HOME</button>
        </Link>
      </div>
    </div>
  </div>
</div>
  )
}

export default CardDetail