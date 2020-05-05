import { SET_PAGINATION } from "../constants";

const initialState = { 
    currentPage: null,
    totalPages: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGINATION:
            return { 
                ...state, 
                currentPage: action.currentPage,
                totalPages: action.totalPages 
            };
        default:
            return state;
    }
}

export const selector = (state) => {
    return {
        currentPage : state.paginationReducer.currentPage,
        totalPages: state.paginationReducer.totalPages
    }
}
