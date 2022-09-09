import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import {
  incrementTotal,
  decrementTotal,
  deleteProductCarrito,
  incrementeQuantity,
  decrementeQuantity,
} from "../redux/actions/actions";

export default function CardCarrito({ shoe }) {
  const dispatch = useDispatch();

  const [cantComprar, setCantComprar] = useState(shoe.quantity);

  useEffect(() => {
    dispatch(incrementTotal(shoe.price * cantComprar));
  }, []);

  const incrementar = () => {
    if (cantComprar === shoe.stock) setCantComprar(shoe.stock);
    else {
      setCantComprar(cantComprar + 1);
      dispatch(incrementTotal(shoe.price));
      dispatch(incrementeQuantity(shoe._id));
    }
  };

  const decrementar = () => {
    if (cantComprar === 1) setCantComprar(1);
    else {
      setCantComprar(cantComprar - 1);
      dispatch(decrementTotal(shoe.price));
      dispatch(decrementeQuantity(shoe._id));
    }
  };

  function handleDelete(e) {
    dispatch(decrementTotal(shoe.price * cantComprar));
    dispatch(deleteProductCarrito(e));
  }

  return (
    <div>
      <div className="flex justify-between items-center mt-3 pt-3">
        <div className="flex  items-center">
          <img
            className="w-12 h-12 object-contain flex items-center"
            alt=""
            src={shoe.image}
          />
          <div className="flex flex-col ml-3">
            <p className="md:text-md font-medium">{shoe.name}</p>
            <p className="text-xs font-light text-gray-400">${shoe.price}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="px-4 flex">
            <button className="font-semibold h-8 w-8" onClick={decrementar}>
              -
            </button>
            <button
              className="focus:outline-none bg-gray-100 h-8 w-8 rounded text-sm px-2 mx-2"
              disabled
            >
              {cantComprar}
            </button>
            <button className="font-semibold h-8 w-8" onClick={incrementar}>
              +
            </button>
            
          </div>
          <div className="flex justify-center items-center">
            <div className="pr-8 ">
              <p className="text-xs font-semibold">${cantComprar * shoe.price}</p>
            </div>
          </div>
          <div>
            <button className="h-8 w-8" onClick={() => handleDelete(shoe._id)}><AiFillDelete/></button>
          </div>
        </div>
      </div>
    </div>
  );
}
