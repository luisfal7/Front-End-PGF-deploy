import React from 'react';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getShoes } from '../redux/actions';

function Catalog(){
  const dispatch = useDispatch()

  let shoes = useSelector(state => state.filter);
  console.log(shoes);

  useEffect(()=>{
    dispatch(getShoes())
  },[dispatch])
  return (
    <div className="bg-black">
      <div className="text-[#00ff01] text-6xl font-bold text-center py-2">Products</div>
      <div className="container">
          <div className="mt-0 grid grid-cols-4 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {shoes.map(e => 
            <Card 
            key= {e._id} 
            id = {e._id}
            shoe= {e}
            />)}
          </div>
      </div>
    </div>
    
  )
}

export default Catalog;