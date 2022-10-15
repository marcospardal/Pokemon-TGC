import React, { Suspense } from 'react';
import NavBar from '../NavBar/Navbar';
import routes from '../../routes/routes';
import { Routes, Route } from 'react-router-dom';

import './Layout.styles.sass';

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