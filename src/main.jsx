import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
// import { BrowserRouter } from 'react-router-dom';
// import { store } from './redux/store.js';
// import { Provider } from 'react-redux';
import AppProviders from './contexts/AppProviders.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProviders>
    <App />
  </AppProviders>
);
