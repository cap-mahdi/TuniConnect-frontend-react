import React from "react";
import ProfileImage from "./ProfileImage";
import CoverImage from "./CoverImage";

function ImagesHandler(props) {
    
        return (
            <div className="border-b border-gray-900/10 pb-12 mr-4" >
            <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you share.
            </p>
  
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <ProfileImage setFile={props.imageFileSetter} />
            <CoverImage setFile={props.coverImageFileSetter}/>
            </div>
          </div>
          )
    }

export default ImagesHandler;