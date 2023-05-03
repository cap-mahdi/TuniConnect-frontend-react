import { Link } from 'react-router-dom';

const Profile = (props) => {
  return (
    <>
      {' '}
      <h1 style={{ fontSize: '2rem' }}>Profile</h1>
      <h1 style={{ fontSize: '2rem' }}>
        -----: Go to <Link to="/"> Home</Link>
      </h1>
    </>
  );
};
export default Profile;
