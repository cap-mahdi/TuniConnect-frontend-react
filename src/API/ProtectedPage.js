import AuthController from './Accounts/AuthController';
import { Navigate } from 'react-router-dom';
import { redirect } from 'react-router';
import { useEffect, useState } from 'react';
export default function ProtectedPage(props) {
  const [auth, setAuth] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await AuthController.getMemberByToken();
      setAuth(res.auth);
      const member = JSON.parse(res.data);
      setData(member);
    })();
  }, []);
  useEffect(() => {}, [auth]);

  if (auth == null) {
    // Redirect to the sign-up page if the user is not authenticated
    return null;
  } else if (auth == false) {
    return <Navigate to="/signin" />;
  }
  const Children = props.component;
  // Render the protected page if the user is authenticated
  return <Children member={data} />;
}
