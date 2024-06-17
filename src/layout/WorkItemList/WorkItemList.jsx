import { useDispatch, useSelector } from 'react-redux';
import WorkCard from '../../components/WorkCard/WorkCard';
import { useEffect } from 'react';
import { quanLyCongViec } from '../../services/quanLyCongViec';
import { setSearchValueResults } from '../../redux/slice/workSlice';

const WorkItemList = () => {
  const dispatch = useDispatch();
  const selectedChiTietId = useSelector(
    state => state.workList.selectedChiTietId
  );
  const results = useSelector(state => state.workList.results);

  useEffect(() => {
    quanLyCongViec
      .layCongViecTheoChiTietLoai(selectedChiTietId)
      .then(res => {
        dispatch(setSearchValueResults(res.data.content));
      })
      .catch(err => {
        console.error(err);
      });
  }, [selectedChiTietId, dispatch]);

  return (
    <div>
      <div className="my-10 grid grid-cols-4 gap-y-10 gap-x-4">
        {results.map((item, index) => {
          return console.log(item), (<WorkCard key={index} workItem={item} />);
        })}
      </div>
    </div>
  );
};

export default WorkItemList;
