import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// Ajusta la ruta relativa si es necesario para importar correctamente tu UserContext
import { UserContext } from "../context/UserContext"; 

export default function Profile() {
  // 1. Consumimos el email y el método logout del UserContext
  const { email, logout } = useContext(UserContext);
  const navigate = useNavigate();

  // 2. Función manejadora para cerrar sesión y redirigir al Home
  const handleLogout = () => {
    logout(); // REQ 5: Elimina el token y el email del estado global
    navigate("/"); // Redirige al usuario a la página de inicio
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Perfil de Usuario</h2>
      {/* REQ 5: Muestra el email del usuario autenticado de forma dinámica */}
      <p className="fw-bold mt-3">Email: {email || "No has iniciado sesión"}</p> 
      
      {/* REQ 5: Botón para cerrar sesión conectado al contexto */}
      <button onClick={handleLogout} className="btn btn-sm btn-danger">
        Cerrar Sesión
      </button>
    </div>
  );
}