import React, { Suspense, useEffect, useState } from 'react';
import NavBar from '../NavBar/Navbar';
import routes from '../../routes/routes';
import { Routes, Route } from 'react-router-dom';
import { api } from '../../resources/api';

import './Layout.styles.sass';
import Pokemon from '../../types/pokemon';

const Layout = (): JSX.Element => {
  return (
    <section className='layout'>
      <NavBar />
      <main>
        <Suspense fallback={<p>carregando</p>}>
          <Routes>
              {routes.map(route => <Route key={route.path} path={route.path} element={<route.component/>}/>)}
          </Routes>
        </Suspense>
      </main>
      {/* <Footer /> */}
    </section>
  )
}

export default (Layout);