import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import DownloadApp from '../DownloadApp/DownloadApp';
import Services from '../Services/Services';
import TopReviewed from '../TopReviewed/TopReviewed';
import Subscribe from '../../../components/subscribe/Subscribe';
import Faq from '../../../components/faq/Faq';
import Featured from '../../../components/featured/Featured';
import Review from '../../../components/review/Review';
import Ingredients from '../../../components/ingredients/Ingredients';
import KitchenChiefs from '../../../components/kitchenChiefs/KitchenChiefs';

const Home = () => {
  useTitle('Home');

  return (
    <div className="overflow-hidden">
      <Banner />
      <Services />
      <TopReviewed />
      <Ingredients />
      <Featured />
      <Review />
      <KitchenChiefs />
      <Faq />
      <DownloadApp />
      <Subscribe />
    </div>
  );
};

export default Home;