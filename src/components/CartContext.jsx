import { createContext, useState } from "react";

// creacion del contexto
export const CartContext = createContext()

// creacion del provider
export function CartProvider ({children}){
    const [cart, setCart] = useState([])

  //agregar y limpiar carrito
    const addToCart= (product) => {
      let newProduct = {
        precio: product.precio,
        nombre: product.nombre,
        cantidad: 1,
        id: product.id
      }

      const existeProducto = cart.find(element => element.id === newProduct.id)

      const newCart = cart.map(element => {
        if (element.id === newProduct.id) {
            element.cantidad += 1
            element.precio += newProduct.precio
        }

        return element
      })

      if (existeProducto) {
        setCart(newCart)
      } else {
        setCart([...cart, newProduct])
      }

    }
    const clearCart= ()=>{
      setCart([])
    }

    return(
      <CartContext.Provider value={{
        cart,
        addToCart,
        clearCart,
        setCart
      }}
      >
        {children}
      </CartContext.Provider>
    )
}





export default CartContext





