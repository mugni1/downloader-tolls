import { createContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const DarkModeContext = createContext();

DarkModeProvider.propTypes = {
  children: PropTypes.any,
};
export default function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const value = {
    isDarkMode,
    setIsDarkMode,
  };
  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}
