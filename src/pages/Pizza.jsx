import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header.jsx";
import CardPizza from "../CardPizza.jsx";

export default function Pizzas() {
  const { id } = useParams(); // Obtiene el id de la URL [cite: 17]
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const consultarApi = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        
        // Si el servidor responde con error (ej. 404), lanzamos el catch
        if (!res.ok) {
          throw new Error("La pizza no existe");
        }

        const data = await res.json();
        setPizza(data); // Guardamos la info de la pizza [cite: 18]
      } catch (err) {
        setError(true);
      }
    };

    consultarApi();
  }, [id]); // Se ejecuta cada vez que el ID cambie

  if (error) {
    return (
      <div className="container mt-5 text-center">
        <h2 className="text-danger">Error 404</h2>
        <p>Lo sentimos, la pizza que buscas no existe.</p>
      </div>
    );
  }

  if (!pizza) {
    return (
      <div className="container mt-5 text-center">
        <h2>Cargando datos del servidor...</h2>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <CardPizza
              desc={pizza.desc}
              name={pizza.name}
              img={pizza.img}
              ingredients={pizza.ingredients}
              price={pizza.price}
              // Asegúrate de que CardPizza reciba estas props
            />
          </div>
        </div>
      </main>
    </div>
  );
}