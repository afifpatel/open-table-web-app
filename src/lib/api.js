
export async function getRestaurants({ city, filter, currentPage, pageLimit}) {
    const url = `http://opentable.herokuapp.com/api/restaurants?city=${city}&page=${currentPage}&per_page=${pageLimit}`;
    const response = await fetch(url);
    let data = await response.json();
    if(filter &&  !(/^\s*$/.test(filter))){
        data = filterData(data, filter);
    }
    
    return data;
}

const filterData = (data, filter) => {
    const _filter = filter.toLowerCase();
    const restaurants = [...data.restaurants];
    let restaurant_name, restaurant_address, restaurant_area;
    const filteredRestaurants = restaurants.filter(restaurant => {
        restaurant_name = restaurant.name.toLowerCase();
        restaurant_address = restaurant.address.toLowerCase();
        restaurant_area = restaurant.area.toLowerCase();
        if( restaurant_name.includes(_filter) || restaurant_address.includes(_filter) || restaurant_area.includes(_filter)) {
            return true;
        }
    });
    
    return {
        ...data,
        restaurants: [...filteredRestaurants]
    }
}