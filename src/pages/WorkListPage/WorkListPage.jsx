import CategoriesMenu from '../../components/CategoriesMenu/CategoriesMenu';
import { useSearchParams } from 'react-router-dom';
import SortTopBar from '../../components/SortTopBar/SortTopBar';
import WorkItemList from '../../layout/WorkItemList/WorkItemList';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { quanLyCongViec } from '../../services/quanLyCongViec';
import { setChiTietCongViecId } from '../../redux/slice/workSlice';

const WorkListPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query'); //giá trị query là tên của ?query ở component banner
  const totalResult = useSelector(state => state.workList.results);
  const totalItems = totalResult.length;
  const dispatch = useDispatch();

  useEffect(() => {
    if (totalResult == []) {
      quanLyCongViec
        .layDanhSachCongViecTheoTen(query)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [query]);

  useEffect(() => {
    if (query) {
      quanLyCongViec
        .layCongViecTheoChiTietLoai(query)
        .then(res => {
          console.log(res.data.content);
          dispatch(setChiTietCongViecId(res.data.content));
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [query, dispatch]);
  const items = [
    {
      key: '1',
      label: (
        <a target="_self" href="https://www.antgroup.com">
          <b>Relevance</b>
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_self" href="https://www.aliyun.com">
          <b>Newest arrivals</b>
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_self" href="https://www.aliyun.com">
          <b>Best Selling</b>
        </a>
      ),
    },
  ];
  return (
    <div className="worklist_page">
      <CategoriesMenu />
      <div className="container">
        <div className="header_search_result pt-8  ">
          <span className="text-3xl">
            Results for{''}
            <b> {totalResult ? totalResult[0].tenChiTietLoai : null}</b>
          </span>
        </div>
        <SortTopBar />

        <div className="text-gray-400 mt-4 py-2 flex justify-between">
          {totalItems > 0 ? <p>{totalItems} Results</p> : <p> 0 Result</p>}
          <div className="sort_by">
            <Dropdown menu={{ items }}>
              <a className="flex gap-2" onClick={e => e.preventDefault()}>
                Sort by
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <WorkItemList />
      </div>
    </div>
  );
};

export default WorkListPage;
