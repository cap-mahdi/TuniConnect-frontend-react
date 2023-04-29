import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <h1>Home</h1>
      <h1>
        {" "}
        Go to <Link to="/profile"> Profile</Link>
      </h1>
    </>
  );
};
export default Home;
