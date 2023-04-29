import { Link } from "react-router-dom";

const Profile = (props) => {
  return (
    <>
      {" "}
      <h1>Profile</h1>
      <h1>
        Go to <Link to="/"> Home</Link>
      </h1>
    </>
  );
};
export default Profile;
