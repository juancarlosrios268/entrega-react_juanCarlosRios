import { createContext, useEffect, useState } from "react";
import {collection, getDocs, addDoc } from 'firebase/firestore/lite'
import db from "../firebase";

// creacion del contexto
export const CartContext = createContext()

// creacion del provider
export function CartProvider ({children}){
    const [cart, setCart] = useState([])
    const [isActive, setIsActive] = useState(false)

    async function getProducts() {
      const productosCol = collection(db, 'productos')
      const productosSnapshot = await getDocs(productosCol)
      const productos = productosSnapshot.docs.map(producto => producto.data())
      return productos
    }

    async function setCompra() {
      try {
        let totalCarrito=0
        cart.forEach(element => {
          totalCarrito = totalCarrito + element.precio
        })
        

        const docRef = await addDoc(collection(db, 'compras'), {
          detalle: cart,
          total: totalCarrito
        })
        console.log(docRef)
      } catch(e) {
        console.log(e)
      }
    }
  

  //agregar y limpiar carrito
    const removeCart= product =>{
      setCart(cart.filter(item=> item.id != product.id))
      console.log(removeCart)
    }


    const addToCart= (product) => {
      setIsActive(true)
      let newProduct = {
        precio: product.precio,
        nombre: product.nombre,
        cantidad: 1,
        id: product.id
      }

      const existeProducto = cart.find(element => element.id === newProduct.id)

      const newCart = cart.map(element => {
        if (element.id === newProduct.id) {
          console.log(newProduct.precio, element.precio)
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

    const totalCarrito= 0

    

    const clearCart= ()=>{
      setCart([])
    }

    return(
      <CartContext.Provider value={{
        cart,
        addToCart,
        clearCart,
        removeCart,
        setCart,
        getProducts,
        setCompra,
        setIsActive,
        isActive
      }}
      >
        {children}
      </CartContext.Provider>
    )
}





export default CartContext





