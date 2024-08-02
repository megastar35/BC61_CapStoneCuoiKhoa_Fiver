import { useSelector } from 'react-redux';
import WorkCard from '../../components/WorkCard/WorkCard';

const WorkItemList = () => {
  const searchResults = useSelector(state => state.work.searchResults);
  const chiTietResults = useSelector(state => state.work.chiTietResults);
  const isSearchingByName = useSelector(state => state.work.isSearchingByName);
  const results = isSearchingByName ? searchResults : chiTietResults;

  return (
    <div>
      <div className="my-10 grid grid-cols-4 gap-y-10 gap-x-4">
        {results.map((item, index) => {
          return <WorkCard key={index} workItem={item} />;
        })}
      </div>
    </div>
  );
};

export default WorkItemList;
