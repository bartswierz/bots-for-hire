import { createContext, useState } from "react";

// //Actual value we are accessing
export const ThemeContext = createContext({
  theme: null,
  setTheme: () => null,
});

//Functional Component - This Provider allows ANY of the CHILD COMPONENTS TO ACCESS the value INSIDE the useState. We can access this anywhere inside the COMPONENT TREE that is NESTED WITHIN THE PROVIDER
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('');
  const value = { theme, setTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
