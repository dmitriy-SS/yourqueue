import { RouteObject } from 'react-router-dom';
import ProfilePageLazy from './ProfilePageLazy';

const ProfileRoute: RouteObject = {
  path: '/profile/:id',
  loader: () => import('./ProfileLoader'),
  element: <ProfilePageLazy />,
};
export default ProfileRoute;
