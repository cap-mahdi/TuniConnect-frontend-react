import { Link } from 'react-router-dom';
// import { XMarkIcon } from '@heroicons/react/20/solid';
import Post from '../Components/Post/Post';
import { getMember } from '../API/Accounts/accountsController';
import { getPost, getPostPaginated, getPostTimeline } from '../API/Posts/PostController';
import react,{ useEffect, useState } from 'react';
import { fetchData } from '../API/utilities';
import Spin from '../Components/Spin';
import PostInput from '../Components/PostInput/PostInput';
import ListPost from '../Components/ListPost';
const Home = (props) => {
  const [posts, setPosts] = useState(null);
  const currentUserId= 1;
  useEffect( () => {
    fetchData(()=>getPostPaginated(currentUserId,0), setPosts);
  }, []);

  // useEffect(() => {
       
  //  }, [posts]);

  async function  regetPosts(){
    setPosts(null);
    await fetchData(getPostTimeline, setPosts);
  }

  const [offset, setOffset] = useState(5);
  async function showMore(){
    setIsShowing(true);
    await fetchData(()=>getPostPaginated(currentUserId,offset), (newPosts)=> setPosts((old)=>{ console.log(newPosts); return [...old,...newPosts]}));
    setOffset((old)=> old+5);
    setIsShowing(false);
  }
  
  const [isShowing,setIsShowing]=useState(false);
  const [isTerminated,setIsTerminated]=useState(false);

  if(posts==null){
    return <Spin/>
  }
  return (
    <>
     
      <PostInput regetPosts={regetPosts} />
      <ListPost isShowing={isShowing} onClick={showMore} posts={posts} userId={currentUserId} regetPosts={regetPosts} />
      
      


    </>
  );
};
export default Home;