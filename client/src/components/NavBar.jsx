import FilterBrand from "./FilterBrand";
import SearchBar from "./SearchBar";
import { BsCart, BsPerson } from "react-icons/bs";

function NavBar() {
    return ( 
        <div className="">
            <nav className="w-full bg-white">
                <div className="flex justify-center">
                    <div className="flex w-full items-center">
                        <a className="mr-auto ml-0" href="#">Sneaker Paradise</a>
                            <div className="justify-center items-center mr-auto">
                                <ul className="flex">
                                    <li className="flex">
                                        <SearchBar/>
                                    </li>
                                    <li className="flex">
                                        <a className="nav-link" aria-current="page" href="#">
                                            <span className="text-red-600">OFERTAS</span>
                                        </a>
                                    </li>
                                    <li className="flex"> 
                                        <FilterBrand/>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    <div className="flex w-full items-center mr-auto">
                        <ul className="flex">
                            <li className="flex"> 
                                <a className="nav-link" aria-current="page" href="#">
                                    <span><BsCart/></span>
                                </a>
                            </li>
                            <li className="flex">
                                <a className="nav-link" aria-current="page" href="#">
                                    <span><BsPerson/></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
     );
}

export default NavBar;