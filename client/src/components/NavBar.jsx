import FilterBrand from "./FilterBrand";
import SearchBar from "./SearchBar";
import { BsCart, BsPerson } from "react-icons/bs";

function NavBar() {
  return (
    <div className="container">
      <nav className="flex justify-content: space-between items-center bg-white p-6">
        <div className="flex items-center flex-shrink-0 mr-6">
          <a className="fill current h-8 w-8 mr-2" href="#">
            IMAGEN
          </a>
          <span className="font-semibold text-xl tracking-tight">Sneaker Paradise</span>
        </div>
        <div className="flex justify-content-center text-center lg:flex lg:items-center lg:w-auto">
            <a href="#"
               className="block mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-red-800 mr-4">
                OFERTAS
            </a>
            <div className="block mt-4 lg:inline-block lg:mt-0 mr-4">
                <FilterBrand />
            </div>    
        </div>
        <div className="flex justify-content-end lg:flex lg:items-center lg:w-auto">
            <div className="block mt-4 lg:inline-block lg:mt-0 mr-4">      
                < SearchBar />
            </div>
            <a href="#"
                className="mt-4 flex text-center lg:inline-block lg:mt-0 hover:text-green-400 mr-4">
                  <BsCart />
            </a>
            <a href="#"
                className="block mt-4 lg:inline-block lg:mt-0 hover:text-green-400 mr-4">
                  <BsPerson />
            </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
