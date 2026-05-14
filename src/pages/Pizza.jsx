import { useState, useEffect } from "react";
import Header from "../Header.jsx";
import CardPizza from "../CardPizza.jsx";

export default function Pizzas() {
  const [pizza, setPizza] = useState(null); 
  // 1. Nuevo estado para manejar si hubo un error en la base de datos
  const [error, setError] = useState(false); 

  const consultarApi = async () => {
      try {
        // Pon un ID falso aquí para probar: "p999"
        const url = "http://localhost:5000/api/pizzas/p001";
        const response = await fetch(url);
        
        // 2. Si el servidor dice "404 Not Found", disparamos un error manual
        if (!response.ok) {
          throw new Error("La pizza no existe");
        }

        const data = await response.json();
        setPizza(data); 
      } catch (error) {
        // 3. Si hay un error (por red o ID falso), activamos el estado de error
        setError(true);
      }
  };

  useEffect(() => {
    consultarApi();
  }, []);

  // 🛡️ BARRERA 1: Si hay un error, mostramos esto y detenemos todo
  if (error) {
    return (
      <div className="container mt-5 text-center">
        <h2 className="text-danger">Error 404</h2>
        <p>Lo sentimos, la pizza que buscas no existe en nuestra base de datos.</p>
      </div>
    );
  }

  // 🛡️ BARRERA 2: Si no hay error, pero aún no llegan los datos (Loading)
  if (!pizza) {
    return (
      <div className="container mt-5 text-center">
        <h2>Cargando datos del servidor...</h2>
      </div>
    );
  }

  // ✅ ÉXITO: Si pasó las dos barreras, dibujamos la tarjeta
  return (
    <div>
      <header className="header-area">
        <Header />
      </header>

      <main className="main-area container mt-5">
        <div className="row justify-content-center">
            <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
              <CardPizza
                desc={pizza.desc}
                name={pizza.name}
                img={pizza.img}
                ingredients={pizza.ingredients}
                price={pizza.price}
              />
            </div>
        </div>
      </main>
    </div>
  );
}