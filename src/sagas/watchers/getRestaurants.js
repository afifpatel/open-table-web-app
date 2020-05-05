import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_RESTAURANTS_SAGA } from "../../constants";
import { getRestaurants } from '../../lib/api';
import { setRestaurants, setPagination, setFilters } from '../../actions/index';

function* workerGetRestaurantsSaga(action) {
    yield put(setFilters(action.payload.city, action.payload.filter));
    const data = yield call(getRestaurants,action.payload);
    yield put(setRestaurants(data.restaurants, data.total_entries));
    const totalPages = Math.ceil(data.total_entries / data.per_page);
    yield put(setPagination(data.current_page, totalPages));
}

export default function* watchGetRestaurantsSaga() {
    yield takeLatest(GET_RESTAURANTS_SAGA, workerGetRestaurantsSaga);
}