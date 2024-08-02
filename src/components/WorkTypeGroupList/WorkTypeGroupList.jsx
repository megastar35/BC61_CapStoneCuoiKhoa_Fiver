import React from 'react';
import { useDispatch } from 'react-redux';
import { Dropdown, Menu } from 'antd';
import { fetchWorkByChiTiet } from '../../redux/slice/workSlice';
import './workTypeGroupList.scss';
const WorkTypeGroupList = ({
  loaiCongViec,
  dsNhomChiTietLoai,
  setDisplayQuery,
}) => {
  const dispatch = useDispatch();
  const handleClick = (chiTietId, tenChiTietLoai) => {
    dispatch(fetchWorkByChiTiet(chiTietId));
    setDisplayQuery(tenChiTietLoai); // Cập nhật displayQuery khi người dùng click
  };

  if (dsNhomChiTietLoai.length === 0) {
    return null;
  }

  const items = dsNhomChiTietLoai.map(nhom => ({
    label: <p className="menu-group-item"> {nhom.tenNhom} </p>,
    key: nhom.id,
    type: 'group',
    children:
      nhom.dsChiTietLoai.length > 0
        ? nhom.dsChiTietLoai.map(chiTiet => ({
            label: (
              <a
                className="detail-item"
                onClick={() => handleClick(chiTiet.id, chiTiet.tenChiTiet)}
              >
                {chiTiet.tenChiTiet}
              </a>
            ),
            key: chiTiet.id,
          }))
        : [
            {
              label: <span>No details available</span>,
              key: `no-details-${nhom.id}`,
            },
          ],
  }));

  return (
    <Dropdown menu={{ items }}>
      <a
        className="text-gray-500 font-medium"
        onClick={e => e.preventDefault()}
      >
        {loaiCongViec.tenLoaiCongViec}
      </a>
    </Dropdown>
  );
};

export default WorkTypeGroupList;
