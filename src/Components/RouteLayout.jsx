import React from 'react';
import { Outlet } from 'react-router-dom';
import NavComponent from './Navbar';
import { Provider } from 'react-redux';
import store from './Store/Store';
const RouteLayout = () => {
  return (
    <Provider store={store}>
    <div>
     <NavComponent/>
      <main>
        <Outlet/>
      </main>
    </div>
    </Provider>
  )
}

export default RouteLayout;
