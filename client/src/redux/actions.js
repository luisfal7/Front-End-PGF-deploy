import axios from 'axios'

export const GET_SHOES = 'GET_SHOES'
export const GET_SHOE = 'GET_SHOE'
export const GET_BRANDS = 'GET_BRANDS'
export const GET_BY_NAME = 'GET_BY_NAME'
export const GET_BY_BRAND = 'GET_BY_BRAND'

export const getShoes = () => (dispatch)=>{
    return axios('http://localhost:3001/shoes')
                    .then(res => dispatch({type: 'GET_SHOES', payload: res.data}))
}

export const getShoe = (id) => (dispatch)=>{
    return axios(`http://localhost:3001/shoes/${id}`)
                    .then(res => dispatch({type: 'GET_SHOE', payload: res.data}))
}

export const getBrands = () => (dispatch)=>{
    return axios(`http://localhost:3001/brands`)
                    .then(res => dispatch({type: 'GET_BRANDS', payload: res.data})) 
}

export const getByName = (name) => (dispatch)=>{
    return axios(`http://localhost:3001/shoes?name=${name}`)
                    .then(res => dispatch({type: 'GET_BY_NAME', payload: res.data})) 
}


export const getByBrand = (brand) =>{
    return {
        type: 'GET_BY_BRAND',
        payload: brand
    } 
}