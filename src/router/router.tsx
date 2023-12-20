import { createBrowserRouter } from 'react-router-dom';
import { PromoRoute } from '../pages/Promo/PromoRoute';
import Layout from '../components/layouts/Layout/Layout';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import CatalogRoute  from '../pages/Catalog/CatalogRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [PromoRoute, CatalogRoute],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
