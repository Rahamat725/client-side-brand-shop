import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root';
import NotFound from './NotFound/NotFound';
import Home from './Pages/Home/Home';
import Login from './Pages/login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import AddBrands from './Pages/Home/AddBrands';
import Apple from './Pages/Brands/Apple';
import Boat from './Pages/Brands/Boat';
import Hp from './Pages/Brands/Hp';
import Dell from './Pages/Brands/Dell';
import Samsung from './Pages/Brands/Samsung';
import Sony from './Pages/Brands/Sony';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addbrand',
        element:<AddBrands></AddBrands>
      },
      {
        path:'/apple',
        element: <Apple></Apple>
      },
      {
        path:'/boAt',
        element:<Boat></Boat>
      },
      {
        path:'/hp',
        element:<Hp></Hp>
      },
      {
        path:'/dell',
        element:<Dell></Dell>
      },
      {
        path:'/samsung',
        element: <Samsung></Samsung>
      },
      {
        path:'/sony',
        element: <Sony></Sony>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
