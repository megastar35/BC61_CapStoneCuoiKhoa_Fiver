import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './SearchProvider/SearchProvider';
import { store } from '../redux/store';

const AppProviders = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <SearchProvider>{children}</SearchProvider>
      </BrowserRouter>
    </ReduxProvider>
  );
};

export default AppProviders;
