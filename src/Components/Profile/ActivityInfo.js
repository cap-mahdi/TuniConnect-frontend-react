import React, { useEffect } from "react";


const ActivityInfo = (props) => {


    return (
        <div className="flex justify-center py-4 lg:pt-4 pt-8">
        <div className="mr-4 p-3 text-center">
          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
            {props.nbrLikes!= null ? props.nbrLikes : '--'}
          </span>
          <span className="text-sm text-gray-500">Likes</span>
        </div>
        <div className="mr-4 p-3 text-center">
          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
            {props.nbrPhotos!= null ? props.nbrPhotos : '--'}
          </span>
          <span className="text-sm text-gray-500">Photos</span>
        </div>
        <div className="lg:mr-4 p-3 text-center">
          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
            {props.nbrComments!= null ? props.nbrComments : '--'}
          </span>
          <span className="text-sm text-gray-500">Comments</span>
        </div>
        <div className="lg:mr-4 p-3 text-center">
          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
            {props.nbShares!= null ? props.nbShares : '--'}
          </span>
          <span className="text-sm text-gray-500">Shares</span>
        </div>
      </div>
    );
};


export default ActivityInfo;