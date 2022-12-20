import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import useTitle from '../../Hooks/useTitle';
import Service from '../Service/Service';

const AllServices = () => {
  const [loading, setLoading] = useState(true);
  // const services = useLoaderData().data;
  const [services, setServices] = useState([]);
    // update page title
  useTitle('All Foods');

  useEffect(() => {
    setLoading(true);
    fetch('https://cloud-kitchen-assignment-server.vercel.app/services')
      .then(res => res.json())
      .then(data => {
        setServices(data.data);
        setLoading(false);
      }).catch((error) => {
        console.error(error.message);
        setLoading(false);
    })
  }, [])

  if (loading) {
    return <Spinner/>
  }

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