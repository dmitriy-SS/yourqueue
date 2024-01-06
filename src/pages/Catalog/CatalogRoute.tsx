import { RouteObject } from 'react-router-dom';
import CatalogPageLazy from './CatalogPageLazy';

const CatalogRoute:RouteObject = {
  path: '/catalog',
  loader: () => import('./CatalogLoader'),
  element: <CatalogPageLazy />,
};
export default CatalogRoute;
  