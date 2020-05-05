import { SET_RESTAURANTS } from "../constants";

const initialState = { 
    restaurants: [],
    total_entries: 0
 };

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESTAURANTS: 
            return {
                ...state,
                restaurants: action.restaurants,
                total_entries: action.total_entries
            };
        default:
            return state;
    }
}

export const selector = (state) => {
    return {
        restaurants: state.restaurantsReducer.restaurants,
        total_entries: state.restaurantsReducer.total_entries
    }
}