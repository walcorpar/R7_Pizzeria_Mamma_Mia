import { useState } from "react";

const RegisterPage = () => {
  // 1. Estados para los inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 2. Función para validar el formulario
  const validarDatos = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    if (!email || !password || !confirmPassword) {
      alert("Todos los campos son obligatorios.");
      return;
    }
    if (password.length < 6) {
      alert("El password debe tener al menos 6 caracteres.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Los passwords no coinciden.");
      return;
    }

    alert("Registro exitoso!");
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

      <div className="form-group mb-3">
        <label>Confirmar Password</label>
        <input type="password" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
      </div>

      
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
};

export default RegisterPage;