import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { fetchPageNumbers } from '../../lib/pages';
import { LEFT_PAGE, RIGHT_PAGE } from '../../constants';
import { useSelector } from 'react-redux';
import { selector as paginatorSelector } from '../../reducers/paginator';
import './Pagination.css';

const Pagination = props => {
    let { totalRecords = null, pageLimit = 25, pageNeighbours = 0} = props;
    // const [currentPage, setCurrentPage] = useState(1);
    const { currentPage } = useSelector(paginatorSelector);

    useEffect(() => {
        goToPage(1);
    }, [])

    pageLimit = typeof pageLimit === 'number' ? pageLimit : 25;
    totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;

    // pageNeighbours can be: 0, 1 or 2
    pageNeighbours = typeof pageNeighbours === 'number' ? Math.max(0, Math.min(pageNeighbours, 2)) : 0;

    const totalPages = Math.ceil(totalRecords / pageLimit);

    const pages = fetchPageNumbers(totalPages, currentPage, pageNeighbours);

    const goToPage = page => {
        const { onPageChanged = f => f} = props;

        const _currentPage = Math.max(0, Math.min(page, totalPages));

        const paginationData = {
            currentPage: _currentPage,
            totalPages: totalPages,
            pageLimit: pageLimit,
            totalRecords: totalRecords
        }

        onPageChanged(paginationData);
        // setCurrentPage((_currentPage), () => onPageChanged(paginationData));
    }

    const handleClick = page => evt => {
        evt.preventDefault();
        goToPage(page);
    }

    const handleMoveLeft = evt => {
        evt.preventDefault();
        goToPage(currentPage - (pageNeighbours * 2) - 1);
    }

    const handleMoveRight = evt => {
        evt.preventDefault();
        goToPage(currentPage + (pageNeighbours * 2) + 1);
    }

    return (
        <>
          <nav aria-label="pagination">
            <ul className="pagination">
                { pages.map((page, index) => {
                    if (page === LEFT_PAGE) return (
                        <li key={index} className="page-item">
                            <a className="page-link" href="#" aria-label="Previous" onClick={handleMoveLeft}>
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                    );

                    if (page === RIGHT_PAGE) return (
                        <li key={index} className="page-item">
                            <a className="page-link" href='#' aria-label="Next" onClick={handleMoveRight}>
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    );

                    return (
                        <li key={index} className={`page-item${ currentPage === page ? ' active' : ''}`}>
                            <a className="page-link" href="#" onClick={handleClick(page)}>{ page }</a>
                        </li>
                    )
                })}
            </ul>
          </nav>  
        </>
    )
}




Pagination.propTypes = {
    totalRecords: PropTypes.number.isRequired,
    pageLimit: PropTypes.number,
    pageNeighbours: PropTypes.number,
    onPageChanged: PropTypes.func
};

export default Pagination;
