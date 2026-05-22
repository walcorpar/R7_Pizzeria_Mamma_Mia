import { createContext, useState } from "react";

// 1. Exportación con nombre para el contexto
export const UserContext = createContext();

// 2. Exportación con nombre para el Provider
export const UserProvider = ({ children }) => {
  // Ajuste Hito 8: Inicializamos en null y agregamos el estado para el email 
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  // Requerimiento 1: Método para hacer Login 
  const login = async (emailInput, passwordInput) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Almacenamos el token y el email en sus respectivos estados 
        setToken(data.token);
        setEmail(data.email);
        alert("¡Inicio de sesión exitoso!");
      } else {
        alert(data.error || "Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error en la petición de login:", error);
    }
  };

  // Requerimiento 1: Método para hacer Register 
  const register = async (emailInput, passwordInput) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Almacenamos el token y el email que devuelve la API 
        setToken(data.token);
        setEmail(data.email);
        alert("¡Registro exitoso!");
      } else {
        alert(data.error || "Error en el registro");
      }
    } catch (error) {
      console.error("Error en la petición de registro:", error);
    }
  };

  // Requerimiento 2: Método logout que elimina el token y el email del estado 
  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  // Requerimiento 3: Método para obtener el perfil del usuario autenticado [cite: 62]
  const getProfile = async () => {
    if (!token) return;

    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Enviamos el token JWT en el header [cite: 34, 38]
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener el perfil:", error);
    }
  };

  return (
    // No olvides pasar todas las nuevas funciones y estados en el Value
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};