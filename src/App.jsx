import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx"; 
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/Register";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart"; 
import { UserProvider } from "./context/UserContext.jsx"; // Tu proveedor de usuario

function App() {
  return (
    <UserProvider>
      {/* El Navbar se mantiene afuera para que sea visible en todo el sitio */}
      <Navbar />

      {/* Las rutas controlan qué página mostrar individualmente */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>Página no encontrada 404</h1>} />
      </Routes>
    </UserProvider>
  );
}

export default App;