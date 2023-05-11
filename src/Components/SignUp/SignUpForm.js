import React from "react";
import InputField from "./InputField";
import SelectGender from "./SelectGender";
import styles from './SignUp.module.css';
import SelectCountry from "./SelectCuntry";
import ImagesHandler from "./ImagesHandler";
import { useState } from "react";
import AuthController from "../../API/Accounts/AuthController";
import {Routes, Route, useNavigate, Await} from 'react-router-dom';
import { set } from "date-fns";

function SignUpForm() {

  //router
  const navigate = useNavigate();
//variables
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState(""); 
const [password, setPassword] = useState("");
const [gender, setGender] = useState("male");
const [country, setCountry] = useState("Tunisia")
const [birthDate, setBirthDate] = useState("");
const [imageFile, setImageFile] = useState(null);
const [coverImageFile, setCoverImageFile] = useState(null);
const [phoneNumber, setPhoneNumber] = useState("");
const [street, setStreet] = useState("");
const [city, setCity] = useState("");   
const [zipCode, setZipCode] = useState("");
const [state, setState] = useState("");

const [error, setError] = useState("");





const handelSubmit = async (e) => {
    e.preventDefault();
    const data={
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password,
      gender:gender,
      country:country,
      birthday:birthDate,
      phone:phoneNumber,
      street:street,
      city:city,
      zipCode:zipCode,
      state:state,

    }


    const res = await AuthController.signUp(data,coverImageFile,imageFile);
    
    if(res?.status==404){
      setError(res.msg);
      setPassword("");
      if(res.msg=="Email already exists"){
        setEmail("");
      }
      setTimeout(() => {
        setError("");
      }
      , 8000);
    }
    if(res.data.token){
      AuthController.setToken(res.data.token);
      navigate('/');
    }else{
      navigate('/signup');
    }
  }

    const cancelBtnHandler=()=>{
      navigate('/')
    }

    return (
        <div className="px-20 py-2 border-2 border-teal-500 rounded-lg bg-white"> 
        
<form onSubmit={handelSubmit} 
// className={`${styles['signUp-form']}`}
>
      <div className="flex" >
        <ImagesHandler coverImageFileSetter={setCoverImageFile} imageFileSetter={setImageFile} />

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <InputField width="sm:col-span-3" value={firstName} onChange={setFirstName}  label="First name" name="first-name" type="text" autoComplete="given-name" />
            <InputField width="sm:col-span-3" value={lastName} onChange={setLastName} label="Last name" name="last-name" type="text" autoComplete="family-name" />
            <InputField width="sm:col-span-4" value={email} onChange={setEmail} label="Email address" name="Email" type="email" />
            <InputField width="sm:col-span-4" value={password} onChange={setPassword} label="Password" name="Password" type="password" />
            <SelectGender value={gender} onChange={setGender} width="sm:col-span-4"/> 
            <InputField value={birthDate} onChange={setBirthDate} width="sm:col-span-2" label="Date of birth" type="date" name="date-of-birth" />
            <SelectCountry value={country} onChange={setCountry} width="sm:col-span-2" />
            <InputField value={street} onChange={setStreet} width="col-span-full" label="Street address" type="text" name="Street" />
            <InputField value={phoneNumber} onChange={setPhoneNumber} width="col-span-full" label="phone number" type="text" name="phone" />
            <InputField value={city} onChange={setCity} width="sm:col-span-2 sm:col-start-1" label="City" type="text" name="City" />
            <InputField value={state} onChange={setState} width="sm:col-span-2" label="State / Province" type="text" name="State" />
            <InputField value={zipCode} onChange={setZipCode} width="sm:col-span-2" label="ZIP / Postal" type="text" name="ZIP" />

            {
              error!='' && <h6 className="w-max text-red-500">{error}</h6>
            }
          </div>
        </div>


      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={cancelBtnHandler}>
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>

    </form>

       
    
    </div>
    )

}


export default SignUpForm;