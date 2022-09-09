import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getBrands, getByBrand, getByCatalogBrand } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

function FilterBrand() {
  const dispatch = useDispatch();

  let brands = useSelector((state) => state.brands);

  const handleChangeSelect = (e) => {
    dispatch(getByBrand(e.target.value));
    dispatch(getByCatalogBrand(e.target.value));
  };

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  return (
    <div className="cursor-pointer group">
      <p className="text-gray-700 text-lg hover:text-[#00ff01]">
        Brands
      </p>
      <div>   
        <div className="absolute t-20 z-40 hidden group-hover:block hover:block">
          <div className="py-3">
            <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45">
            </div>
          </div>
          <div className=" bg-white p-3.5">
            {brands?.map((e) => {
              return (
                <div>
                  <Link to={`/colletions/${e.name}`}>
                    <button
                      className="bg-white border-none ml-2"
                      value={e.name}
                      onClick={handleChangeSelect}
                    > 
                      {e.name}
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBrand;
