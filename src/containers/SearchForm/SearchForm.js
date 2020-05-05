import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRestaurantsSaga } from '../../actions';
import { useInput } from "../../hooks/input-hook";
import "./SearchForm.css";

const SearchForm = () => {
    const { value: city, bind: bindCity, reset: resetCity } = useInput('');
    const { value: filter, bind: bindFilter, reset: resetFilter} = useInput('');
    const [error, setError] = useState(false);
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!city || /^\s*$/.test(city)) {
            setError(true);
            return;
        }
        dispatch(getRestaurantsSaga(city, filter, 1, 25));
        setError(false);
        resetCity();
        resetFilter();
    }

    const errorStyle = error ? { border : '2px solid #da3743'} : { border : '#ddd' };

    return(
        <>
            <div className="search-form-container">
                <form className="search-form-inline" onSubmit={handleSubmit}>
                    { error && <p style={{color: 'red'}}>City field cannot be empty</p>}
                    <label className="search-form-label" htmlFor="city">City *</label>
                    <input 
                        required 
                        className="search-form-text" 
                        style={ errorStyle } 
                        type="text" 
                        {...bindCity} 
                        placeholder="Search by city..."
                        />
                    <label className="search-form-label" htmlFor="filter">Filter</label>
                    <input className="search-form-text" type="text" {...bindFilter} placeholder="Search by name, address or area..."/>
                    <input className="search-form-submit" type="submit" value="Search" />
                </form>
            </div>
            {/* { isLoading ? <div className="loader"></div> : "" } */}
        </>
    );
}

export default SearchForm;