import { useState } from 'react'
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import RegisterPage from './Components/Register.jsx'
import LoginPage from './Components/LoginPage.jsx'
import Cart from './Components/Cart.jsx' // 1. Importamos el nuevo componente
import Pizzas from './Components/Pizza.jsx'
import './assets/css/App.css'

function App() {
  // 2. Iniciamos por defecto en 'home'.
  const [vista, setVista] = useState('pizza');

  return (
    <div className="layout-grid">
      
      {/* 3. Le pasamos la función setVista al Navbar para que pueda cambiar de pantalla */}
      <Navbar setVista={setVista} /> 

      {/* 4. Usamos un <main> para envolver las vistas y aplicamos renderizado condicional */}
      <main className="main-content">
        {vista === 'home' && <Home />}
        {vista === 'register' && <RegisterPage />}
        {vista === 'login' && <LoginPage />}
        {vista === 'cart' && <Cart />} {/* <-- Aquí se carga el Carrito */}
        {vista === 'pizza' && <Pizzas />}
        
      </main>

      <Footer />
    </div>
  );
}

export default App