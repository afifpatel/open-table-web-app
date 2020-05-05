import { combineReducers } from 'redux';
import { reducer as restaurantsReducer } from './restaurants';
import { reducer as paginationReducer } from './paginator';
import { reducer as filtersReducer } from './filters';

const rootReducer =  combineReducers({
    restaurantsReducer,
    paginationReducer,
    filtersReducer,
});

export default rootReducer;