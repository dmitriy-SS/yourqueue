import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/shares">Скидки</NavLink>
        </li>
        <li>
          <NavLink to="/catalog"> Каталог</NavLink>
        </li>
        <li>
          <NavLink to="/dashbords">Профиль</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
