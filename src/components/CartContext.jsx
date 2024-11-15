import { createContext, useEffect, useState } from "react";
import {collection, getDocs, addDoc } from 'firebase/firestore/lite'
import db from "../firebase";
import Swal from 'sweetalert2';

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

    async function getCategories() {
      const categoriasCol = collection(db, 'categorias')
      const categoriasSnapshot = await getDocs(categoriasCol)
      const categorias = categoriasSnapshot.docs.map(producto => producto.data())
      return categorias
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
        if(docRef) {
          Swal.fire({
            title: "Su Compra fue Exitosa!",
            text: `Numero de orden ${docRef.id}`,
            icon: "success"
          });
          setCart([]);
          setIsActive(false);
        }
      } catch(e) {
        console.log(e)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error en su compra",
        });
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
        isActive,
        getCategories,
      }}
      >
        {children}
      </CartContext.Provider>
    )
}





export default CartContext





