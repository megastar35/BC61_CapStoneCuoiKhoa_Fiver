import { Dropdown, Menu } from 'antd';
import './workTypeGroupList.scss';
const WorkTypeGroupList = ({ tenLoaiCongViec, dsNhomChiTietLoai }) => {
  if (dsNhomChiTietLoai.length === 0) {
    return null;
  }

  const menu = (
    <Menu key={dsNhomChiTietLoai.maLoaiCongViec}>
      {dsNhomChiTietLoai.map(nhom => ({
        label: (
          <p className="font-bold text-gray-500 text-lg">{nhom.tenNhom}</p>
        ),
        type: 'group',
        key: nhom.id,
        children: nhom.dsChiTietLoai.map(chiTiet => ({
          label: <a>{chiTiet.tenChiTiet}</a>,
          key: chiTiet.id,
        })),
      }))}
    </Menu>
  );

  return (
    // props.children lấy từng phần tử con để truyền vào dropdown
    <Dropdown menu={{ items: menu.props.children }}>
      <a onClick={e => e.preventDefault()}>{tenLoaiCongViec}</a>
    </Dropdown>
  );
};

export default WorkTypeGroupList;
