import {
    GET_SHOES,
    GET_SHOE,
    GET_BY_NAME
} from './actions'

const initialState = {
    shoes: [],
    shoe: [],
    name: []
}

function reducer(state = initialState, action){

    switch(action.type){
        case GET_SHOES:
            return{
                ...state, 
                shoes: action.payload
            }
        case GET_SHOE:
            return{
                ...state, 
                shoe: action.payload
            }
        case GET_BY_NAME:
            return{
                ...state, 
                name: action.payload
            }
        default: return state
    }
}

export default reducer;