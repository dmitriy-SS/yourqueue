import { useState, useEffect } from 'react';

export const useTheme = () => {
  const defaultTheme = window?.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light';

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || defaultTheme
  );

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, toggleTheme };
};
