import React from 'react';
import { FaUserCircle } from "react-icons/fa";

const Review = ({ review }) => {
  console.log(review);
  const { serviceId, reviewText, postedOn, authorName, authorImage, authorEmail } = review;
  return (
    <div className="border-2 border-orange-300 rounded-md flex items-center p-4">
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
        <p className="text-xl font-medium">{reviewText}</p>
      </div>
    </div>
  );
};

export default Review;