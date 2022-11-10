import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import useTitle from '../../Hooks/useTitle';

const AuthorReviews = ({ review, handleDeleteReview }) => {

  const { _id, reviewText, postedOn, authorName, authorImage } = review;
  // update page title
  useTitle('Author Reviews');

  return (
    <div className="border-2 border-orange-100 rounded-md flex items-center p-4 flex-col lg:flex-row justify-between gap-4 shadow-md">
      <div>
        <div className="flex items-center gap-2">
          {
            authorImage ?
              <img className="w-8 h-8 rounded-full" src={authorImage} alt="authorImage" />
              :
              <FaUserCircle className="w-12 h-12 rounded-full" />
          }
          <h5 className="text-xs">Posted By <span className="font-bold">{authorName}</span></h5>
          <p className="text-xs">Posted on: <span className="font-semibold text-gray-500">{new Date(postedOn).toLocaleString()}</span></p>
        </div>
        <p className="text-xs lg:text-xl font-medium">{reviewText}</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="px-4 py-1 bg-orange-500 text-white rounded-md font-semibold">Edit</button>
        <button onClick={()=> handleDeleteReview(_id)} className="px-4 py-1 bg-orange-500 text-white rounded-md font-semibold">Delete</button>
      </div>
    </div>
  );
};

export default AuthorReviews;