import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserProvider, UserContext } from "./context/UserContext.jsx"; // Importamos contexto y proveedor

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Home from "./pages/Home.jsx";
import RegisterPage from "./pages/Register.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Cart from "./pages/Cart.jsx";
import Pizza from "./pages/Pizza.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";

// Creamos un componente interno para manejar las rutas y acceder al contexto
const AppRoutes = () => {
  const { token } = useContext(UserContext); // Ahora podemos usar el token aquí

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* Requerimiento 5: Ruta protegida para Profile  */}
      <Route 
        path="/profile" 
        element={token ? <Profile /> : <Navigate to="/login" />} 
      />

      {/* Requerimiento 5: Redirigir si ya está logueado  */}
      <Route 
        path="/login" 
        element={!token ? <LoginPage /> : <Navigate to="/" />} 
      />
      <Route 
        path="/register" 
        element={!token ? <RegisterPage /> : <Navigate to="/" />} 
      />

      <Route path="/cart" element={<Cart />} />

      {/* Requerimiento 1: Ruta dinámica con :id  */}
      <Route path="/pizza/:id" element={<Pizza />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

function App() {
  return (
    // Requerimiento 2: El Provider envuelve toda la aplicación [cite: 21, 22]
    <UserProvider>
      <BrowserRouter>
        <div className="layout-grid">
          <Navbar /> 
          <main className="main-content">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;