
import { useRoutes } from 'react-router-dom';
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate';
import HomePage from '../pages/HomePage/HomePage';
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
  ]);
  return route;
};

export default useRouteCustom;
