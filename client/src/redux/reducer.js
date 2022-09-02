import {
    GET_SHOES,
    GET_SHOE,
    GET_BY_NAME,
    GET_BRANDS,
    GET_BY_BRAND
} from './actions'

const initialState = {
    shoes: [],
    shoe: [],
    filter:[],
    brands:[],
    name: []
}

function reducer(state = initialState, action){

    switch(action.type){
        case GET_SHOES:
            return{
                ...state, 
                shoes: action.payload,
                filter: action.payload
            }
        case GET_SHOE:
            return{
                ...state, 
                shoe: action.payload
            }
        case GET_BRANDS:
            return{
                ...state, 
                brands: action.payload
            }
        case GET_BY_NAME:
            return{
                ...state, 
                name: action.payload
            }
        case GET_BY_BRAND:
            return{
                ...state, 
                filter: [...state.shoes].filter(e => e.brand?.includes(action.payload))
            }
        default: return state
    }
}

export default reducer;