import { createContext, useState } from "react";

// 1. Exportación con nombre (Named Export) para el contexto
export const UserContext = createContext();

// 2. Exportación con nombre para el Provider
export const UserProvider = ({ children }) => {
  // Requerimiento: estado token en true por defecto [cite: 25]
  const [token, setToken] = useState(true);
  
  // Requerimiento: método logout que cambie el token a false [cite: 26]
  const logout = () => setToken(false);

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};