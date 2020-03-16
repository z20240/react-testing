import React, {Suspense } from 'react';
// import logo from './logo.svg';
import './App.css';

import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import router from './router';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                {/** https://blog.csdn.net/roamingcode/article/details/95235079 */}
                {/** child routes won't render without this */}
                {/** 渲染匹配路徑的路有組件 */}
                <Suspense fallback={loading()}>
                    { renderRoutes(router) }
                </Suspense>
            </HashRouter>
        </ThemeProvider>
    );
}

export default App;
