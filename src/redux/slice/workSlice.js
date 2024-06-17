import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // selectedChiTietId: [],
  results: [],
};

const workSlice = createSlice({
  name: 'work',
  initialState,
  reducers: {
    // set kết quả của giá trị tìm kiếm
    setSearchValueResults: (state, action) => {
      state.results = action.payload;
    },
    // lấy công việc theo chi tiết loại (maChiTietLoai)
    setChiTietCongViecId(state, action) {
      state.results = action.payload;
    },
  },
});

export const { setSearchValueResults, setChiTietCongViecId } =
  workSlice.actions;
export default workSlice.reducer;
