
import { useRoutes } from 'react-router-dom';
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate';
import HomePage from '../pages/HomePage/HomePage';
import PersonalPage from '../pages/PersonalPage/PersonalPage';
import AdminPage from '../pages/PersonalPage/AdminPage';
// customHook hỗ trợ quản lí các tuyến đường của trang
const useRouteCustom = () => {
  const route = useRoutes([
  {
      path: '/',
      element: <HomeTemplate />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: '/users',
      element: <PersonalPage />,
    },
    // {
    //   path: '/users/admin',
    //   element: <AdminPage />,
    // },
  ]);
  return route;
};

export default useRouteCustom;
