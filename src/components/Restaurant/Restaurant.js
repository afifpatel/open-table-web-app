import React from 'react';
import './Restaurant.css';

export const Restaurant = ({ data }) => {
    return (
        <div className="card border-info mb-3">
            <div className="card-header">{data.name}</div>
            <div className="card-body text-info">
                <h5 className="card-title">Address: {data.address}</h5>
                <p className="card-text">Price: {data.price}</p>
            </div>
        </div>
    )
}

export default Restaurant;