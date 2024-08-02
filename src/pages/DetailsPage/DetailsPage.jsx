import { useParams } from 'react-router-dom';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import { useEffect } from 'react';
import { quanLyCongViec } from '../../services/quanLyCongViec';

const DetailsPage = () => {
  const { id } = useParams();
  useEffect(() => {
    quanLyCongViec.layChiTietCongViec(id).then(res => {
      console.log(res.data.content);
    });
  }, []);

  return (
    <div className="flex justify-center items-center mx-auto max-w-screen-xl">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default DetailsPage;
