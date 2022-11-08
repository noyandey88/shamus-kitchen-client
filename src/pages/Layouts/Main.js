import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterPage from '../Shared/FooterPage/FooterPage';
import Header from '../Shared/Header/Header';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <FooterPage></FooterPage>
    </div>
  );
};

export default Main;