import axios from 'axios';
import { getData, postData } from '../utilities';
const baseUrl = 'http://localhost:8000';


class AuthController {
    static #isAuth = false;



static isAuthenticated() {
        return this.#isAuth;
    }
    
static async  signUp(inter,coverImageFile,imageFile){
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

    return  await postData('/api/register', data)
    
}

    static async  SingIn(credentails){

        return await axios.post(baseUrl + '/api/login',credentails)
            

    }

    static async  getMemberByToken(){
        const response= await getData('/get-current-user');
        if(response?.data?.token){
            this.#isAuth = true;
            return response.data;
        }
        else{
            this.#isAuth = false;
            return null;
        }

    }

    static  getToken(){
        //get token from local storage
        return localStorage.getItem('token') || "";

    }

    static  setToken(token){
        //set token to local storage
        if(token){
            this.#isAuth = true;
            localStorage.setItem('token',token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${AuthController.getToken()}`;
        }


    }

    static  removeToken(){
        //remove token from local storage
        localStorage.removeItem('token');
        this.#isAuth = false;

    }
}

export default AuthController;