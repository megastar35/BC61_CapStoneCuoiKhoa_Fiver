import React from 'react';
import Header from '../../layout/Header/Header';
import { Outlet } from 'react-router-dom';

const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default HomeTemplate;
