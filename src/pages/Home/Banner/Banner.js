import { Carousel } from 'flowbite-react';
import React from 'react';
import img1 from '../../../assets/banner/cooking-1.jpg';
import img2 from '../../../assets/banner/cooking-2.jpg';
import img3 from '../../../assets/banner/cooking-3.jpg';
import img4 from '../../../assets/banner/cooking-4.jpg';
import img5 from '../../../assets/banner/cooking-5.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-[32rem] 2xl:h-96 m-2 md:m-6">
      <Carousel>
        <div className='relative flex justify-center items-center'>
          <div className="carousel-img w-full">
            <img
              src={img1}
              alt="..." className='w-full'
            />
          </div>
          <div className='absolute'>
            <h2 className='text-white text-8xl font-bold uppercase'>
              Enjoy Your Food At <br />
              <span className='text-orange-400'>Shamu's Kitchen</span></h2>
          </div>
        </div>
        <div className='relative flex justify-center items-center'>
          <div className="carousel-img w-full">
            <img
              src={img2}
              alt="..." className='w-full'
            />
          </div>
          <div className='absolute'>
            <h2 className='text-white text-8xl font-bold uppercase'>
              Enjoy Your Food At <br />
              <span className='text-orange-400'>Shamu's Kitchen</span></h2>
          </div>
        </div>
        <div className='relative flex justify-center items-center'>
          <div className="carousel-img w-full">
            <img
              src={img3}
              alt="..." className='w-full'
            />
          </div>
          <div className='absolute'>
            <h2 className='text-white text-8xl font-bold uppercase'>
              Enjoy Your Food At <br />
              <span className='text-orange-400'>Shamu's Kitchen</span></h2>
          </div>
        </div>
        <div className='relative flex justify-center items-center'>
          <div className="carousel-img w-full">
            <img
              src={img4}
              alt="..." className='w-full'
            />
          </div>
          <div className='absolute'>
            <h2 className='text-white text-8xl font-bold uppercase'>
              Enjoy Your Food At <br />
              <span className='text-orange-400'>Shamu's Kitchen</span></h2>
          </div>
        </div>
        <div className='relative flex justify-center items-center'>
          <div className="carousel-img w-full">
            <img
              src={img5}
              alt="..." className='w-full'
            />
          </div>
          <div className='absolute'>
            <h2 className='text-white text-8xl font-bold uppercase'>
              Enjoy Your Food At <br />
              <span className='text-orange-400'>Shamu's Kitchen</span></h2>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;