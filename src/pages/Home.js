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
  const [postExistence,setPostExistence] = useState("waiting");
  const member = props.member;
  const currentUserId= member.id;
  const memberFullName = member.firstName + " " + member.lastName;
  console.log(currentUserId);
  useEffect( () => {
    
    fetchData(()=>getPostPaginated(currentUserId,0), setPosts);
  }, []);


  useEffect(() => {
       if(postExistence == "waiting" && posts != null){
        if(posts.length != 0){
          console.log("3andou post");
          setPostExistence("exist")
        }else{
          setPostExistence("doNotExist")
        }
       }
   }, [posts]);

  // async function  regetPosts(){
  //   setPosts(null);
  //   await fetchData(getPostTimeline, setPosts);
  // }

  const [offset, setOffset] = useState(5);

  async function showMore(){
    setIsShowing(true);

    await fetchData(()=>getPostPaginated(currentUserId,offset), (newPosts)=> setPosts((old)=>{
      console.log("length is " , newPosts.length);
      if(newPosts.length < 5)
          {
            setOffset(0)
          }
      else
          setOffset((oldOffset) => oldOffset + 5)
       return [...old,...newPosts]
      }));
    setIsShowing(false);
  }
  
  const [isShowing,setIsShowing]=useState(false);

  function deletePost(postId){
    setPosts((oldPosts)=>{
      const newPosts = oldPosts.filter((currentPost)=>{
        if(currentPost.id != postId)
          return currentPost
      })
      return newPosts
    })
}
 function updatePost(updatedPost){
  setPosts( (oldPosts)=> {
    const updatedPosts = oldPosts.map( (currentPost)=> {
      if(currentPost.id!=updatedPost.id){
        return currentPost 
      } 
      else {
        return updatedPost} 
    })

    console.log("updated posts ",updatedPosts);
    return updatedPosts;
    })
}
async function addPost(postId){
  const res = await getPost(postId);
  if(postExistence==='doNotExist')
    setPostExistence("exist")
  setPosts((oldPosts)=>[res.data,...oldPosts])
}

  return (
    <>
     
      <PostInput  currentUserId={currentUserId} addPost={addPost} />

      { postExistence=="doNotExist" ? <h1 style={{textAlign:'center'}}>No Availaible posts, be the first in your friend to post</h1> :posts ? <ListPost isShowing={isShowing} onClick={showMore} posts={posts} currentUserId={currentUserId}  deletePost={deletePost} updatePost={updatePost} memberFullName={memberFullName}  />: <Spin /> }
      
    </>
  );
};
export default Home;