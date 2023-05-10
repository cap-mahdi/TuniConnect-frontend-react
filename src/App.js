import './App.css';
import Main from './pages/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import SignIn from './pages/SignIn';
import React, { useState, useEffect } from 'react';
import WebS from './WebS';
import Home from "./pages/Home" ; 
import Profile from './Components/Profile/Profile';
import Messanger from './pages/MessangerSection' ; 
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUpPage';
import ProtectedPage from './api/ProtectedPage';
import CovoiturageHome from "./pages/CovoiturageHome"
const router = createBrowserRouter([
   {
    path : '/' ,
    element :<ProtectedPage component = {Main}> </ProtectedPage>,
  children : [{
    path: '/',
    element:<ProtectedPage component = {Home}>  </ProtectedPage> ,
  },
  {
    path: '/profile/:id',
    element: <ProtectedPage component = {Profile}> </ProtectedPage> ,
  },
  
  {
    path: '/messanger',
    element: <ProtectedPage component = { Messanger}></ProtectedPage> ,
  }, {
    path: '/carpool',
    element:<ProtectedPage component = {CovoiturageHome}>   </ProtectedPage>,
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
