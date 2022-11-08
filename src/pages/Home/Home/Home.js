import React from 'react';
import Banner from '../Banner/Banner';
import DownloadApp from '../DownloadApp/DownloadApp';
import Services from '../Services/Services';
import TopReviewed from '../TopReviewed/TopReviewed';

const Home = () => {
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