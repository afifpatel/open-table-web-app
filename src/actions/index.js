import { SET_RESTAURANTS, GET_RESTAURANTS_SAGA, SET_PAGINATION, SET_FILTERS } from "../constants"

export const setRestaurants = (restaurants, total_entries) => {
    return {
        type: SET_RESTAURANTS,
        restaurants,
        total_entries
    };
};

export const setFilters = (city, filter) => {
    return {
        type: SET_FILTERS,
        city,
        filter
    };
};

export const setPagination = (currentPage, totalPages) => {
    return {
        type: SET_PAGINATION,
        currentPage,
        totalPages
    };
};


// Sagas
export const getRestaurantsSaga = (city, filter, currentPage, pageLimit) => {
    return {
        type: GET_RESTAURANTS_SAGA,
        payload: {
            city,
            filter,
            currentPage,
            pageLimit
        }
    };
}