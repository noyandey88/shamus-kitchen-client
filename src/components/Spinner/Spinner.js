import React from 'react';
import loadingSpinner from '../../assets/spinner/spoon-loading-1.gif';

const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <img src={loadingSpinner} alt="spinner" />
    </div>
  );
};

export default Spinner;