import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';

const AllServices = () => {
  const services = useLoaderData().data;
  console.log(services)
  return (
    <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {
          services.map(service => <Service
            key={service._id}
            service={service}
          ></Service>)
        }
      </div>
    </div>
  );
};

export default AllServices;