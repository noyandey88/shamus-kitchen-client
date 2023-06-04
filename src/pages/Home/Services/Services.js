import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';
import useTitle from '../../../Hooks/useTitle';
import Service from '../../Service/Service';

const Services = () => {
  const [loading, setLoading] = useState(true);
  const [dishServices, setDishServices] = useState([]);
  const navigate = useNavigate();
  const size = 3;

  // update page title
  useTitle('Foods');

  useEffect(() => {
    setLoading(true);
    fetch(`https://cloud-kitchen-assignment-server.vercel.app/food/services?size=${size}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setDishServices(data.data);
        setLoading(false);
      }).catch(error => {
        console.error(error.message);
        setLoading(false);
      })
  }, []);

  const handleNavigate = () => {
    navigate('/services')
  };

  // if (loading) {
  //   return <Spinner />
  // };

  return (
    loading ?
      <Spinner />
      :
      <>
        <div className="mt-20 mb-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Foods In My <span className="text-orange-500">Kitchen</span></h1>
          </div>
          <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
              {
                dishServices.map(service => <Service
                  key={service._id}
                  service={service}
                ></Service>)
              }
            </div>
            <div className="my-4 text-center">
              <button
                onClick={handleNavigate} className="py-2 px-4 rounded-md text-white bg-orange-500 font-bold">See All</button>
            </div>
          </div>
        </div>
      </>
  );
};

export default Services;