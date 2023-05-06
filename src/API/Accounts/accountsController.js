import axios from 'axios';
import { getData, postData } from '../utilities';

export async function getMember() {
  return getData('/member/');
}

export async function uploadImage(idPerson,file,type) {
  const formData = new FormData();
  formData.append(type, file);
  return postData('/person/upload/'+idPerson, formData);
}


export async function signUp(data) {
  return postData('/person/signup', data);
}
