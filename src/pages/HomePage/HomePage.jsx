import { useEffect, useRef } from 'react';
import Banner from '../../layout/Banner/Banner';
import Categories from '../../layout/Categories/Categories';
import PopularService from '../../layout/PopularService/PopularService';
import Selling from '../../layout/Selling/Selling';
import Testimonial from '../../layout/Testimonial/Testimonial';
import { useOutletContext } from 'react-router-dom';

const HomePage = () => {
  const bannerRef = useRef(null);
  const { setBannerHeight } = useOutletContext();
  useEffect(() => {
    if (bannerRef.current) {
      // console.log(bannerRef.current);
      setBannerHeight(bannerRef.current.clientHeight);
    }
  }, [bannerRef, setBannerHeight]);

  return (
    <div>
      <div className="top_blank h-32"></div>
      <div ref={bannerRef}>
        <Banner />
      </div>
      <PopularService />
      <Selling />
      <Categories />
      <Testimonial />
    </div>
  );
};

export default HomePage;
