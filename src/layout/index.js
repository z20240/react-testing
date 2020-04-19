import React from 'react';
import { renderRoutes } from 'react-router-config';

const Layout = (props) => {
    const routes = props.route.routes;
    return (
        <main>
            <nav>
                This is nav
            </nav>
            <aside>
                This is sidebar
            </aside>

            {/* main contain */}
            <section>
                { renderRoutes(routes) }
            </section>

        </main>
    );
};

export default Layout;