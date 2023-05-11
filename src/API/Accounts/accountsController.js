import axios from 'axios';
import { getData, postData } from '../utilities';

export async function uploadImage(idPerson, file, type) {
  const formData = new FormData();
  formData.append(type, file);
  return postData('/person/upload/' + idPerson, formData);
}

export async function signUp(inter, coverImageFile, imageFile) {
  const data = new FormData();
  data.append('firstName', inter.firstName);
  data.append('lastName', inter.lastName);
  data.append('email', inter.email);
  data.append('password', inter.password);
  data.append('gender', inter.gender);
  data.append('country', inter.country);
  data.append('birthday', inter.birthday);
  data.append('phone', inter.phone);
  data.append('street', inter.street);
  data.append('city', inter.city);
  data.append('zipCode', inter.zipCode);
  data.append('state', inter.state);
  data.append('profile', imageFile);
  data.append('cover', coverImageFile);

  return postData('/member/register', data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getMember(id) {
  return getData('/member/' + id);
}
export async function getFriends(id) {
  console.log('here');
  return getData('/member/get/friends/' + id);
}

//get member number of comments
export async function getMemberComments(id) {
  return getData('/member/get/number/comments/' + id);
}

//get member number of likes
export async function getMemberLikes(id) {
  return getData('/member/get/number/likes/' + id);
}

//get member number of shares
export async function getMemberShares(id) {
  return getData('/member/get/number/shares/' + id);
}

//get member number of photos
export async function getMemberPhotos(id) {
  return getData('/member/get/number/photos/' + id);
}

//search member 
export async function searchMember(search) {
  return getData('/member/search/' + search);
}
