import { createContext, useState } from "react";

// creacion del contexto
export const CartContext = createContext()

// creacion del provider
export function CartProvider ({children}){
    const [cart, setCart] = useState([])

  //agregar y limpiar carrito
    const addToCart= product => {
      console.log(1)
    }
    const clearCart= ()=>{
      setCart([])
    }

    return(
      <CartContext.Provider value={{
        cart,
        addToCart,
        clearCart
      }}
      >
        {children}
      </CartContext.Provider>
    )
}





export default CartContext





