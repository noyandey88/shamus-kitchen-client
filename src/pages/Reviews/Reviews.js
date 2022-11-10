import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = ({id}) => {
  const [postedReviews, setPostedReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.data.customerReview);
        setPostedReviews(data.data.customerReview)
    })
  }, [postedReviews])
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {
            postedReviews.map(review => <Review
              key={review.serviceId}
              review={review}
            ></Review>)
          }
        </div>
    </div>
  );
};

export default Reviews;