import React from 'react';
import { renderRoutes } from 'react-router-config';

const Menu1 = (props) => {
    const routes = props.route.routes;
    return (
        <div>
            <h1>nested/menu1</h1>

            { renderRoutes(routes) }
        </div>

    );
};

export default Menu1;