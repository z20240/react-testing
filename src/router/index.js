import React from 'react';

import nested from './modules/nested'

export default [
    {
        path: '/',
        name: 'Dashboard',
        exact: true,
        component: React.lazy(() => import('../views/dashboard'))
    },
    {
        path: '/404',
        name: '404',
        exact: true,
        component: React.lazy(() => import('../views/404'))
    },
    {
        path: '/login',
        name: 'Login',
        exact: true,
        component: React.lazy(() => import('../views/login'))
    },
    nested,
];