import React from 'react';

const DownloadApp = () => {
  return (
    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-10">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              Shamus's Kitchen is also available in <span className="font-bold text-orange-500">Mobile App</span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg">Download Shamu's Kitchen App from Google play store or Apple app store to get services easily.</p>
          </div>
          <div className="flex items-center space-x-3">
            <a href="https://www.apple.com/app-store/" className="w-32 transition duration-300 hover:shadow-lg">
              <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
            </a>
            <a href="https://play.google.com/store/apps" className="w-32 transition duration-300 hover:shadow-lg">
              <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-full">
            <img className="object-cover w-full h-full shadow-lg rounded-sm" src="https://i.ibb.co/0ZqKBPL/abillion-b-MTl6u-FMONg-unsplash.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;