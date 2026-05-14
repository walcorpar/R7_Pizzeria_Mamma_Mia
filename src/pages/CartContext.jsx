import { createContext, useState } from "react";

// 1. Creamos el contexto
export const CartContext = createContext();

// 2. Creamos el Provider
export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Lógica para agregar al carrito
  const addToCart = (pizza) => {
    const pizzaIndex = cart.findIndex((item) => item.id === pizza.id);
    if (pizzaIndex >= 0) {
      const newCart = [...cart];
      newCart[pizzaIndex].count += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  // Lógica para incrementar
  const increaseQuantity = (id) => {
    const newCart = cart.map((item) => 
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCart(newCart);
  };

  // Lógica para disminuir
  const decreaseQuantity = (id) => {
    const newCart = cart.map((item) => 
      item.id === id ? { ...item, count: item.count - 1 } : item
    ).filter((item) => item.count > 0); // Si llega a 0, se elimina
    setCart(newCart);
  };

  // Cálculo del total (Requerimiento 5)
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    // Exponemos los datos y funciones a toda la aplicación
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
}