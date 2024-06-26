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
        setMenuCongViec(res.data.content);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   if (menuCongViec.length > 0) {
  //     const allNhomChiTietLoai = menuCongViec.flatMap(
  //       item => item.dsNhomChiTietLoai
  //     );
  //     setListNhomLoai(allNhomChiTietLoai);
  //   }
  // }, [menuCongViec]); // Chỉ chạy lại hiệu ứng này khi menuCongViec thay đổi

  return (
    <div className="categories_menu border-b border-b-gray-200">
      <div className="container">
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
