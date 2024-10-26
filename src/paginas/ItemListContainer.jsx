import productos from "../productos"
import Producto from "../components/itemDetailContainer"
import { useEffect, useState } from "react"

import { CartContext } from "../components/CartContext";
import { useContext } from "react";



function ItemListContainer() {
  const [productsFir, setProductosFir] = useState([])

  const { getProducts } = useContext(CartContext)

  useEffect(() => {
    getProducts().then(data => {
      console.log(data)
      setProductosFir(data)
    }).catch(e => console.log(e))
  }, [getProducts])

    return (
      <div id="container">
            {productsFir.map(prod=>(
              <Producto key ={prod.id} {...prod} />
            ))}
            
      </div>
    )
  }
  
  export default  ItemListContainer