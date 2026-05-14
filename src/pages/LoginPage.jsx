import { useState } from "react";

const LoginPage = () => {
  // 1. Estados para los inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 2. Función para validar el formulario
  const validarDatos = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    if (!email || !password) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      alert("El password debe tener al menos 6 caracteres.");
      return;
    }

    alert("Login exitoso!");
  };

  return (
    <form className="container mt-5" onSubmit={validarDatos}>
      <div className="form-group mb-3">
        <label>Email</label>
        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}/>
      </div>
      
      <div className="form-group mb-3">
        <label>Password</label>
        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password}/>
      </div>
    
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
};

export default LoginPage;