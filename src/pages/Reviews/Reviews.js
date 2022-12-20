import React, { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import Review from '../Review/Review';

const Reviews = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [postedReviews, setPostedReviews] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch('https://cloud-kitchen-assignment-server.vercel.app/reviews')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // setPostedReviews(data)
        const filteredReviews = data.filter(review => review.serviceId === id);
        setPostedReviews(filteredReviews);
        setLoading(false);
      }).catch(error => {
        console.error(error.message);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <Spinner/>
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        {
          postedReviews?.map(review => <Review
            key={review._id}
            review={review}
          ></Review>)
        }
      </div>
    </div>
  );
};

export default Reviews;