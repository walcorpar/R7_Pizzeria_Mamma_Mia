import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext"; 

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(UserContext);

  const validarDatos = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Todos los campos son obligatorios.");
      return;
    }
    if (password.length < 6) {
      alert("El password debe tener al menos 6 caracteres.");
      return;
    }
    await login(email, password);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4 text-center">Iniciar Sesión</h3>
      <form onSubmit={validarDatos} className="card p-4 shadow-sm">
        <div className="form-group mb-3">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            placeholder="ejemplo@correo.com"
          />
        </div>
        
        <div className="form-group mb-3">
          <label className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
            placeholder="Mínimo 6 caracteres"
          />
        </div>
      
        <button type="submit" className="btn btn-primary w-100">Enviar</button>
      </form>
    </div>
  );
};

export default LoginPage;