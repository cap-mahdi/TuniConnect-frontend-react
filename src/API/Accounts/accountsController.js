import axios from 'axios';
import { getData, postData } from '../utilities';



export async function uploadImage(idPerson,file,type) {
  const formData = new FormData();
  formData.append(type, file);
  return postData('/person/upload/'+idPerson, formData);
}


export async function signUp(inter,coverImageFile,imageFile) {
  const data=new FormData();
  data.append('firstName',inter.firstName);
  data.append('lastName',inter.lastName);
  data.append('email',inter.email);
  data.append('password',inter.password);
  data.append('gender',inter.gender);
  data.append('country',inter.country);
  data.append('birthday',inter.birthday);
  data.append('phone',inter.phone);
  data.append('street',inter.street);
  data.append('city',inter.city);
  data.append('zipCode',inter.zipCode);
  data.append('state',inter.state);
  data.append('profile',imageFile);
  data.append('cover',coverImageFile);

  return postData('/member/register', data).then((response) => {         
    console.log(response);}
    ).catch((error) => {
      console.log(error);
    }
    );
}



export async function getMember(id) {
  return getData('/member/'+id);
}