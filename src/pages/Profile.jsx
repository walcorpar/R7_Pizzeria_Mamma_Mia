import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="container mt-5 text-center">
      <h2>Perfil de Usuario</h2>
      <p>Email: usuario@correo.com</p> {/* Estático por ahora */}
      <Link to="/" className="btn btn-sm btn-danger me-2">Cerrar Sesión</Link>
    </div>
  );
}