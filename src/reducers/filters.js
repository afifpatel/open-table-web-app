import { SET_FILTERS } from "../constants"

const initialState = {
    city: '',
    filter: ''
}

export const reducer =  (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTERS:
            return { 
                ...state,
                city: action.city,
                filter: action.filter,
            };
        default:
            return state
        }
}

export const selector = (state) => {
    return {
        city: state.filtersReducer.city,
        filter: state.filtersReducer.filter
    }
}
