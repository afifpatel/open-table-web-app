import React from 'react';
import './Layout.css';

const Layout = (props) => (
    <div className="container">
        <legend className="legend">Restaurant search</legend>
            {props.children}
    </div>
);

export default Layout;