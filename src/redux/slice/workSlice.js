import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { quanLyCongViec } from '../../services/quanLyCongViec';

const initialState = {
  searchResults: [],
  chiTietResults: [],
  isSearchingByName: true,
};

const workSlice = createSlice({
  name: 'work',
  initialState,
  reducers: {
    // set kết quả của giá trị tìm kiếm
    setSearchValueResults: (state, action) => {
      state.searchResults = action.payload;
      state.isSearchingByName = true;
    },
    // lấy công việc theo chi tiết loại (maChiTietLoai)
    setChiTietCongViecId(state, action) {
      state.chiTietResults = action.payload;
      state.isSearchingByName = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchWorkList.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.isSearchingByName = true;
      })
      .addCase(fetchWorkByChiTiet.fulfilled, (state, action) => {
        state.chiTietResults = action.payload;
        state.isSearchingByName = false;
      });
  },
});

export const { setSearchValueResults, setChiTietCongViecId } =
  workSlice.actions;
export default workSlice.reducer;

// Thunk function để gọi API và dispatch actions
export const fetchWorkList = createAsyncThunk(
  'work/fetchWorkList',
  async (query, thunkAPI) => {
    const response = await quanLyCongViec.layDanhSachCongViecTheoTen(query);
    return response.data.content;
  }
);

export const fetchWorkByChiTiet = createAsyncThunk(
  'work/fetchWorkByChiTiet',
  async (chiTietId, thunkAPI) => {
    const response = await quanLyCongViec.layCongViecTheoChiTietLoai(chiTietId);
    return response.data.content;
  }
);
