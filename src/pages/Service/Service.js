import React from 'react';

const Service = ({ service }) => {
  const {name, imageUrl, price, ratings, description } = service;
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
      <img
        src={imageUrl}
        className="object-cover w-full h-64"
        alt=""
      />
      <div className="p-5 border border-t-0">
        <h2
          className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          {name}
        </h2>
        <p className="mb-2 text-gray-700">
          {description.slice(0, 100)}...
        </p>
        <button className="w-full bg-orange-500 text-white py-2 px-2 font-semibold rounded-md hover:bg-orange-600">
          Details
          {/* <HiOutlineArrowRight/> */}
        </button>
      </div>
    </div>
  );
};

export default Service;