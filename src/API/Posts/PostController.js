import { deleteData, getData, postData, putData } from '../utilities';

export async function getPostTimeline() {
  return await getData('/shared/post/get/all/2');
}

export async function likeDislikePost(postId, userId) {
  return postData(`/shared/post/like/${postId}`, { "member_id": userId });
}

export async function getPost(postId) {
  return getData(`/shared/post/get/${postId}`);
}

export async function addComment(postId, userId, text) {
  return postData(`/shared/post/comment/${postId}`, { "member_id": userId, "text": text });
}

export async function getComments(postId) {
  return getData(`/comment/get/all/${postId}`);
}

//share a post
export async function sharePost(postId, userId) {
  return postData(`/shared/post/share/${postId}`, { "member_id": userId });
}


//add a post
export async function addPost(data) {
  return postData(`/post/add`, data);
}

//delete a post
export async function deletePost(postId) {
  return deleteData(`/shared/post/delete/${postId}`);
}

//update a post
export async function updatePost(postId, data) {
  return putData(`/shared/post/update/${postId}`, data);
}

//get post paginated
export async function getPostPaginated(userId,pageNumber,limit = 5) {
  return getData(`/shared/post/get/all/paginated/${userId}?offset=${pageNumber}&limit=${limit}`);
}
//count posts
export async function countPosts(userId) {
  return getData(`/shared/post/count/all/${userId}`);
}

//get comment by id
export async function getComment(id){
  return getData(`/comment/get/${id}`);
}

//get the owner of the post
export async function getPostOwner(postId){
  const resp= await getData(`/shared/post/get/${postId}`)
  const postData=resp["data"]
  return postData["sharer"]["id"]
}


//add notification
export async function addNotification(data){
  return postData(`/notifications/post_notification/add` , data)
}


//get all the member's notifications
export async function getNotifications(memberId){
  return getData(`/member/get/notification/${memberId}`)
}


//delete notification

//get number likes of post 
export async function getPostLikes(postId){
  return getData('/shared/post/get/likes/'+postId) 
}

//get unmber comments of post 
export async function getPostComments(postId){
  return getData('/shared/post/get/comments/'+postId)
}

//get user posts paginated
export async function getUserPostsPaginated(userId,pageNumber,limit = 5) {
  return getData(`/shared/post/get/user/${userId}?offset=${pageNumber}&limit=${limit}`);
}