import { useEffect, useState } from 'react';
import { quanLyCongViec } from '../../services/quanLyCongViec';
import './categoriesMenu.scss';
import WorkTypeGroupList from '../WorkTypeGroupList/WorkTypeGroupList';
const CategoriesMenu = ({ setDisplayQuery }) => {
  const [menuCongViec, setMenuCongViec] = useState([]);
  // const [listNhomLoai, setListNhomLoai] = useState([]);

  useEffect(() => {
    quanLyCongViec
      .layMenuLoaiCongViec()
      .then(res => {
        // Lọc ra các phần tử có dsNhomChiTietLoai không phải là mảng rỗng
        const notEmptyWorkTypeMenu = res.data.content.filter(
          item => item.dsNhomChiTietLoai.length > 0
        );
        setMenuCongViec(notEmptyWorkTypeMenu);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="categories_menu border-b border-b-gray-200">
      <div className="max-width-container">
        <nav>
          <ul className="flex justify-between">
            {menuCongViec?.map(item => {
              return (
                <li key={item.id} className="py-2">
                  <WorkTypeGroupList
                    loaiCongViec={item}
                    dsNhomChiTietLoai={item.dsNhomChiTietLoai}
                    setDisplayQuery={setDisplayQuery}
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
