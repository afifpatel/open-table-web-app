import { LEFT_PAGE, RIGHT_PAGE } from '../constants';
import { range } from './range';

/**
 * Let's say we have 10pages and we set pageNeighbours to 2
 * Given that the current page is 6
 * 
 * The pagination control will look like the following:
 * 
 * (1) < {4 5} [6] {7 8} > (10)
 *
 * (x) => terminal pages: first and last page(always visible)
 * [x] => represents current page
 * {..x} => represents page neighbours
 *  
 * @param {*} totalPages 
 * @param {*} currentPage 
 * @param {*} pageNeighbours 
 */
export const fetchPageNumbers = (totalPages, currentPage, pageNeighbours) => {
    const _totalPages = totalPages;
    const _currentPage = currentPage;
    const _pageNeighbours = pageNeighbours;

    /**
     * totalNumbers: total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
     const totalNumbers = (pageNeighbours * 2) + 3;
     const totalBlocks = totalNumbers + 2;

     if (_totalPages > totalBlocks) {

        const startPage = Math.max(2, _currentPage - _pageNeighbours);
        const endPage = Math.min(_totalPages -1, _currentPage + _pageNeighbours);

        let pages = range(startPage, endPage);

        /**
         * hasLeftSpill: has hidden pages to the left
         * hasRightsSpill: has hidden pages to the right
         * spillOffset: number of hidden pages either to the left or to the right
         */

         const hasLeftSpill = startPage > 2;
         const hasRightsSpill = (_totalPages - endPage) > 1;
         const spillOffset = totalNumbers - (pages.length + 1);

         switch (true) {
             // handle: (1) < {5 6} [7] {8 9} (10)
             case (hasLeftSpill && !hasRightsSpill): {
                 const extraPages = range(startPage - spillOffset, startPage - 1);
                 pages = [LEFT_PAGE, ...extraPages, ...pages];
                 break;
             }
             // handle: (1) { 2 3} [4] {5 6} > (10)
             case (!hasLeftSpill && hasRightsSpill): {
                 const extraPages = range(endPage + 1, endPage + spillOffset);
                 pages = [...pages, ...extraPages, RIGHT_PAGE];
                 break;
             }
             // handle: (1) < {4 5} [6] {7 8} > (10)
             case (hasLeftSpill && hasRightsSpill):
             default: {
                 pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                 break;
             }
         }

         return [1, ...pages, _totalPages];
     }

     return range(1, _totalPages);
}
