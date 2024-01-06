import { RouteObject } from 'react-router-dom';
import SharesPageLazy from './SharesPageLazy';

const SharesRoute: RouteObject = {
  path: '/shares',
  loader: () => import('./SharesLoader'),
  element: <SharesPageLazy />,
};
export default SharesRoute