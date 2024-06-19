import React from 'react';
import { useDispatch } from 'react-redux';
import { Dropdown, Menu } from 'antd';
import { fetchWorkByChiTiet } from '../../redux/slice/workSlice';

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

  const menuItems = dsNhomChiTietLoai.map(nhom => ({
    label: <p>{nhom.tenNhom}</p>,
    type: 'group',
    key: nhom.id,
    children: nhom.dsChiTietLoai.map(chiTiet => ({
      label: (
        <a onClick={() => handleClick(chiTiet.id, chiTiet.tenChiTiet)}>
          {chiTiet.tenChiTiet}
        </a>
      ),
      key: chiTiet.id,
    })),
  }));

  return (
    <Dropdown overlay={<Menu items={menuItems} />}>
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
