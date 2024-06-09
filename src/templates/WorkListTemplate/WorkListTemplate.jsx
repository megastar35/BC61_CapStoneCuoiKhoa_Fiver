import Header from '../../layout/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../layout/Footer/Footer';

const WorkListTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default WorkListTemplate;
