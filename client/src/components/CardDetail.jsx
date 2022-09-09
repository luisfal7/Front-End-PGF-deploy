import React, { useEffect } from 'react'
import {MdFavorite} from 'react-icons/md'
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getShoe, addProductCarrito } from '../redux/actions/actions';
import NavBar from './NavBar';

const CardDetail = () => {
    const dispatch = useDispatch()
    const shoe = useSelector((state) => state.shoe)
    let { id } = useParams()

    useEffect(() => {
        dispatch(getShoe(id));
    }, [dispatch, id])
  return (
    <>
    <NavBar/>
    <div className="text-white bg-black h-screen">
      <div className="px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img className="lg:w-1/3 w-auto h-auto rounded-lg" src={shoe.image} alt={shoe.name}/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-[#00ff01] text-3xl font-md mb-1 capitalize">{shoe.name}</h1>
              <h2 className="text-sm uppercase">{shoe.brand}</h2>
                <div className="flex mb-4">
        </div>
        <p>{shoe.description}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 mb-5">
          <div className="flex">
            <span className="mr-3">{shoe.color}</span>
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border focus:outline-none focus:ring-1 focus:ring-[#00ff01] text-black pr-4">
              {
              shoe.stock?.map((shoe)=>{return(
              <option>{shoe.size}</option>
                )})
              }
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-around">
          <span className="title-font font-medium text-2xl">${shoe.price}</span>
        <Link to="/">
            <button className="border py-2 px-6">BACK HOME</button>
        </Link>
          <Link to={`/cart`}> 
            <button className="flex ml-auto border py-2 px-6" onClick={()=>dispatch(addProductCarrito(shoe))}>BUY ME!</button>
          </Link>
          <button className="rounded-full w-10 h-10 border inline-flex items-center justify-center ml-4">
            <MdFavorite/>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default CardDetail