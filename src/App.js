import './App.css';
import Main from './pages/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import SignIn from './pages/SignIn';
import React, { useState, useEffect } from 'react';
import WebS from './WebS';
import Home from "./pages/Home" ; 
import Profile from './pages/ProfilePage';
import Messanger from './pages/MessangerSection' ; 
import SignIn from './pages/SignIn'
import SignUpForm from './Components/SignUp/SignUpForm';
import SignUp from './pages/SignUpPage';

const router = createBrowserRouter([
   {
    path : '/' ,
    element :<Main />,
  children : [{
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile/:id',
    element: <Profile />,
  },
  
  {
    path: '/messanger',
    element: <Messanger />,
  }, {
    path: '/carpool',
    element: <h1> carpool</h1>,
  },]   } , {
    path:"/signin"   , 
    element : <SignIn />
  },{
    path:"/signup",
    element: <SignUp />
  }
  
]);


function App() {
  return (
    <>
            <RouterProvider router={router} />
    </>
  );
}

export default App;
