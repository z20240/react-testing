import React from 'react';
import { renderRoutes } from 'react-router-config';

const Menu1_2 = ({ route }) => {

    return (
        <div>
            <h1>nested/menu1/menu1-2</h1>
            { renderRoutes(route.routes) }
        </div>
    );
};

export default Menu1_2;