import { useContext, useState } from "react";
import { CartContext } from "./CartContext.jsx";
import { UserContext } from "../context/UserContext.jsx"; 

export default function Cart() {
  // Extraemos las funciones para aumentar y disminuir cantidad desde el CartContext
  const { cart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);
  const { token } = useContext(UserContext); 

  // Estado para controlar el mensaje de éxito (Requerimiento 8)
  const [success, setSuccess] = useState(false);

  // Requerimiento 7: Función para enviar el carrito al backend
  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          cart: cart,
        }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        alert("Hubo un problema al procesar tu pago. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al realizar el checkout:", error);
    }
  };

  return (
    <div className="card mt-5 p-4 shadow">
      <div className="row">
        {/* Columna Izquierda: Listado de Productos */}
        <div className="col-md-8 cart">
          <h4 className="mb-4"><b>Carrito de Compras</b></h4>

          {/* Mensaje de éxito condicional (Requerimiento 8) */}
          {success && (
            <div className="alert alert-success text-center fw-bold mb-4" role="alert">
              ¡Compra realizada con éxito! 🍕 Pronto recibirás tu pedido.
            </div>
          )}

          {/* Si el carrito está vacío, mostramos un mensaje amigable */}
          {cart.length === 0 ? (
            <p className="text-muted">Tu carrito está vacío. ¡Agrega unas ricas pizzas!</p>
          ) : (
            // Renderizado dinámico de los items del carrito
            cart.map((item) => (
              <div key={item.id} className="row border-top border-bottom py-3 align-items-center">
                {/* Imagen de la pizza */}
                <div className="col-2">
                  <img className="img-fluid rounded" src={item.img} alt={item.name} style={{ maxHeight: "60px", objectFit: "cover" }} />
                </div>
                
                {/* Nombre de la pizza (con mayúscula inicial) */}
                <div className="col-4">
                  <span className="text-muted text-capitalize">{item.name}</span>
                </div>
                
                {/* Controles de cantidad (+ / -) */}
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <button className="btn btn-sm btn-outline-dark px-2 py-0" onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span className="mx-3 fw-bold">{item.count}</span>
                  <button className="btn btn-sm btn-outline-dark px-2 py-0" onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                
                {/* Precio multiplicado por la cantidad */}
                <div className="col-3 text-end fw-bold">
                  ${(item.price * item.count).toLocaleString("es-CL")}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Columna Derecha: Resumen de la compra */}
        <div className="col-md-4 summary bg-light p-3 rounded">
          <div><h5><b>Resumen</b></h5></div>
          <hr />
          <div className="row mt-4 mb-4" style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}>
            <div className="col">TOTAL</div>
            <div className="col text-end h5"><b>${total.toLocaleString("es-CL")}</b></div>
          </div>
          
          <button 
            className="btn btn-dark w-100 py-2"
            disabled={!token || cart.length === 0} // Deshabilitado si no hay token o si el carrito está vacío
            onClick={handleCheckout}
          >
            {token ? "IR A PAGAR" : "INICIA SESIÓN PARA PAGAR"}
          </button>
        </div>
      </div>
    </div>
  );
}