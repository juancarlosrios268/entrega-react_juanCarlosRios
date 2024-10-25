import { FaShoppingCart } from "react-icons/fa";
import "./style.css"

function CartWidget() {
    return (
      <>
      <label className="cart-button">
         <FaShoppingCart size="40px"/> 
      </label>
      <input type="checkbox" hidden />
      <aside className="cart">
        <ul>
         <li>a</li>
         <li>b</li>
        </ul>
      </aside>
      <button>limpiar</button>
      </>
    )
  }
  
  export default  CartWidget