import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { getByName } from '../redux/actions';

function SearchBar() {

    const dispatch = useDispatch()
    let name = useSelector((state) => state.name)

    const [value, setValue] = useState('')

    const handleChange = (e)=>{
        setValue(e.target.value)
        getByName(value)
    }

    useEffect(()=>{
        dispatch(getByName(value))
    },[dispatch, value])

    return (
            <div className="">
                <div className="">
                    <form>
                        <div className="pl-8">
                            <input 
                            type="search" 
                            className="px-6 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-[#00ff01] focus:outline-none" 
                            placeholder="Search product..." 
                            onChange={handleChange}
                            />
                        </div>
                    </form>
                    <div>
                        {
                        (typeof name !== 'string')  ? value && name?.map(e=>{
                                return(
                                    <section key={e.id}>
                                        <ul>
                                            <li>
                                                <Link to={`/products/${e._id}`}>
                                                    <article className="hover:bg-[#00ff01] flex gap-4 p-4">
                                                        <img src={e.image} alt='' className="w-12 h-12 object-contain" />
                                                        <div>
                                                            <h3 className='text-sm font-semibold'>{e.name}</h3>
                                                            <p className='text-xs text-black'>{e.price}</p>
                                                        </div>
                                                    </article>
                                                </Link>
                                            </li>
                                        </ul>    
                                    </section>
                                )}    
                            ):<h1>{name}</h1>
                        }
                    </div>
                </div>
            </div>
        );
}

export default SearchBar;