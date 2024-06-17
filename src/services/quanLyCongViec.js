import { http } from './config';

export const quanLyCongViec = {
  layDanhSachCongViecTheoTen: tenCongViec => {
    return http.get(
      `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${tenCongViec}`
    );
  },
  layCongViecTheoChiTietLoai: maChiTietLoai => {
    return http.get(
      `/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${maChiTietLoai}`
    );
  },
  layMenuLoaiCongViec: () => {
    return http.get('/cong-viec/lay-menu-loai-cong-viec');
  },
};
