import React, { useEffect } from 'react'
import {MdFavorite} from 'react-icons/md'
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getShoe } from '../redux/actions';
import NavBar from './NavBar';
import RatingComponent from './RatingComponent';

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
    {
    shoe?.map((el) => { return (
    <div className="text-white bg-black h-screen">
      <div className="px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img className="lg:w-[600px] w-auto h-auto rounded-lg" src={el.image} alt={el.name}/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-[#00ff01] text-3xl font-md mb-1 capitalize">{el.name}</h1>
              <h2 className="text-sm uppercase">{el.brand}</h2>
                <div className="flex mb-4">
        </div>
        <p>{el.description}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 mb-5">
          <div className="flex">
            <span className="mr-3">{el.color}</span>
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded-md w-20 focus:border-[#00ff01] focus:ring-0 text-black pr-4">
              {
              el.stock?.map((el)=>{return(
              <option>{el.size}</option>
                )})
              }
              </select>
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl">${el.price}</span>
          <button className="flex ml-auto border py-2 px-6">BUY ME!</button>
          <button className="rounded-full w-10 h-10 border inline-flex items-center justify-center ml-4">
            <MdFavorite/>
          </button>
        </div>
        <Link to="/">
            <button className="border mt-5 py-2 px-6">BACK HOME</button>
        </Link>
      </div>
      <RatingComponent/>
      <div>
      </div>
    </div>
  </div>
</div>
)})
}
</>
  )
}

export default CardDetail