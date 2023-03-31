import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const changeUser = (user) => setUser(user);

  const getUserFromStorage = () => {
    const localData = localStorage.getItem("user");
    return localData ? JSON.parse(localData) : [];
  };

  const [user, setUser] = useState(getUserFromStorage());

  const setUserInStorage = (user) =>
    localStorage.setItem("user", JSON.stringify(user));

  useEffect(() => {
    setUserInStorage(user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
