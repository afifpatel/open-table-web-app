import React from 'react'
import { useSelector } from 'react-redux'
import { selector as restaurantsSelector } from '../../reducers/restaurants'
import Restaurant from '../Restaurant/Restaurant'

export const RestaurantsList = () => {
    const { restaurants } = useSelector(restaurantsSelector);
    return (
        <>
          { restaurants &&
             restaurants.map(restaurant => (
                 <Restaurant key={restaurant.id} data={restaurant} />
             ))
          }  
        </>
    )
}

export default RestaurantsList;