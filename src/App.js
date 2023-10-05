import React from 'react';
import Products from './Components/Products';
import Dashbord from './Components/Dashbord';
import CartComponent from './Components/CartComponent';
import ErrorPage from './ErrorPage';
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route, BrowserRouter } from 'react-router-dom';
import RouteLayout from './Components/RouteLayout';
const App = () => {
  const RoutingFunction=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RouteLayout/>}>
      <Route index element={<Products/>}/>
      <Route path='cart' element={<CartComponent/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Route>

  ))
  return (
   <div className='appComponent'>
   <RouterProvider router={RoutingFunction}/>
   </div>
  )
}

export default App;
