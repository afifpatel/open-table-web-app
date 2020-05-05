import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantsSaga, setPagination } from '../../actions';
import { selector as filtersSelector } from '../../reducers/filters';
import { selector as paginatorSelector } from '../../reducers/paginator';
import { selector as restaurantsSelector } from '../../reducers/restaurants';
import Pagination from '../Pagination.js/Pagination';
import './Paginator.css';

const Paginator = () => {

    const {currentPage, totalPages} = useSelector(paginatorSelector);
    const { city, filter } = useSelector(filtersSelector);
    const { total_entries }  = useSelector(restaurantsSelector);
    const totalRestaurants = (total_entries && total_entries > 0) ? total_entries : null;
    const dispatch = useDispatch();


    const onPageChanged = data => {
        const { currentPage, totalPages, pageLimit } = data;
        dispatch(getRestaurantsSaga(city, filter, currentPage, pageLimit));
        dispatch(setPagination(currentPage, totalPages));
    }

    const headerClass = [ 'text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();

    return (
        totalRestaurants &&
        <div className="container">
            <div className="row d-flex flex-row">
                <div className="w-100 px-4 d-flex flex-row flex-wrap align-items-center justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <h5 className={headerClass}>
                            <strong className="text-secondary">{totalRestaurants}</strong> Restaurants
                        </h5>
                        { currentPage && (
                            <span className="current-page text-secondary d-inline-block h-100 pl-4">
                                Page <span style={{ fontWeight: 'bold'}}>{ currentPage }</span> / <span style={{ fontWeight: 'bold'}}>{ totalPages }</span>
                            </span>
                        )}
                    </div>
                    <div className="d-flex flex-row py-4 align-items-center">
                        <Pagination totalRecords={totalRestaurants} pageLimit={25} pageNeighbours={2} onPageChanged={onPageChanged}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paginator;