import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>sdasdsd</footer>
    </>
  );
};

export default Layout;
