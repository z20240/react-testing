import React from 'react';
import { Redirect } from 'react-router-dom';

/**
 * 知識點：
 *  1.  exact:
 *      exact 默认为false，如果为true时，需要和路由相同时才能匹配，但是如果有斜杠也是可以匹配上的。
 *      `如果在父路由中加了exact，是不能匹配子路由的`, `建议在子路由中加 exact`
 *
 *  2.  react-router 與 vue-router 的差異
 *      2-1. Vue Router 可以在 parents router 中直接定義 children router 並且 parents router 同時 redirect 其他 page；
 *           React Router 不能。
 *           若在 react router 中要達成此目的，請「依然」在 root 設置渲染 component，
 *           並在 children 中「另外定義一個相同 path 的 child route 做 redirect 需要」。
 *
 *  3. Vue router 的 path 為 「相對路徑」，children 不需要從 root 開始定義； react router 請將 path 完整定義清楚。
 */

export default {
    name: 'Nested',
    path: '/nested',
    component: React.lazy(() => import('../../views/nested')),
    routes: [
        {
            path: '/nested',
            name: 'Nested',
            component: () => <Redirect to='/nested/menu1/menu1-1' />,
            exact: true,
            meta: { title: 'Nested Routes', icon: 'nested' },
        },
        {
            path: '/nested/menu1',
            name: 'Menu1',
            component: React.lazy(() => import('../../views/nested/menu1/index')),
            meta: { title: 'Menu 1' },
            routes: [
                {
                    path: '/nested/menu1',
                    name: 'Menu1',
                    component: () => <Redirect to='/nested/menu1/menu1-1' />,
                    exact: true,
                    meta: { title: 'Menu 1' },
                },
                {
                    path: '/nested/menu1/menu1-1',
                    name: 'Menu1-1',
                    component: React.lazy(() => import('../../views/nested/menu1/menu1-1')),
                    exact: true,
                    meta: { title: 'Menu 1-1' }
                },
                {
                    path: '/nested/menu1/menu1-2',
                    name: 'Menu1-2',
                    component: React.lazy(() => import('../../views/nested/menu1/menu1-2')),
                    meta: { title: 'Menu 1-2' },
                    routes: [
                        {
                            path: '/nested/menu1/menu1-2',
                            name: 'Menu1-2',
                            component: () => <Redirect to='/nested/menu1/menu1-2/menu1-2-1' />,
                            exact: true,
                            meta: { title: 'Menu 1-2' },
                        },
                        {
                            path: '/nested/menu1/menu1-2/menu1-2-1',
                            component: React.lazy(() => import('../../views/nested/menu1/menu1-2/menu1-2-1')),
                            name: 'Menu1-2-1',
                            exact: true,
                            meta: { title: 'Menu 1-2-1' }
                        },
                        {
                            path: '/nested/menu1/menu1-2/menu1-2-2',
                            component: React.lazy(() => import('../../views/nested/menu1/menu1-2/menu1-2-2')),
                            name: 'Menu1-2-2',
                            exact: true,
                            meta: { title: 'Menu 1-2-2' }
                        }
                    ]
                },
                {
                    path: '/nested/menu1/menu1-3',
                    component: React.lazy(() => import('../../views/nested/menu1/menu1-3')),
                    name: 'Menu1-3',
                    exact: true,
                    meta: { title: 'Menu 1-3' }
                }
            ]
        },
        {
            path: '/nested/menu2',
            name: 'Menu2',
            exact: true,
            component: React.lazy(() => import('../../views/nested/menu2/index')),
            meta: { title: 'Menu 2' }
        },
    ]
}