import productos from "../../productos"
import Producto from "../itemDetailContainer"
import "./card.css"
import { useState } from "react"



function ItemListContainer() {
    return (
      <div id="container">
            {productos.map(prod=>(
              <Producto key ={prod.id} {...prod} />
            ))}
            
      </div>
    )
  }
  
  export default  ItemListContainer