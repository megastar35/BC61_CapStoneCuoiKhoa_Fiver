import Header from '../../layout/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../layout/Footer/Footer';

const DetailsTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DetailsTemplate;
