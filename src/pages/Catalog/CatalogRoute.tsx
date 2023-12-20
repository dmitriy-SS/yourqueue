import { lazy } from 'react';

const CatalogLazy = lazy(() => import('./CatalogPage'));

const CatalogRoute = {
  path: '/catalog',
  loader: () => import('./CatalogLoader'),
  element: <CatalogLazy/>,
};
export default CatalogRoute;
