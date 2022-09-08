import FilterBrand from "./FilterBrand";
import SearchBar from "./SearchBar";
import { BsFillCartFill, BsPersonFill } from "react-icons/bs";
import { GiRunningShoe } from 'react-icons/gi'
import { Link } from "react-router-dom";

function NavBar() {
    return ( 
        <div className="px-2 flex justify-between content-center items-center w-full h-full bg-black">
            <a href="/">
            <h1 className="text-3xl font-bold mr-4 sm:text-4xl text-white">Sneaker Paradise</h1>
            </a>
            <div className="flex pr-4">
                <FilterBrand/>
                <SearchBar/>
                <button className="text-black bg-red-600 border-none px-8 py-3 flex mr-4 text-xl"><GiRunningShoe className="text-3xl"/>Deals!</button>
                <button className="mr-4 px-8 py-3 text-xl"><BsFillCartFill/></button>
                <Link to='/signin'><button className="px-8 py-4 text-xl"><BsPersonFill/></button></Link>
            </div>
        </div>
    );
}

export default NavBar;
