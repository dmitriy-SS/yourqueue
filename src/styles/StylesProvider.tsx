import { ThemeProvider } from 'styled-components';
import { dark, light } from './themes';
import { GlobalStyles } from './GlobalStyles';
import { createContext } from 'react';
import { useTheme } from '../hooks/useTheme';

export const ThemeContext = createContext(
  {} as { theme: string; toggleTheme: () => void }
);

export const StylesProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, toggleTheme } = useTheme();
  const currentTheme = theme == 'dark' ? dark : light;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
