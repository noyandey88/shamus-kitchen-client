import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import AuthorReviews from '../AuthorReviews/AuthorReviews';

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  // update page title
  useTitle('My Reviews');

  useEffect(() => {
    fetch(`https://cloud-kitchen-assignment-server.vercel.app/reviews?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setReviews(data);
      })
  }, [user?.email]);

  // delete review button
  const handleDeleteReview = (id) => {
    // console.log(id);
    fetch(`https://cloud-kitchen-assignment-server.vercel.app/reviews/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deleted.deletedCount) {
          toast.success('Successfully Deleted Review');
        };
        const remaining = reviews.filter(review => review._id !== id);
        setReviews(remaining);
      })
  };

  return (
    <div>
      <div className="mt-2 mb-4">
        <h1 className="text-center text-4xl font-bold">My <span className="text-orange-500">Reviews:</span> </h1>
      </div>
      {
        reviews.length !== 0 ?
          <>
            <div className="grid grid-cols-1 gap-4 w-full p-2 lg:p-0 lg:w-3/4 mx-auto">
              {
                reviews.map(review => <AuthorReviews
                  key={review._id}
                  review={review}
                  handleDeleteReview={handleDeleteReview}
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