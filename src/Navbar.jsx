import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./context/UserContext.jsx";

const Navbar = () => {
  // Extraemos el token y el método logout del contexto
  const { token, logout } = useContext(UserContext);
  const total = 25000; // Esto vendrá de tu CartContext más adelante

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Pizzería Mamma Mía</Link>
        <div className="navbar-nav me-auto">
          {/* Botón Home: Siempre visible */}
          <Link className="btn btn-outline-white text-white ms-2" to="/">🍕 Home</Link>

          {token ? (
            <>
              {/* Botones visibles solo con token: true */}
              <Link className="btn btn-outline-white text-white ms-2" to="/profile">🔓 Profile</Link>
              <button 
                className="btn btn-outline-white text-white ms-2" 
                onClick={logout} 
              >
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              {/* Botones visibles solo con token: false */}
              <Link className="btn btn-outline-white text-white ms-2" to="/login">🔐 Login</Link>
              <Link className="btn btn-outline-white text-white ms-2" to="/register">🔐 Register</Link>
            </>
          )}
        </div>

        <div className="navbar-nav">
          {/* Botón Total: Siempre visible */}
          <Link className="btn btn-outline-info text-info" to="/cart">
            🛒 Total: ${total.toLocaleString()}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;