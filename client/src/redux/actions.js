import axios from 'axios'

export const GET_SHOES = 'GET_SHOES'
export const GET_SHOE = 'GET_SHOE'
export const GET_BRANDS = 'GET_BRANDS'
export const GET_BY_NAME = 'GET_BY_NAME'
export const GET_BY_BRAND = 'GET_BY_BRAND'
export const GET_BY_CATALOG_BRAND = 'GET_BY_CATALOG_BRAND'

export const getShoes = () => (dispatch)=>{
    return axios('https://sneakers-backend-henry.herokuapp.com/shoes')
                    .then(res => dispatch({type: 'GET_SHOES', payload: res.data}))
}

export const getShoe = (id) => (dispatch)=>{
    return axios(`https://sneakers-backend-henry.herokuapp.com/shoes/${id}`)
                    .then(res => dispatch({type: 'GET_SHOE', payload: res.data}))
}

export const getBrands = () => (dispatch)=>{
    return axios(`https://sneakers-backend-henry.herokuapp.com/brands`)
                    .then(res => dispatch({type: 'GET_BRANDS', payload: res.data})) 
}

export const getByName = (name) => (dispatch)=>{
    return axios(`https://sneakers-backend-henry.herokuapp.com/shoes?name=${name}`)
                    .then(res => dispatch({type: 'GET_BY_NAME', payload: res.data})) 
}

export const getByCatalogBrand = (brand) => (dispatch)=>{
    return axios(`https://sneakers-backend-henry.herokuapp.com/shoes?brand=${brand}`)
                    .then(res => dispatch({type: 'GET_BY_CATALOG_BRAND', payload: res.data})) 
}

export const getByBrand = (brand) =>{
    return {
        type: 'GET_BY_BRAND',
        payload: brand
    } 
}