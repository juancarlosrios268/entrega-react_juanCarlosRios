import { FaShoppingCart } from "react-icons/fa";
import "./style.css"
import { CartContext } from "./CartContext";
import { useContext, useState } from "react";


function CartWidget() {

    const [isActive, setIsActive] = useState(false)
    const { cart, clearCart, setCompra } = useContext(CartContext)

    return (
      <>
      <label className="cart-button" onClick={() => setIsActive(!isActive)}>
         <FaShoppingCart size="40px"/> 
      </label>
      <input type="checkbox" hidden />
      {/* <aside className="cart"> */}
      <aside className={isActive ? 'cart' : 'cart cart-display'}>
        <ul>
          {cart.map(prod=>(
              <li key ={prod.id}>
                <p>{prod.nombre}</p>
                <p>{prod.precio}</p>
                <p>{prod.cantidad}</p>

              </li>
            ))}
        </ul>
        
        <button onClick={() => clearCart(cart)} className="botonComprar">limpiar</button>
        <button onClick={() => setCompra()} className="botonComprar">Comprar</button>
      </aside>
      </>
    )
  }
  
  export default  CartWidget