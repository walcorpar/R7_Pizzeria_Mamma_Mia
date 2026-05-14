import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./pages/CartContext.jsx";

export default function Navbar() { // <-- Ya no recibimos setVista
  const { total } = useContext(CartContext);
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div className="container">
        
        {/* 1. El Logo ahora es un Link limpio a la raíz */}
        <Link to="/" className="navbar-brand">
          🍕 Pizzería Mamma Mia!
        </Link>
        
        <div className="navbar-nav me-auto">
          {/* 2. Enlace al Home */}
          <Link to="/" className="btn btn-sm btn-outline-light me-2">Home</Link>
          
          {token ? (
            <>
              {/* 3. Enlace al Profile */}
              <Link to="/profile" className="btn btn-sm btn-outline-light me-2">
                Profile
              </Link>
              <button className="btn btn-sm btn-outline-light me-2">
                Logout
              </button>
            </>
          ) : (
            <>
              {/* 4. Rutas lógicas puras, no archivos físicos */}
              <Link to="/login" className="btn btn-sm btn-outline-light me-2">Login</Link>
              <Link to="/register" className="btn btn-sm btn-outline-light me-2">Register</Link>
            </>
          )}
        </div>
        
        <div className="navbar-nav ms-auto">
          {/* 5. El botón del carrito ahora es un Link a /cart */}
          <Link to="/cart" className="btn btn-outline-info">
            🛒 Total: ${total.toLocaleString("es-CL")}
          </Link>
        </div>
        
      </div>
    </nav>
  );
}