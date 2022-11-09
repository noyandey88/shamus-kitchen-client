import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
  const details = useLoaderData();
  const { _id, name, imageUrl, price, ratings, description } = details.data;
  console.log(details.data)
  return (
    <div>
      {/* details start */}
      <div className="text-center mt-4">
        <h1 className="text-4xl font-semibold">{name} Details</h1>
      </div>
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img src={imageUrl}
              alt=""
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <h5 className="mb-3 text-2xl font-extrabold leading-none sm:text-2xl">
              Dish Name: {name}
            </h5>
            <p className="mb-5 text-gray-800">
              {description}
            </p>
            <h4 className="text-2xl font-bold">Price: <span className="text-orange-500">{price}$</span></h4>
            <h4 className="text-2xl font-bold">Average Ratings: <span className="text-orange-500">{ratings}</span></h4>
          </div>
        </div>
      </div>
      {/* details end */}
      {/* review section start */}
      <div className="text-center mt-4">
        <h1 className="text-4xl font-semibold">Customer <span className="text-orange-500 font-bold">Reviews</span></h1>
      </div>
      <hr className="mt-4" />
      <div className="w-3/4 mx-auto">
        <h2 className="text-2xl font-semibold">Post a <span className="text-orange-500 font-bold">Review:</span></h2>
        <form className="flex flex-col gap-4 my-3">
          <div>
            <TextInput
              type="text"
              placeholder="Name"
            />
          </div>
          <div>
            <TextInput
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <Textarea
              id="comment"
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

export default ServiceDetails;