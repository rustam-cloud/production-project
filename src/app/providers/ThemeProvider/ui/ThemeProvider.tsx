import { ReactNode, useEffect, useMemo, useState } from 'react';

import { ThemeContext } from '../../../../shared';
import { Theme , LOCAL_STORAGE_THEME_KEY } from '../../../../shared/constants';


const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

export const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
