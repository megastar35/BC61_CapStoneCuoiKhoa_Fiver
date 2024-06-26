import { useRoutes } from 'react-router-dom';
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate';
import HomePage from '../pages/HomePage/HomePage';
import { path } from '../common/path';
import WorkListTemplate from '../templates/WorkListTemplate/WorkListTemplate';
import WorkListPage from '../pages/WorkListPage/WorkListPage';
import PersonalPage from '../pages/PersonalPage/PersonalPage';
import AdminPage from '../pages/PersonalPage/AdminPage';
// customHook hỗ trợ quản lí các tuyến đường của trang
const useRouteCustom = () => {
  const route = useRoutes([
    // {
    //     path: '/',
    //     element: <HomeTemplate />,
    //     children: [
    //       {
    //         index: true,
    //         element: <HomePage />,
    //       },
    //     ],
    //   },
    {
      path: path.trangChu,
      element: <HomeTemplate />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: path.workList,
      element: <WorkListTemplate />,
      children: [
        {
          index: true,
          element: <WorkListPage />,
        },
      ],
    },
    {
      path: '/profile',
      element: <PersonalPage />,
    },
  ]);
  return route;
};

export default useRouteCustom;
