
import AuthController from './Accounts/AuthController';
import { Navigate } from 'react-router-dom';
import { redirect } from 'react-router';
import { useEffect, useState } from 'react';
export default function ProtectedPage(props) {
  const [auth , setAuth] = useState(null) ; 
  const [data , setData] = useState(null) ; 
  useEffect(()=>{
      (async()=>{
        const res = await AuthController.getMemberByToken() ;
        setAuth(res.auth) ;
        setData(res.data) ;
      })() ; 
  } , [])
  useEffect(()=>{
    console.log("auth is ",auth);
  } ,  [auth]) ;

  // console.log(AuthController.isAuthenticated())
  if (auth == null) {
    // Redirect to the sign-up page if the user is not authenticated
    console.log("estana");
    return null;
  }else if (auth == false){
    console.log("ha,ni lenna ");
    return <Navigate to="/signin" />;
  }
  const Children = props.component ; 
  // Render the protected page if the user is authenticated
  return (
<Children member={data}  />   );
}

