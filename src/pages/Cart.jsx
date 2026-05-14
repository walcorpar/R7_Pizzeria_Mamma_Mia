import { useContext } from "react";
import { CartContext } from "./CartContext.jsx";
// 1. Importamos el UserContext
import { UserContext } from "../context/UserContext.jsx"; 

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);
  
  // 2. Obtenemos el token del contexto de usuario
  const { token } = useContext(UserContext); 

  return (
    <div className="card mt-5 p-4 shadow">
      <div className="row">
        <div className="col-md-8 cart">
          {/* ... resto de tu código de mapeo del carrito ... */}
          {cart.map((item) => (
             <div key={item.id}> {/* Tu lógica de items aquí */} </div>
          ))}
        </div>

        <div className="col-md-4 summary bg-light p-3 rounded">
          <div><h5><b>Resumen</b></h5></div>
          <hr />
          <div className="row mt-4 mb-4" style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}>
            <div className="col">TOTAL</div>
            <div className="col text-end h5"><b>${total.toLocaleString("es-CL")}</b></div>
          </div>
          
          {/* 3. REQUERIMIENTO 4: Deshabilitar si el token es false */}
          <button 
            className="btn btn-dark w-100 py-2"
            disabled={!token}
          >
            {token ? "IR A PAGAR" : "INICIA SESIÓN PARA PAGAR"}
          </button>
        </div>
      </div>
    </div>
  );
}