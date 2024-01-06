
import { RouteObject } from 'react-router-dom';
import DashbordsPageLazy from './DashbordPageLazy';

const DashbordRoute: RouteObject = {
  path: '/dashbords',
  loader: () => import('./DashbordLoader'),
  element: <DashbordsPageLazy />,
};

export default DashbordRoute;
