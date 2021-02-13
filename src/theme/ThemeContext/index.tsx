import React, { createContext, useContext } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { ThemeType } from '../theme';
import { Colors } from '../colors';

interface Props {
  children: React.ReactNode;
}

export interface ThemeContextType {
  monochromatic: any;
  theme: ThemeType;
}

const INITIAL_THEME_CONTEXT: ThemeContextType = {
  theme: Colors.theme,
};

const ThemeContext = createContext<ThemeContextType>(INITIAL_THEME_CONTEXT);

export const useTheme = (): ThemeContextType => useContext<ThemeContextType>(ThemeContext);

const ManageThemeProvider = ({ children }: Props): JSX.Element => {
  const { theme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <StatusBar barStyle={theme.barStyle} backgroundColor={theme.primary.yellow} />
          {children}
        </React.Fragment>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

const ThemeManager = ({ children }: Props): JSX.Element => <ManageThemeProvider>{children}</ManageThemeProvider>;

export default ThemeManager;
