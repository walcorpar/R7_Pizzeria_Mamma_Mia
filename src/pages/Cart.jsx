import { useContext } from "react"; // 1. Cambia useState por useContext
import { CartContext } from "./CartContext.jsx"; // 2. Verifica que la ruta sea correcta

export default function Cart() {
  // 3. Extraemos TODO desde el Contexto Global
  // No necesitamos declarar funciones locales, ya existen en el Provider
  const { cart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);

  return (
    <div className="card mt-5 p-4 shadow">
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title mb-3">
            <h4><b>Detalles del pedido</b></h4>
          </div>
          
          {/* 4. Mapeamos el 'cart' global[cite: 3] */}
          {cart.map((item) => (
            <div className="row border-top border-bottom" key={item.id}>
              <div className="row main align-items-center py-3">
                <div className="col-2">
                  <img className="img-fluid rounded" src={item.img} alt={item.name} />
                </div>
                <div className="col">
                  <div className="row text-muted text-capitalize">{item.name}</div>
                  <div className="row small">Precio unitario: ${item.price.toLocaleString("es-CL")}</div>
                </div>
                <div className="col text-center">
                  <b>${(item.price * item.count).toLocaleString("es-CL")}</b>
                </div>
                <div className="col d-flex align-items-center justify-content-center">
                  {/* 5. Usamos las funciones que vienen del Contexto[cite: 3] */}
                  <button 
                    className="btn btn-outline-danger btn-sm" 
                    onClick={() => decreaseQuantity(item.id)}
                  >-</button>
                  <span className="mx-3 fw-bold">{item.count}</span>
                  <button 
                    className="btn btn-outline-primary btn-sm" 
                    onClick={() => increaseQuantity(item.id)}
                  >+</button>
                </div>
              </div>
            </div>
          ))}

          {cart.length === 0 && (
            <div className="text-center p-5">
               <h5>Tu carrito está vacío 🍕</h5>
            </div>
          )}
        </div>

        <div className="col-md-4 summary bg-light p-3 rounded">
          <div><h5><b>Resumen</b></h5></div>
          <hr />
          <div className="row mt-2">
            <div className="col">Subtotal</div>
            <div className="col text-end">${total.toLocaleString("es-CL")}</div>
          </div>
          <div className="row mt-4 mb-4" style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}>
            <div className="col">TOTAL</div>
            {/* 6. Este total ahora será idéntico al del Navbar[cite: 3] */}
            <div className="col text-end h5"><b>${total.toLocaleString("es-CL")}</b></div>
          </div>
          <button className="btn btn-dark w-100 py-2">IR A PAGAR</button>
        </div>
      </div>
    </div>
  );
}