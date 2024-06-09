import Banner from '../../layout/Banner/Banner';
import Categories from '../../layout/Categories/Categories';
import PopularService from '../../layout/PopularService/PopularService';
import Selling from '../../layout/Selling/Selling';
import Testimonial from '../../layout/Testimonial/Testimonial';
import TrustBy from '../../layout/TrustBy/TrustBy';

const HomePage = () => {
  return (
    <div className=" ">
      <Banner />
      <TrustBy />
      <PopularService />
      <Selling />
      <Categories />
      <Testimonial />
    </div>
  );
};

export default HomePage;
