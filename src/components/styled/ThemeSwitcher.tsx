import { useContext } from 'react';

import { ThemeContext } from '../../styles/StylesProvider';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { Switcher } from '../UI/Switcher';

export const ThemeSwitcher = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Switcher>
        <input type="checkbox" onChange={toggleTheme} />
        <div>
          <IoSunny />
          <IoMoon />
        </div>
      </Switcher>
    </>
  );
};
