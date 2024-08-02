import { createContext, useContext, useState } from 'react';

const FilterContext = createContext();
export const useFilter = () => {
  return useContext(FilterContext);
};
export const FilterProvider = ({ children }) => {
  const [filterValue, setFilterValue] = useState({});

  const updateFilter = (key, value) => {
    setFilterValue(prev => ({
      ...prev,
      [key]: value,
    }));
  };
  return (
    <FilterContext.Provider value={{ filterValue, updateFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
