import { Dropdown, Menu } from 'antd';
import './workTypeGroupList.scss';
import { quanLyCongViec } from '../../services/quanLyCongViec';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setChiTietCongViecId } from '../../redux/slice/workSlice';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { path } from '../../common/path';
const WorkTypeGroupList = ({ loaiCongViec, dsNhomChiTietLoai }) => {
  // const [selectedChiTietId, setSelectedChiTietId] = useState(null);
  // const [workItems, setWorkItems] = useState([]);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleClick = (maChiTietLoai, tenChiTietLoai) => {
    searchParams.set('query', tenChiTietLoai);
    
    navigate(
      {
        pathname: path.workList,
        search: searchParams.toString(),
      },
      { replace: true }
    );
  };
  // useEffect(() => {
  //   if (selectedChiTietId) {
  //     quanLyCongViec
  //       .layCongViecTheoChiTietLoai(selectedChiTietId)
  //       .then(res => {
  //         console.log(res);
  //         // setWorkItems(res.data);
  //       })
  //       .catch(err => {
  //         console.error(err);
  //       });
  //   }
  // }, [selectedChiTietId]);

  if (dsNhomChiTietLoai.length === 0) {
    return null;
  }

  const menu = (
    <Menu key={loaiCongViec.id}>
      {dsNhomChiTietLoai.map(nhom => ({
        label: (
          <p className="font-medium text-gray-500 text-lg">{nhom.tenNhom}</p>
        ),
        type: 'group',
        key: nhom.id,
        children: nhom.dsChiTietLoai.map(chiTiet => ({
          label: (
            <a onClick={() => handleClick(chiTiet.id, chiTiet.tenChiTietLoai)}>
              {chiTiet.tenChiTiet}
            </a>
          ),
          key: chiTiet.id,
        })),
      }))}
    </Menu>
  );

  return (
    // props.children lấy từng phần tử con để truyền vào dropdown
    <Dropdown menu={{ items: menu.props.children }}>
      <a
        className="text-gray-600 font-medium"
        onClick={e => e.preventDefault()}
      >
        {loaiCongViec.tenLoaiCongViec}
      </a>
    </Dropdown>
  );
};

export default WorkTypeGroupList;
