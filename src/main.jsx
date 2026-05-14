import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CartProvider from './pages/CartContext.jsx' // Importamos el Provider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider> {/* Envolvemos la App */}
    <App />
    </CartProvider>
  </StrictMode>,
);
