import { deleteData, getData, postData, putData } from '../../api/utilities';

//send a friend request
export async function sendFriendRequests(sender  ,receiver) {
    return getData(`/member/get/friend/request/add`)
}

//reply to a friend request
export async function editFriendRequests(data) {
    return postData(`/friend/request/edit` , data)
}

//get the friend requests
export async function getFriendRequests(memberId){
    return getData(`/member/get/friend/request/${memberId}`)
}
 