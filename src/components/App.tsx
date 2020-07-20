import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { Helmet } from 'react-helmet';

import Index from '@/pages/Index';

const GlobalStyle = createGlobalStyle`
    ${normalize};

    * {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }
`;

const App: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>React boilerplate</title>
            </Helmet>
            <GlobalStyle />
            <Switch>
                <Route path='/' component={Index} exact />
            </Switch>
        </>
    );
};

export default hot(App);
