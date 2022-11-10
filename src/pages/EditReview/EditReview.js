import { Textarea } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const EditReview = () => {
  const review = useLoaderData();
  useTitle('Edit Review');
  console.log(review);
  return (
    <div>
      <div className="w-3/4 mx-auto">
        <h2 className="text-2xl font-semibold">Post a <span className="text-orange-500 font-bold">Review:</span></h2>
        <form className="flex flex-col gap-4 my-3">
          <div>
            <Textarea
              name="reviewText"
              placeholder="Leave a review text..."
              required={true}
              rows={4}
            />
          </div>
          <button className="w-full py-2 bg-orange-500 text-white font-semibold rounded-md" type="submit">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditReview;