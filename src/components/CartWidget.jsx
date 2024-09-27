import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
    return (
      <div className="carrito">
         <FaShoppingCart size="40px"/> 
         <span className="placa">8</span>
      </div>
    )
  }
  
  export default  CartWidget