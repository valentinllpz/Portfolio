import { createContext, useState, useContext } from "react";
import IThemeContext from "../interfaces/IThemeContext";

const defaultThemeContext: IThemeContext = {
  theme: true,
};

const ThemeContext = createContext<IThemeContext>(defaultThemeContext);

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((curr) => (curr === true ? false : true));	
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useThemeContext() {
	return useContext(ThemeContext);
  }
  