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
import ProtectedPage from './API/ProtectedPage';
const router = createBrowserRouter([
   {
    path : '/' ,
    element :<ProtectedPage> <Main /></ProtectedPage>,
  children : [{
    path: '/',
    element:<ProtectedPage>  <Home /></ProtectedPage> ,
  },
  {
    path: '/profile/:id',
    element: <ProtectedPage> <Profile /></ProtectedPage> ,
  },
  
  {
    path: '/messanger',
    element: <ProtectedPage> <Messanger /></ProtectedPage> ,
  }, {
    path: '/carpool',
    element:<ProtectedPage>  <h1> carpool</h1> </ProtectedPage>,
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
