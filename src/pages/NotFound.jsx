import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="display-1 text-danger">404</h1>
      <h2>¡Ups! Te saliste del mapa</h2>
      <p>La página que buscas no existe o fue movida.</p>
      <Link to="/" className="btn btn-dark mt-3">Volver al Inicio</Link>
    </div>
  );
}