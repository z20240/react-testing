import React from 'react';

const Dashboard = React.lazy(() => import('../views/dashboard'));
const ErrorPage = React.lazy(() => import('../views/errorPage'));
const NestPage = React.lazy(() => import('../views/nestPage'));
const NestPageLevel2 = React.lazy(() => import('../views/nestPage/Level2'));

export default [
    {
        path: '/',
        name: 'Dashboard',
        exact: true,
        component: Dashboard
    },
    {
        path: '/404',
        name: '404',
        component: ErrorPage
    },
    {
        path: '/nest',
        name: 'nest',
        component: NestPage,
        routes: [
            {
                path: 'nest/level2',
                component: NestPageLevel2
            }
        ]
    }
];