import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { HiOutlineArrowRight } from "react-icons/hi";
import Service from '../../Service/Service';

const Services = () => {
  const [dishServices, setDishServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => {
        console.log(data.data);
        setDishServices(data.data)
      })
  }, [])
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-orange-500 uppercase">My Kitchen Services</h1>
      </div>
      <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {
            dishServices.map(service => <Service
              key={service._id}
              service={service}
            ></Service>)
          }
        </div>
        <div className="my-4 text-center">
          <button className="py-2 px-4 rounded-md text-white bg-orange-500 font-bold">See All</button>
        </div>
      </div>
    </div>
  );
};

export default Services;