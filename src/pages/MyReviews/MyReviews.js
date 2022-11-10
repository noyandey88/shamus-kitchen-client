import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AuthorReviews from '../AuthorReviews/AuthorReviews';

const MyReviews = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          logOutUser()
            .then(() => {

            })
            .catch((error) => {
              console.log(error)
            })
        }
        return res.json()
      })
      .then(data => {
        console.log(data);
        setReviews(data);
      })
  }, [user?.email])

  // delete review button
  const handleDeleteReview = (id) => {
    // console.log(id);
    fetch(`http://localhost:5000/reviews/${id}`, {
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

  }

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