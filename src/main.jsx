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
