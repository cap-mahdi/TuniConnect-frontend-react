import React, { useState } from "react";
import {  UserCircleIcon } from '@heroicons/react/24/solid'
import Avatar from "../Post/Avatar";







function ProfileImage(props){
  const [selectedImage, setSelectedImage] = useState(null);
  

  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
    props.setFile(event.target.files[0]);
  };

  const handleButtonClick = () => {
    document.getElementById('imageInput').click();
  };
    return(
      <div className="col-span-full">
      <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
        Photo
      </label>
      <div className="mt-2 flex items-center gap-x-3">
        <Avatar imageUrl={selectedImage} size={50} />
        <button
          type="button"
          className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={handleButtonClick}
        >
          Change
        </button>
        <input type="file" id="imageInput" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
      </div>
    </div>
    )
}


export default ProfileImage;