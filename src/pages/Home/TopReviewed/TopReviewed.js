import React from 'react';

const TopReviewed = () => {
  return (
    <div className="pb-12 mx-auto sm:max-w-xl md:max-w-full lg:pb-20">
      <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans font-bold leading-none tracking-tight sm:text-3xl md:mx-auto text-3xl">
          <span className="relative inline-block">
            <span className="relative">Top</span>
          </span>{' '}
          Reviewed
          {' '}
          <span className="text-orange-500">Recipes</span>
        </h2>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
        <img
          className="object-cover w-full h-56 rounded shadow-lg"
          src="https://i.ibb.co/TbPHBRG/pexels-antony-trivet-12842265.jpg"
          alt=""
        />
        <img
          className="object-cover w-full h-56 rounded shadow-lg"
          src="https://i.ibb.co/NZzWxQ8/salmon-fish.jpg"
          alt=""
        />
        <img
          className="object-cover w-full h-56 rounded shadow-lg"
          src="https://i.ibb.co/0JR326j/pexels-shourav-sheikh-11170284.jpg"
          alt=""
        />
        <img
          className="object-cover w-full h-56 rounded shadow-lg"
          src="https://i.ibb.co/qdJjxQ4/pexels-prabal-pratap-singh-9609835.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default TopReviewed;