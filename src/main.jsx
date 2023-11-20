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
import AddProduct from './Pages/AddProducts/AddProduct';
import Update from './Pages/Update/Update';
import Details from './Pages/Brands/Details';
import MyCarts from './Pages/MyCarts/MyCarts';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
        path:'/addproduct',
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:'/apple',
        element: <Apple></Apple>,
        loader: () => fetch('http://localhost:5000/brands')
      },
      {
        path:'/boAt',
        element:<Boat></Boat>,
        loader: () => fetch('http://localhost:5000/brands')
      },
      {
        path:'/hp',
        element:<Hp></Hp>,
        loader: () => fetch('http://localhost:5000/brands')
      },
      {
        path:'/dell',
        element:<Dell></Dell>,
        loader: () => fetch('http://localhost:5000/brands')
      },
      {
        path:'/samsung',
        element: <Samsung></Samsung>,
        loader: () => fetch('http://localhost:5000/brands')
      },
      {
        path:'/sony',
        element: <Sony></Sony>,
        loader: () => fetch('http://localhost:5000/brands')
      },
      {
        path:'/productUpdate/:id',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/brands/${params.id}`)
      },
      {
        path:'/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/brands/${params.id}`)
      },
      {
        path:'/mycarts',
        element:<PrivateRoute><MyCarts></MyCarts></PrivateRoute>,
        loader: ()=> fetch('http://localhost:5000/mycarts')
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
