import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";

import Button from "./Components/UI/Buttons/Button";
import Post from "./Components/Post/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

function App() {
  return (
    <>
      {" "}
      <h1>Doesn't change with route</h1>
      <Button></Button>
      <RouterProvider router={router} />
      <Post />
    </>
  );
}

export default App;
