import FilterBrand from "./FilterBrand";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { BsFillCartFill, BsPersonFill } from "react-icons/bs";
import { GiRunningShoe } from 'react-icons/gi'

function NavBar() {
    return ( 
        <div className="px-2 flex justify-between content-center items-center w-full h-full bg-white">
            <Link to="/">
            <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Sneaker Paradise</h1>
            </Link>
            <div className="flex justify-between items-center">
                <ul>
                    <li><FilterBrand/></li>
                </ul>
            </div>
            <div className="flex pr-4">
                <SearchBar/>
                <button className="text-black bg-red-600 border-none px-8 py-3 flex mr-4 text-xl"><GiRunningShoe className="text-3xl"/>Deals!</button>
                <Link to={`/cart`}>
                    <button className="mr-4 px-8 py-3 text-xl"><BsFillCartFill/></button>
                </Link>
                <button className="px-8 py-3 text-xl"><BsPersonFill/></button>   
            </div>
        </div>
    );
}

export default NavBar;
