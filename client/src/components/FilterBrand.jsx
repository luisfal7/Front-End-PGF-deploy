import React, {useEffect} from 'react';
import { getBrands, getByBrand, getShoes } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function FilterBrand() {

    const dispatch = useDispatch();

    let brands = useSelector((state) => state.brands)
    
    const handleChangeSelect = (e)=>{
        if(e.target.value === 'brand'){
            dispatch(getShoes())
        }else{
            dispatch(getByBrand(e.target.value))
        } 
    }
    
    useEffect(() => {
        dispatch(getBrands())
        dispatch(getShoes());
      }, [dispatch]);

    return ( 
        <div>
            <select className='' onClick={handleChangeSelect}>
                <option key={0}>
                    marca
                </option>
                    {brands.map(e =>{ 
                        return(
                            <option key={e._id} value={e.name}>
                                {e.name}
                             </option>
                        )}
                    )}
            </select>
        </div>
     );
}

export default FilterBrand;