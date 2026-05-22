//Home.jsx
import { useState, useEffect } from "react";
import Header from "../Header.jsx";
import CardPizza from "../CardPizza.jsx";
import { pizzas } from "../assets/js/pizzas.js"; // 2. Importamos el array de pizzas reales
import Pizzas from '../pages/Pizza.jsx'; // 2. Importamos el componente que muestra las pizzas

export default function Home() {
  const [pizzas, setPizzas] = useState([]); // 1. Estado inicial vacío

  const consultarApi = async () => {
      const url = "http://localhost:5000/api/pizzas";
      const response = await fetch(url);
      const data = await response.json();
      setPizzas(data); // 3. Llenamos el estado con los datos reales
  };

  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <div>
      <header className="header-area">
        <Header />
      </header>

      <main className="main-area container mt-5">
        <div className="row">
          {pizzas.map((pizza) => (
            <div
              className="col-12 col-md-4 mb-4 d-flex justify-content-center" key={pizza.id}>
              <CardPizza
                desc={pizza.desc}
                name={pizza.name}
                img={pizza.img}
                ingredients={pizza.ingredients}
                price={pizza.price}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}