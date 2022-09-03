import FilterBrand from "./FilterBrand";
import SearchBar from "./SearchBar";
import { BsFillCartFill, BsPersonFill } from "react-icons/bs";
import { GiRunningShoe } from 'react-icons/gi'

function NavBar() {
    return ( 
        <div className="px-2 flex justify-between items-center w-full h-full bg-white">
            <div className="flex items-center">
                <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Sneaker Paradise</h1>
                <ul className="flex">
                    <li><SearchBar/></li>
                    <li><FilterBrand/></li>
                </ul>
            </div>
            <div className="flex pr-4">
                <button className="text-black bg-red-600 border-none px-8 py-3 flex mr-4 text-xl"><GiRunningShoe className="text-3xl"/>Deals!</button>
                <button className="mr-4 px-8 py-3 text-xl"><BsFillCartFill/></button>
                <button className="px-8 py-3 text-xl"><BsPersonFill/></button>   
            </div>
        </div>
    );
}

export default NavBar;