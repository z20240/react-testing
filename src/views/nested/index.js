import React from 'react';
import { renderRoutes } from 'react-router-config';

const Nested = (props) => {
    const routes = props.route.routes;
    return (
        <div>
            <h1>nested</h1>
            { renderRoutes(routes) }
        </div>
    );
};


export default Nested;