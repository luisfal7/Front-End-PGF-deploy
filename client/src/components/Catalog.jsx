import React, {useState} from 'react';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getShoes } from '../redux/actions';

function Catalog(){
  const dispatch = useDispatch()

  let shoes = useSelector(state => state.filter);

  const [currentPage, setCurrentPage] = useState(0)

  useEffect(()=>{
    if(shoes.length){
        setCurrentPage(0)
    }
  },[shoes])

  const prevPage = ()=>{
    if(currentPage < 9){
        setCurrentPage(0)
    }else{
        setCurrentPage(currentPage - 8)
    }
  }

  const nextPage = ()=>{
    if(shoes.length <= currentPage + 8){
        setCurrentPage(currentPage)
    }else{
        setCurrentPage(currentPage + 8)
    }
  }

  const shoesPage = shoes.slice(currentPage, currentPage + 8)

  useEffect(()=>{
    dispatch(getShoes())
  },[dispatch])

  return (
    <div className="bg-black">
      <div className="text-[#00ff01] text-6xl font-bold text-center pb-2 pt-16">Products</div>
      <div className='flex justify-around'>
        <button onClick={prevPage}>
          Previous
        </button>
        <button onClick={nextPage}>
          Next
        </button>
      </div>
      <div className="container">
          <div className="mt-0 grid grid-cols-4 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {shoesPage.map(e => 
              <Card 
                key= {e._id} 
                id = {e._id}
                shoe= {e}
              />
            )}
          </div>
      </div>
      
    </div>
    
  )
}

export default Catalog;