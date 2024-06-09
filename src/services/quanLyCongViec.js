import { http } from './config';

export const quanLyCongViec = {
  layDanhSachCongViecTheoTen: tenCongViec => {
    return http.get(
      `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${tenCongViec}`
    );
  },
  layMenuLoaiCongViec: () => {
    return http.get('/cong-viec/lay-menu-loai-cong-viec');
  },
};
