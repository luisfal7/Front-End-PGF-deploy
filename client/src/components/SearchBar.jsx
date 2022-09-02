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
            <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <form>
                        <div className="relative flex flex-wrap items-stretch w-full mb-4">
                            <input 
                            type="search" 
                            className="flex justify-center min-w-0 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
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
                                                    <article className="hover:bg-blue-300 flex gap-4 p-4">
                                                        <img src={e.image} alt='' className="w-12 h-12 object-contain" />
                                                        <div>
                                                            <h3 className='text-sm font-semibold'>{e.name}</h3>
                                                            <p className='text-xs text-gray-600'>{e.price}</p>
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