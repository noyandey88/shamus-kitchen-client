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
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
            <h4 className="text 2xl font-semibold">Price: {price}$</h4>
            <h4 className="text 2xl font-semibold">Average Ratings: {ratings}</h4>
          </div>
        </div>
      </div>
      {/* details end */}

    </div>
  );
};

export default ServiceDetails;