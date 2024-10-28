import { FaShoppingCart } from "react-icons/fa";
import "./style.css"
import { useEffect } from 'react'
import { CartContext } from "./CartContext";
import { useContext } from "react";


function CartWidget() {

    const { cart } = useContext(CartContext)
    const {clearCart} = useContext(CartContext)

    return (
      <>
      <label className="cart-button">
         <FaShoppingCart size="40px"/> 
      </label>
      <input type="checkbox" hidden />
      <aside className="cart">
        <ul>
          {cart.map(prod=>(
              <li key ={prod.id}>
                <p>{prod.nombre}</p>
                <p>{prod.precio}</p>
                <p>{prod.cantidad}</p>
                <button onClick={() => clearCart(cart)} className="botonComprar">limpiar</button>

              </li>
            ))}
        </ul>
      </aside>
      </>
    )
  }
  
  export default  CartWidget