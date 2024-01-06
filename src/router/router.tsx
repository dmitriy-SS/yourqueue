import { createBrowserRouter } from 'react-router-dom';
import { PromoRoute } from '../pages/Promo/PromoRoute';
import Layout from '../components/layouts/Layout/Layout';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import CatalogRoute from '../pages/Catalog/CatalogRoute';
import ProfileRoute from '../pages/Profile/ProfileRoute';
import DashbordRoute from '../pages/Dashbords/DashbordRoute';
import SharesRoute from '../pages/Shares/SharesRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      PromoRoute,
      CatalogRoute,
      ProfileRoute,
      DashbordRoute,
      SharesRoute,
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
