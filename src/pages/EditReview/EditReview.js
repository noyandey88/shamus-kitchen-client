import { Textarea } from 'flowbite-react';
import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const EditReview = () => {
  const review = useLoaderData().data;
  const { _id } = review;

  useTitle('Edit Review');

  const handleUpdateReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedText = {
      reviewText: e.target.reviewText.value
    }
    console.log(updatedText);

    fetch(`https://cloud-kitchen-assignment-server.vercel.app/reviews/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedText)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.updated);
        if (data.updated.modifiedCount) {
          toast.success('Review Updated');
          form.reset();
        }
      });
  }
  return (
    <div>
      <div className="w-3/4 mx-auto">
        <h2 className="text-2xl font-semibold">Post a <span className="text-orange-500 font-bold">Review:</span></h2>
        <form onSubmit={handleUpdateReview} className="flex flex-col gap-4 my-3">
          <div>
            <Textarea
              defaultValue={review.reviewText}
              name="reviewText"
              placeholder="Leave a review text..."
              required={true}
              rows={4}
            />
          </div>
          <button className="w-full py-2 bg-orange-500 text-white font-semibold rounded-md" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditReview;