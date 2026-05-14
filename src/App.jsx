// 1. Importamos las herramientas del Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 2. Importamos los componentes fijos
import Navbar from "./Navbar.jsx"; // Ajusta la ruta si es necesario
import Footer from "./Footer.jsx";

// 3. Importamos las páginas (Ajusta las rutas a tu nueva carpeta 'pages')
import Home from "./pages/Home.jsx";
import RegisterPage from "./pages/Register.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Cart from "./pages/Cart.jsx";
import Pizza from "./pages/Pizza.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    // BrowserRouter envuelve toda la app para habilitar las rutas
    <BrowserRouter>
      <div className="layout-grid">
        {/* El Navbar ya no necesita recibir setVista */}
        <Navbar /> 

        <main className="main-content">
          {/* Routes funciona como un Switch: busca la ruta que coincida con la URL */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/p001" element={<Pizza />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} /> {/* El asterisco atrapa cualquier URL que no exista */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;