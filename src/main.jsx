import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // 1. IMPORTANTE: Importamos el Router
import App from "./App.jsx";
import CartProvider from './pages/CartContext.jsx'; // Tu proveedor del carrito

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 2. El BrowserRouter debe ser la capa más externa de la App */}
    <BrowserRouter> 
      <CartProvider> 
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);