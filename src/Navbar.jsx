import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./context/UserContext.jsx"; 
import { CartContext } from "./pages/CartContext.jsx"; 

const Navbar = () => {
  const { token, logout } = useContext(UserContext);
  const { total } = useContext(CartContext); 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Pizzería Mamma Mía</Link>
        <div className="navbar-nav me-auto">
          <Link className="btn btn-outline-white text-white ms-2" to="/">🍕 Home</Link>

          {token ? (
            <>
              <Link className="btn btn-outline-white text-white ms-2" to="/profile">🔓 Profile</Link>
              <button className="btn btn-outline-white text-white ms-2" onClick={logout}>🔒 Logout</button>
            </>
          ) : (
            <>
              <Link className="btn btn-outline-white text-white ms-2" to="/login">🔐 Login</Link>
              <Link className="btn btn-outline-white text-white ms-2" to="/register">🔐 Register</Link>
            </>
          )}
        </div>

        <div className="navbar-nav">
          <Link className="btn btn-outline-info text-info" to="/cart">
            🛒 Total: ${total.toLocaleString("es-CL")}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;