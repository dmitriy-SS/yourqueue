import { RouteObject } from 'react-router-dom';
import { PromoPageLazy } from './PromoPageLazy';

export const PromoRoute: RouteObject = {
  path: '/',
  index: true,
  loader: () => import('./PromoLoader'),
  element: <PromoPageLazy />,
};
