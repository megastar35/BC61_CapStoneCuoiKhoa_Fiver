import { useEffect, useState } from 'react';
import { quanLyCongViec } from '../../services/quanLyCongViec';
import './categoriesMenu.scss';
import WorkTypeGroupList from '../WorkTypeGroupList/WorkTypeGroupList';
const CategoriesMenu = () => {
  const [menuCongViec, setMenuCongViec] = useState([]);
  const [listNhomLoai, setListNhomLoai] = useState([]);

  useEffect(() => {
    quanLyCongViec
      .layMenuLoaiCongViec()
      .then(res => {
        setMenuCongViec(res.data.content);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (menuCongViec.length > 0) {
      const allNhomChiTietLoai = menuCongViec.flatMap(
        item => item.dsNhomChiTietLoai
      );
      setListNhomLoai(allNhomChiTietLoai);
    }
  }, [menuCongViec]); // Chỉ chạy lại hiệu ứng này khi menuCongViec thay đổi
  // const menu = [
  //   {
  //     key: menuCongViec.id,
  //     label: (
  //       <WorkTypeGroupList key={menuCongViec.id} dsNhomLoai={listNhomLoai} />
  //     ),
  //   },
  // ];
  return (
    <div className="categories_menu border-b border-b-gray-200">
      <div className="container">
        <nav>
          <ul className="flex justify-between">
            {menuCongViec?.map(item => {
              return (
                <li key={item.id} className="py-2">
                  <WorkTypeGroupList
                    tenLoaiCongViec={item.tenLoaiCongViec}
                    dsNhomChiTietLoai={item.dsNhomChiTietLoai}
                  />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CategoriesMenu;
