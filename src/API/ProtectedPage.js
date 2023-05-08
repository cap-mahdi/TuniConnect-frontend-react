
import AuthController from './Accounts/AuthController';
import { Navigate } from 'react-router-dom';
import { redirect } from 'react-router';
export default function ProtectedPage(props) {
  
  console.log(AuthController.isAuthenticated())
  if (!AuthController.isAuthenticated()) {
    // Redirect to the sign-up page if the user is not authenticated
    
    return <Navigate to="/signin" />;
  }

  // Render the protected page if the user is authenticated
  return (
    props.children
  );
}