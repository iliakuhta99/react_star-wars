import React from 'react';

import PeoplePage from '@containers/PeoplePage'
import HomePage from '@containers/HomePage'
import NotFoundPage from '@containers/NotFoundPage'


const routesConfig = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/people',
        element: <PeoplePage />
    },
    {
        path: '/not-found',
        component: <NotFoundPage />
    },
    {
        path: '*',
        component: <NotFoundPage />
    }
];

export default routesConfig;