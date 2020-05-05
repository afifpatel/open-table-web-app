import { fork, all } from 'redux-saga/effects';
import watchGetRestaurantsSaga from './watchers/getRestaurants';

export default function* root() {
    yield all( 
        [
            fork(watchGetRestaurantsSaga)
        ]
    )
}