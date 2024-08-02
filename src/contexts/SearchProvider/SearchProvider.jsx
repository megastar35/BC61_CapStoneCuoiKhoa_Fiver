import { createContext, useContext, useState } from 'react';
import { quanLyCongViec } from '../../services/quanLyCongViec';
import { setSearchValueResults } from '../../redux/slice/workSlice';
import { path } from '../../common/path';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e, navigate, dispatch) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return;
    }
    navigate(`${path.workList}/?query=${searchQuery}`);
    // API Call and dispatch
    quanLyCongViec
      .layDanhSachCongViecTheoTen(searchQuery)
      .then(res => {
        // console.log('api data', res.data.content);
        dispatch(setSearchValueResults(res.data.content));
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <SearchContext.Provider
      value={{ searchQuery, setSearchQuery, handleSearchSubmit }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
