import './App.css';
import Main from './pages/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import SignIn from './pages/SignIn';
import React, { useState, useEffect } from 'react';
import WebS from './WebS';
import Home from "./pages/Home" ; 
import Profile from './pages/Profile';
import Messanger from './pages/MessangerSection' ; 

const router = createBrowserRouter([
   {
    path : '/' ,
    element :<Main />,
  children : [{
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/messanger',
    element: <Messanger />,
  }, {
    path: '/carpool',
    element: <h1> carpool</h1>,
  },]   } , 
  
]);


function App() {
  return (
    <>
            <RouterProvider router={router} />
    </>
  );
}

export default App;
