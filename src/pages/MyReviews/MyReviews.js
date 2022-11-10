import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AuthorReviews from '../AuthorReviews/AuthorReviews';

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setReviews(data);
      })
  }, [user?.email])

  return (
    <div>
      <div className="mt-2 mb-4">
        <h1 className="text-center text-4xl font-bold">My <span className="text-orange-500">Reviews:</span> </h1>
      </div>
      {
        reviews.length !== 0  ?
          <>
            <div className="grid grid-cols-1 gap-4 w-3/4 mx-auto">
              {
                reviews.map(review => <AuthorReviews
                  key={review._id}
                  review={review}
                ></AuthorReviews>)
              }
            </div>
          </>
          :
          <div className="text-center">
            <h2 className="text-2xl font-semibold">No <span className="text-orange-500 font-bold">reviews</span> were added</h2>
          </div>
        }
    </div>
  );
};

export default MyReviews;