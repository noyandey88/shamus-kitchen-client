import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';
import useTitle from '../../../Hooks/useTitle';
import Service from '../../Service/Service';
import { motion } from 'framer-motion';

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

  return (
    <>
      {
        loading ?
          <Spinner />
          :
          (
            <div className="mt-20 mb-4">
              <div className="text-center">
                <motion.h1
                  initial={{ y: 100 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 2, type: "spring", stiffness: 70 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold">Foods In My <span className="text-orange-500">Kitchen</span></motion.h1>
              </div>
              <div className="py-12 mx-auto sm:max-w-xl md:max-w-full lg:py-12">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                  {
                    dishServices?.map((service, i) => <Service
                      key={service._id}
                      service={service}
                      index={i}
                    ></Service>)
                  }
                </div>
                <motion.div
                  initial={{ y: 50 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 2, type: "spring", stiffness: 50 }}
                  viewport={{ once: true }}
                  className="my-4 text-center">
                  <button
                    onClick={handleNavigate} className="inline-block rounded border border-orange-500 bg-orange-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring active:text-orange-500">See All</button>
                </motion.div>
              </div>
            </div>
          )
      }
    </>
  );
};

export default Services;