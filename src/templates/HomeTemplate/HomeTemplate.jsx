import Header from '../../layout/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../layout/Footer/Footer';
import { createContext, useState } from 'react';

export const BannerHeightContext = createContext(0);

const HomeTemplate = () => {
  const [bannerHeight, setBannerHeight] = useState(0);
  return (
    <BannerHeightContext.Provider value={bannerHeight}>
      <div>
        <Header />
        <Outlet context={{ setBannerHeight }} />
        <Footer />
      </div>
    </BannerHeightContext.Provider>
  );
};

export default HomeTemplate;
