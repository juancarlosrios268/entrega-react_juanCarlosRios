import { FaShoppingCart } from "react-icons/fa";
import "./style.css"
import { useEffect } from 'react'
import { CartContext } from "./CartContext";
import { useContext } from "react";


function CartWidget() {

    const { cart } = useContext(CartContext)
    console.log(cart)

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

              </li>
            ))}
        </ul>
      </aside>
      <button>limpiar</button>
      </>
    )
  }
  
  export default  CartWidget