import { RouteObject } from 'react-router-dom';
import PromoPage from './PromoPage';

export const PromoRoute: RouteObject = {
  path: '/',
  index: true,
  loader: () => import('./PromoLoader'),
  element: <PromoPage />,
};
