import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialValues = { theme: "light", users: [] };

function handleChangeTheme(state, action) {
  switch (action.type) {
    case "CHANGE_MOD":
      let newMod = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: newMod };
    default:
      return state;
  }
}

const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(handleChangeTheme, initialValues);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
