import { Home } from '../views';
import React, { lazy } from 'react';

const Favorites = lazy(() => import('../views/Favorites/Favorites'))

const routes: any[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: 'favorites',
    component: Favorites
  }
]

export default routes;