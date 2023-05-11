import { Link } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import SideBarLeft from '../Components/SideBar/SideBarLeft';
import SideBarRight from '../Components/SideBar/SideBarRight';

import SideBarLeftData from './Data/Data';

import styles from './Main.module.css';
import Profile from '../Components/Profile/Profile';
import { useParams } from 'react-router-dom';
import { getMember } from '../API/Accounts/accountsController';
import { fetchData, fetchDataWithArgs } from '../API/utilities';
import { useEffect, useState } from 'react';
import { set } from 'date-fns';
import { getPost, getUserPostsPaginated } from '../API/Posts/PostController';
import ListPost from '../Components/ListPost';
import Spin from '../Components/Spin';
import PostInput from '../Components/PostInput/PostInput';
const ProfilePage = (props) => {
  const { id } = useParams();
  const [ID,setID] = useState("profile id ", id);
  console.log("profile page props" , props)
  const [posts, setPosts] = useState(null);
  const [postExistence,setPostExistence] = useState("waiting");
  const member = props.member;
  const currentUserId= member.id;
  const memberFullName = member.firstName + " " + member.lastName;
  useEffect( () => {
    fetchDataWithArgs(getMember, setData,ID);
    fetchData(()=>getUserPostsPaginated(ID,0), setPosts);
  }, []);

  console.log("current user ",currentUserId , " id ",ID);
  useEffect(() => {
       if(postExistence == "waiting" && posts != null){
        if(posts.length != 0){
          setPostExistence("exist")
        }else{
          setPostExistence("doNotExist")
        }
       }
   }, [posts]);

   const [data, setData] = useState(null);

  useEffect(() => {
    console.log("data sent is  ", data);
  }, [  data]);

  // async function  regetPosts(){
  //   setPosts(null);
  //   await fetchData(getPostTimeline, setPosts);
  // }

  const [offset, setOffset] = useState(5);

  async function showMore(){
    setIsShowing(true);

    await fetchData(()=>getUserPostsPaginated(ID,offset), (newPosts)=> setPosts((old)=>{
      if(newPosts.length < 5 )
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

          <Profile member= {props.member} setPosts={setPosts} data={data} setData={setData} setID={setID} handleChangeOnProfile={setData} profileId={id} />
          {ID == currentUserId ? <PostInput currentUserId={currentUserId} addPost={addPost} /> : null }
          { postExistence=="doNotExist" ? <h1 style={{textAlign:'center'}}>No Availaible posts</h1> :posts ? <ListPost isShowing={isShowing} onClick={showMore} posts={posts} currentUserId={currentUserId}  deletePost={deletePost} updatePost={updatePost} memberFullName={memberFullName}  />: <Spin /> }


    </>
  );
};
export default ProfilePage;
