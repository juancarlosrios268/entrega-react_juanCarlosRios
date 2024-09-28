import procuctos from "../../productos"
import Producto from "../Producto"
import "./card.css"



function ItemListContainer() {
    return (
      <div id="container">
            {procuctos.map(prod=>(
              <Producto key ={prod.id} {...prod} />
            ))}
            
      </div>
    )
  }
  
  export default  ItemListContainer