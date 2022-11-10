import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import DownloadApp from '../DownloadApp/DownloadApp';
import Services from '../Services/Services';
import TopReviewed from '../TopReviewed/TopReviewed';

const Home = () => {
  
  useTitle('Home');

  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <TopReviewed></TopReviewed>
      <DownloadApp></DownloadApp>
    </div>
  );
};

export default Home;