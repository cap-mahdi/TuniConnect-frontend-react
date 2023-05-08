import React from "react";  


const ProfileImage = (props) => {

    return (
        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
        <div className="relative">
          <img
            alt="..."
            src={props.imageUrl}
            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
            style={{ maxWidth: "150px" }}
          />
        </div>
      </div>
    );
};


export default ProfileImage;