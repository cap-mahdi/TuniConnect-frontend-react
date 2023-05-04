import { Link } from 'react-router-dom';
// import { XMarkIcon } from '@heroicons/react/20/solid';
import Post from '../Components/Post/Post';
const Home = (props) => {
  return (
    <>
      {/* <h1 style={{ fontSize: '2rem' }}>Home</h1>
      <h1 style={{ fontSize: '2rem' }}>
        {' '}
        -----: Go to <Link to="/profile"> Profile</Link>
      </h1> */}
      <Post /> 
      <Post /> 
      <Post /> 
      <Post /> 
    </>
  );
};
export default Home;
