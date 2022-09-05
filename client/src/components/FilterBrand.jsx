import React, { useEffect, useState } from "react";
import { getBrands, getByBrand, getShoes } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function FilterBrand() {
  const dispatch = useDispatch();

  let brands = useSelector((state) => state.brands);

  const [product, setProduct] = useState(false);
  console.log(product)

  const handleChangeSelect = (e) => {
      
       dispatch(getByBrand(e.target.value));
      
  };
  const handleChange = (e) => {
      
      dispatch(getShoes())
      
  };

  useEffect(() => {
    dispatch(getShoes())
    dispatch(getBrands());
  }, [dispatch]);

  return (
    <div className="flex w-full h-full items-center content-center">
      <div onClick={() => setProduct(!product)}>
        {product ? (
          <div className="flex items-center">
            <p className="text-gray-700 text-lg cursor-pointer hover:text-[#00ff01]" onClick={handleChange}>Brands</p>
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-up cursor-pointer hover:text-[#00ff01] m-1"
              width={14}
              height={14}
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="6 15 12 9 18 15" />
            </svg>   
          </div>
        ) : (
          <div className="flex items-center">
            <p className="text-gray-700 text-lg cursor-pointer hover:text-[#00ff01]" onClick={handleChange}>Brands</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-down cursor-pointer hover:text-[#00ff01] m-1"
              width={14}
              height={14}
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="6 9 12 15 18 9" />
            </svg>
              
          </div>
        )}
      </div>
      <div className="absolute top-12">
          {product ? (
            <div className="z-40 w-40 h-60 absolute bg-white shadow transition duration-150 ease-in-out">
                {brands.map((e) => {
                  return (
                    <div>
                        <button className="bg-white border-none ml-2" value={e.name} onClick={handleChangeSelect}>{e.name}</button>
                    </div>
                  );
                })}
            </div>
          ) : (
            ""
          )}
        
      </div>
      
    </div>
  );
}

export default FilterBrand;
