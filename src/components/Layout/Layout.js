import React from 'react';

const Layout = (props) => (
    <div>
        <div>Toolbar</div>
        <main>
            {props.children}
        </main>
    </div>
);

export default Layout;