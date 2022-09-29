import React, { createContext, useState } from "react";
import { useLocalStorage } from "../utils/hooks";

export const HandlerContext = createContext(null);

function HandlerProvider({ children }) {
  const [refresh, setRefresh] = useState(false);
  const [userData, setUserData] = useLocalStorage("punchingInUserData", "");

  const logout = () => {
    setUserData("empty");
    localStorage.removeItem("linkrUserData");
  };
  
  return (
    <HandlerContext.Provider
      value={{
        refresh,
        setRefresh,
        userData,
        setUserData,
        logout,
      }}
    >
      {children}
    </HandlerContext.Provider>
  );
}

export default HandlerProvider;